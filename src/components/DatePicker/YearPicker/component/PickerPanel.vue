<template>
  <div
    :class="[
      'yc-picker-container',
      `yc-picker-container-shortcuts-${shortcutsPosition}`,
    ]"
  >
    <picker-shortcuts
      v-if="['left', 'right'].includes(shortcutsPosition)"
      :shortcuts-position="shortcutsPosition"
      :shortcuts="shortcuts"
      @click="handleShortcutClick"
    />
    <div class="yc-picker-panel-wrapper">
      <div class="yc-panel-year">
        <div class="yc-panel-year-inner">
          <div class="yc-picker-header">
            <div class="yc-picker-header-icon" @click="handleYearChange('pre')">
              <slot name="icon-prev-double">
                <icon-double-left />
              </slot>
            </div>
            <div class="yc-picker-header-title">
              {{ startYear }}-{{ startYear + 10 }}
            </div>
            <div
              class="yc-picker-header-icon"
              @click="handleYearChange('NEXT')"
            >
              <slot name="icon-next-double">
                <icon-double-right />
              </slot>
            </div>
          </div>
          <div class="yc-picker-body">
            <div v-for="(row, i) in yearRange" :key="i" class="yc-picker-row">
              <picker-cell
                v-for="(year, k) in row"
                :key="year"
                :cell-in-view="!!(i || k)"
                :is-today="year == dayjs().year()"
                :is-selected="getValueFromFormat(computedValue) == year"
                :disabled="disabledDate?.(getDateFromYear(year))"
                :value="year"
                @click="handleSelect(year)"
              >
                <template v-if="$slots.cell" #cell>
                  <slot name="cell" :date="getDateFromYear(year)" />
                </template>
              </picker-cell>
            </div>
          </div>
        </div>
      </div>
      <div class="yc-picker-footer">
        <div v-if="$slots.extra" class="yc-picker-footer-extra-wrapper">
          <slot name="extra" />
        </div>
        <div
          v-if="showConfirmBtn || shortcutsPosition == 'bottom'"
          class="yc-picker-footer-btn-wrapper"
        >
          <picker-shortcuts
            v-if="shortcutsPosition == 'bottom'"
            :shortcuts="shortcuts"
            :shortcuts-position="shortcutsPosition"
            @click="handleShortcutClick"
          />
          <yc-button
            :disabled="!computedValue"
            type="primary"
            size="mini"
            @click="handleConfirm"
          >
            确定
          </yc-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, toRefs, watch, computed } from 'vue';
import { DatePickerValue, ShortcutType } from '@/components/DatePicker/type';
import useYearPickerContext from '@/components/DatePicker/hooks/useYearPickerContext';
import { getDecadeRange, dayjs, sleep } from '@shared/utils';
import { IconDoubleLeft, IconDoubleRight } from '@shared/icons';
import PickerCell from './PickerCell.vue';
import PickerShortcuts from './PickerShortcuts.vue';
const {
  computedValue,
  computedVisible,
  showConfirmBtn,
  shortcuts,
  shortcutsPosition,
  emits,
  getDateFromYear,
  getFormatFromValue,
  getValueFromFormat,
  disabledDate,
} = useYearPickerContext().inject();
// 开始的year
const startYear = ref<number>(0);
// 区间范围
const yearRange = ref<number[][]>([]);
// 旧值
let oldValue: DatePickerValue;
// 是否确认过
let isConfirm = false;
// 是否点击快捷
let isShortcut = false;
// 处理改变
const handleYearChange = (type: string) => {
  startYear.value = type == 'pre' ? startYear.value - 10 : startYear.value + 10;
  yearRange.value = getDecadeRange(startYear.value);
};
// 处理shortcutclick
const handleShortcutClick = (shortcut: ShortcutType) => {
  emits('select-shortcut', shortcut);
  isShortcut = true;
  if (!shortcut.value) return;
  console.log(getFormatFromValue(shortcut.value as Date), 'valeu');
  computedValue.value = getFormatFromValue(
    (shortcut.value as Date).getFullYear()
  );
  computedVisible.value = false;
};
// 处理选中
const handleSelect = (year: number) => {
  const value = getFormatFromValue(year);
  const date = getDateFromYear(year);
  const dateString = `${year}`;
  computedValue.value = dateString;
  emits('select', value, date, dateString);
  if (showConfirmBtn.value) return;
  emits('change', value, date, dateString);
};
// 处理确认
const handleConfirm = async () => {
  isConfirm = true;
  const date = getDateFromYear(getValueFromFormat(computedValue.value));
  const year = date.getFullYear();
  const value = getFormatFromValue(year);
  emits('change', value, date, `${year}`);
  emits('ok', value, date, `${year}`);
  await sleep(0);
  computedVisible.value = false;
};
// 处理初始化值
watch(
  () => computedValue.value,
  (val) => {
    console.log(getValueFromFormat(val), 'format');
    const rangeData = getDecadeRange(
      val ? getValueFromFormat(val) : new Date().getFullYear()
    );
    startYear.value = rangeData[0][1];
    yearRange.value = rangeData;
  },
  {
    immediate: true,
  }
);
// 处理visible发生改变
watch(
  () => computedVisible.value,
  (val) => {
    if (val) {
      isConfirm = false;
      oldValue = getValueFromFormat(computedValue.value);
      return;
    }
    if (!showConfirmBtn.value || isConfirm || isShortcut) return;
    computedValue.value = oldValue ?? computedValue.value;
  },
  {
    immediate: true,
  }
);
</script>

<style lang="less" scoped></style>
