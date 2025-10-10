<template>
  <div class="yc-timepicker-container">
    <div class="yc-timepicker">
      <div
        v-for="(column, i) in timeColumnCells"
        :key="i"
        class="yc-timepicker-column"
      >
        <yc-scrollbar
          :outer-style="{
            height: '100%',
          }"
          :style="{
            height: '100%',
            overflow: 'auto',
          }"
          :scrollbar="scrollbar"
          :ref="(el) => (scrollRefs[i] = el as ScrollbarInstance)"
        >
          <ul>
            <li
              v-for="cell in column.cells"
              :key="cell.value"
              v-show="
                !hideDisabledOptions || !disabledTime(cell.value, column.unit)
              "
              :class="[
                'yc-timepicker-cell',
                {
                  'yc-timepicker-cell-selected': cell.value == curValue[i],
                  'yc-timepicker-cell-disabled': disabledTime(
                    cell.value,
                    column.unit
                  ),
                },
              ]"
              @click="
                !disabledTime(cell.value, column.unit) &&
                  handleClick(cell.value, i, $event.target as HTMLLIElement)
              "
            >
              <div class="yc-timepicker-cell-inner">
                {{ cell.label }}
              </div>
            </li>
          </ul>
        </yc-scrollbar>
      </div>
    </div>
    <div v-if="$slots.extra" class="yc-timepicker-footer-extra-wrapper">
      <slot name="extra" />
    </div>
    <div v-if="!disableConfirm" class="yc-timepicker-footer-btn-wrapper">
      <yc-button
        size="mini"
        @click="
          () => {
            const date = new Date();
            hanldeJump({
              hour: date.getHours(),
              minute: date.getMinutes(),
              second: date.getSeconds(),
            });
          }
        "
      >
        {{ t('datePicker.now') }}
      </yc-button>
      <yc-button
        type="primary"
        size="mini"
        :disabled="disabled"
        @click="handleConfirm"
      >
        {{ t('datePicker.ok') }}
      </yc-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, watch } from 'vue';
import { TimeUnit } from './type';
import {
  isUndefined,
  isArray,
  sleep,
  useI18n,
  BTween,
  dayjs,
  UnitType,
  isValidTimeRange,
} from '@shared/utils';
import useContext from './hooks/useContext';
import YcButton from '@/components/Button';
import {
  default as YcScrollbar,
  ScrollbarInstance,
} from '@/components/Scrollbar';
// 接收注入
const {
  timeColumn,
  timeColumnCells,
  curValue,
  format,
  computedValue,
  computedVisible,
  disableConfirm,
  hideDisabledOptions,
  curIndex,
  inputRefs,
  hideTrigger,
  scrollbar,
  scrollOffset,
  disabledHours,
  disabledMinutes,
  disabledSeconds,
} = useContext().inject();
// 国际化
const { t } = useI18n();
// 滚动的refs
const scrollRefs = ref<ScrollbarInstance[]>([]);
// 禁止confirm
const disabled = computed(() => {
  return !curValue.value.length || curValue.value.some((val) => !`${val}`);
});
// 是否通过click设置值
let isClick = false;
// 处理时间禁用
const disabledTime = (value: number, unit: TimeUnit) => {
  if (unit == 'hour') {
    return disabledHours?.()?.includes(value);
  } else if (unit == 'minute') {
    return disabledMinutes?.(...curValue.value)?.includes(value);
  } else {
    return disabledSeconds?.(...curValue.value)?.includes(value);
  }
};
// 处理点击
const handleClick = (val: number, i: number, target: HTMLLIElement) => {
  curValue.value[i] = val;
  timeColumn.value.forEach((_, i1) => {
    curValue.value[i1] = isUndefined(curValue.value[i1])
      ? 0
      : curValue.value[i1];
  });
  const scrollContainer = scrollRefs.value[i]!.getScrollRef();
  new BTween({
    from: { scroll: scrollContainer.scrollTop },
    to: { scroll: target.offsetTop },
    duration: 300,
    easing: 'quadOut',
    onUpdate: (current: { scroll: number }) => {
      scrollContainer.scrollTop = current.scroll - scrollOffset.value;
    },
  }).start();
  if (!disableConfirm.value) {
    return;
  }
  handleConfirm();
};
// 处理跳转
const hanldeJump = async (
  timeMap: Record<TimeUnit, number>,
  oldTimeMap?: Record<TimeUnit, number>
) => {
  // 获取所有的cells
  const cells = scrollRefs.value.map((el) => {
    return el
      .getScrollRef()
      .querySelectorAll('.yc-timepicker-cell') as NodeListOf<HTMLLIElement>;
  });
  for (let i = 0; i < timeColumn.value.length; i++) {
    const time = timeMap[timeColumn.value[i]];
    if (oldTimeMap) {
      const oldTime = oldTimeMap[timeColumn.value[i]];
      if (oldTime == time) continue;
    }
    handleClick(time, i, Array.from(cells[i])[time]);
  }
};
// 处理确定
const handleConfirm = () => {
  isClick = true;
  let date = dayjs();
  timeColumn.value.forEach((v, i) => {
    date = date.set(v as UnitType, curValue.value[i]);
  });
  const formatValue = date.format(format.value);
  if (!isArray(computedValue.value)) {
    computedVisible.value = false;
    computedValue.value = formatValue;
  } else {
    computedValue.value[curIndex.value] = formatValue;
    if (disableConfirm.value) {
      return;
    }
    if (curIndex.value || computedValue.value[curIndex.value + 1]) {
      const isValid = !isValidTimeRange(
        computedValue.value[0] as string,
        computedValue.value[1] as string,
        format.value
      );
      if (isValid) {
        computedValue.value = computedValue.value.reverse();
      }
      computedVisible.value = false;
      return;
    }
    curIndex.value++;
    inputRefs.value[curIndex.value]?.focus();
    curValue.value = [];
  }
};
// 检测computedValue的改变自动滚动
watch(
  () => computedValue.value,
  async (newVal, oldVal) => {
    if (isClick || !hideTrigger.value || newVal) return;
    const newDate = dayjs(newVal as string, format.value);
    const oldDate = dayjs(oldVal as string, format.value);
    hanldeJump(
      {
        hour: newDate.hour(),
        minute: newDate.minute(),
        second: newDate.second(),
      },
      {
        hour: oldDate.hour(),
        minute: oldDate.minute(),
        second: oldDate.second(),
      }
    );
    await sleep(300);
    isClick = false;
  },
  {
    immediate: true,
  }
);
// 检测visible的改变
watch(
  () => computedVisible.value,
  async (visible) => {
    await sleep(0);
    const value = (
      isArray(computedValue.value)
        ? computedValue.value[curIndex.value]
        : computedValue.value
    ) as string;
    if (!visible || !value) return;
    // 格式化时间
    const date = dayjs(value, format.value);
    // 处理跳转逻辑
    hanldeJump({
      hour: date.hour(),
      minute: date.minute(),
      second: date.second(),
    });
  },
  {
    immediate: true,
  }
);
</script>

<style lang="less">
@import './style/time-picker-panel.less';
</style>
