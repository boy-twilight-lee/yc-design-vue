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
        >此刻</yc-button
      >
      <yc-button
        type="primary"
        size="mini"
        :disabled="disabled"
        @click="handleConfirm"
      >
        确定
      </yc-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import BTween from 'b-tween';
import { default as dayjs, UnitType } from 'dayjs';
import { TimeUnit } from './type';
import { isUndefined, isArray, sleep } from '@shared/utils';
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
  disabledHours,
  disabledMinutes,
  disabledSeconds,
} = useContext().inject();
// 滚动的refs
const scrollRefs = ref<ScrollbarInstance[]>([]);
// 禁止confirm
const disabled = computed(() => {
  return !curValue.value.length || curValue.value.some((val) => !`${val}`);
});
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
      scrollContainer.scrollTo({
        top: current.scroll,
        behavior: 'instant',
      });
    },
  }).start();
  if (!disableConfirm.value) {
    return;
  }
  handleConfirm();
};
// 处理跳转
const hanldeJump = (timeMap: Record<TimeUnit, number>) => {
  // 获取所有的cells
  const cells = scrollRefs.value.map((el) => {
    return el
      .getScrollRef()
      .querySelectorAll('.yc-timepicker-cell') as NodeListOf<HTMLLIElement>;
  });
  // 以此点击
  timeColumn.value.map((v, i) => {
    const time = timeMap[v];
    handleClick(time, i, Array.from(cells[i])[time]);
  });
};
// 处理确定
const handleConfirm = () => {
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
      return (computedVisible.value = false);
    }
    curIndex.value++;
    inputRefs.value[curIndex.value]?.focus();
    curValue.value = [];
  }
};
// 暴露滚动方法
defineExpose({
  async scroll(value: string) {
    if (!computedVisible.value || !value) return;
    await sleep(0);
    // 格式化时间
    const date = dayjs(value as string, format.value);
    // 创建时间映射
    const timeMap = {
      hour: date.hour(),
      minute: date.minute(),
      second: date.second(),
    };
    curValue.value = timeColumn.value.map((v) => timeMap[v] as number);
    // 处理跳转逻辑
    hanldeJump(timeMap);
  },
});
</script>

<style lang="less" scoped>
@import './style/time-picker-panel.less';
</style>
