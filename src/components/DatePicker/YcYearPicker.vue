<template>
  <define-panel>
    <picker-panel
      :locale="locale"
      :preview-shortcut="previewShortcut"
      :shortcuts="shortcuts"
      :shortcuts-position="shortcutsPosition"
      :confirm-btn-disabled="!computedValue"
      :show-confirm-btn="showConfirmBtn"
      @confirm="handleConfirm"
      @shortcut-select="handleShortcut"
    >
      <div class="yc-panel-year">
        <div class="yc-picker-header">
          <div class="yc-picker-header-icon" @click="handleYearChange('pre')">
            <slot name="icon-prev-double">
              <icon-double-left />
            </slot>
          </div>
          <div class="yc-picker-header-title">
            {{ startYear }}-{{ startYear + 10 }}
          </div>
          <div class="yc-picker-header-icon" @click="handleYearChange('next')">
            <slot name="icon-next-double">
              <icon-double-right />
            </slot>
          </div>
        </div>
        <div class="yc-picker-body">
          <div v-for="(row, i) in yearRange" :key="i" class="yc-picker-row">
            <picker-cell
              v-for="({ value: date, label }, k) in row"
              :key="date.getFullYear()"
              :cell-in-view="!!(i || k)"
              :is-today="date.getFullYear() == dayjs().year()"
              :is-selected="isSelected(date)"
              :disabled="disabledDate?.(date)"
              :value="label"
              @click="handleSelect(date)"
            >
              <template v-if="$slots.cell" #cell>
                <slot name="cell" :date="date" />
              </template>
            </picker-cell>
          </div>
        </div>
      </div>
      <template v-if="$slots.extra" #extra>
        <slot name="extra" />
      </template>
    </picker-panel>
  </define-panel>
  <picker-input
    v-if="!hideTrigger"
    :class="$attrs.class"
    :style="$attrs.style"
    type="year"
  >
    <template #content>
      <reuse-panel />
    </template>
  </picker-input>
  <reuse-panel v-else />
</template>

<script lang="ts" setup>
import { ref, watch, toRefs } from 'vue';
import {
  YearPickerProps,
  YearPickerEmits,
  BasePickerSlots,
  ShortcutType,
  DatePickerValue,
} from './type';
import usePicker, { YearData } from './hooks/userPicker';
import { dayjs, sleep, isUndefined, useControlValue } from '@shared/utils';
import { IconDoubleLeft, IconDoubleRight } from '@shared/icons';
import PickerCell from './component/PickerCell.vue';
import PickerPanel from './component/PickerPanel.vue';
import PickerInput from './component/PickerInput.vue';
defineOptions({
  name: 'YearPicker',
  inheritAttrs: false,
});
const $slots = defineSlots<BasePickerSlots>();
const props = withDefaults(defineProps<YearPickerProps>(), {
  locale: () => ({}),
  hideTrigger: false,
  allowClear: false,
  readonly: false,
  error: false,
  size: undefined,
  shortcuts: () => [],
  shortcutsPosition: 'bottom',
  position: 'bl',
  popupVisible: undefined,
  defaultPopupVisible: false,
  triggerProps: () => ({}),
  unmountOnClose: false,
  placeholder: '',
  disabled: false,
  disabledDate: undefined,
  // pickerValue: undefined,
  // defaultPickerValue: '',
  popupContainer: undefined,
  valueFormat: 'YYYY',
  format: 'YYYY',
  previewShortcut: true,
  showConfirmBtn: false,
  disabledInput: false,
  modelValue: undefined,
  defaultValue: '',
});
const emits = defineEmits<YearPickerEmits>();
const { modelValue, defaultValue } = toRefs(props);
// 格式化时间
const computedValue = useControlValue<DatePickerValue>(
  modelValue,
  defaultValue.value,
  (val) => {
    emits('update:modelValue', getFormatFromDate(val as Date));
  }
);
// 获取格式化
const {
  computedPickerValue,
  computedVisible,
  showConfirmBtn,
  DefinePanel,
  ReusePanel,
  getDateFromFormat,
  getFormatFromDate,
  getRangeOfYear,
} = usePicker({
  computedValue,
  props,
  emits,
});
// 开始的year
const startYear = ref<number>(0);
// 区间范围
const yearRange = ref<YearData[][]>([]);
// 旧值
let oldDate: Date | string;
// 选中的date
let selectDate: Date;
// 是否确认过
let isConfirm = false;
// 是否选中
const isSelected = (val: Date) => {
  const date = getDateFromFormat(computedValue.value) as Date;
  if (!date) return false;
  return date.getFullYear() == val.getFullYear();
};
// 处理改变
const handleYearChange = (type: string) => {
  startYear.value = type == 'pre' ? startYear.value - 10 : startYear.value + 10;
  const { range } = getRangeOfYear(startYear.value);
  yearRange.value = range;
};
// 处理shortcut
const handleShortcut = (shortcut: ShortcutType, hover: boolean) => {
  if (!hover) {
    emits('select-shortcut', shortcut);
  }
  if (shortcut.value) {
    computedValue.value = shortcut.value as Date;
  }
  if (hover) return;
  isConfirm = true;
  computedVisible.value = false;
};
// 处理选中
const handleSelect = (date: Date) => {
  computedValue.value = date;
  selectDate = date;
  const dateString = dayjs(date).format('YYYY');
  emits('select', computedValue.value, date, dateString);
  if (showConfirmBtn.value) return;
  emits('change', computedValue.value, date, dateString);
};
// 处理确认
const handleConfirm = async () => {
  isConfirm = true;
  const dateString = dayjs(selectDate).format('YYYY');
  emits('change', computedValue.value, selectDate, dateString);
  emits('ok', computedValue.value, selectDate, dateString);
  await sleep(0);
  computedVisible.value = false;
};
// 处理初始化值
watch(
  () => computedValue.value,
  (val) => {
    const date = val ? getDateFromFormat(val) : new Date();
    const { range, startYear: start } = getRangeOfYear(
      (date as Date).getFullYear()
    );
    startYear.value = start;
    yearRange.value = range;
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
      oldDate = computedValue.value
        ? getDateFromFormat(computedValue.value)
        : (computedValue.value as string);
    } else {
      if (!showConfirmBtn.value || isConfirm || isUndefined(oldDate)) return;
      computedValue.value = oldDate;
    }
  },
  {
    immediate: true,
  }
);
</script>

<style lang="less">
@import './style/year-picker.less';
</style>
