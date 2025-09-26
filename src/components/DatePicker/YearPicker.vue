<template>
  <yc-trigger
    v-model:popup-visible="computedVisible"
    :popup-offset="4"
    :popup-container="popupContainer"
    :unmount-on-close="unmountOnClose"
    :disabled="disabled || readonly"
    :position="position"
    trigger="click"
    animation-name="slide-dynamic-origin"
    need-transform-origin
    v-bind="triggerProps"
  >
    <yc-input
      :model-value="formatValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :error="error"
      :size="size"
      :readonly="readonly || disabledInput"
      :style="$attrs.style"
      :class="['yc-year-picker', $attrs.class]"
    >
      <template v-if="$slots.prefix" #prefix>
        <slot name="prefix" />
      </template>
      <template #suffix>
        <slot name="suffix-icon">
          <icon-calendar />
        </slot>
      </template>
    </yc-input>
    <template #content>
      <div class="yc-picker-container">
        <div class="yc-picker-panel-wrapper">
          <div class="yc-panel-year">
            <div class="yc-panel-year-inner">
              <div class="yc-picker-header">
                <picker-icon @click="handleYearChange('pre')">
                  <slot name="icon-prev-double">
                    <icon-double-left />
                  </slot>
                </picker-icon>
                <div class="yc-picker-header-title">
                  {{ startYear }}-{{ startYear + 10 }}
                </div>
                <picker-icon @click="handleYearChange('cur')">
                  <slot name="icon-next-double">
                    <icon-double-right />
                  </slot>
                </picker-icon>
              </div>
              <div class="yc-picker-body">
                <div
                  v-for="(row, i) in yearRange"
                  :key="i"
                  class="yc-picker-row"
                >
                  <picker-cell
                    v-for="(year, k) in row"
                    :key="year"
                    :cell-in-view="!!(i || k)"
                    :is-today="year == dayjs().year()"
                    :is-selected="dayjs(computedValue).year() == year"
                    :disabled="disabledDate?.(new Date(year, 1, 1, 0, 0, 0))"
                    :value="year"
                    @click="handleSelect(year)"
                  >
                    <template v-if="$slots.cell" #cell>
                      <slot name="cell" :date="new Date(year, 1, 1, 0, 0, 0)" />
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
            <div v-if="showConfirmBtn" class="yc-picker-footer-btn-wrapper">
              <div></div>
              <yc-button type="primary" size="mini">确定</yc-button>
            </div>
          </div>
        </div>
      </div>
    </template>
  </yc-trigger>
</template>

<script lang="ts" setup>
import { ref, toRefs, watch, computed } from 'vue';
import {
  YearPickerProps,
  YearPickerEmits,
  BasePickerSlots,
  DatePickerValue,
} from './type';
import { IconDoubleLeft, IconDoubleRight, IconCalendar } from '@shared/icons';
import { getDecadeRange, useControlValue, dayjs } from '@shared/utils';
import PickerIcon from './PickerIcon.vue';
import PickerCell from './PickerCell.vue';
defineOptions({
  name: 'YearPicker',
  inheritAttrs: false,
});
const $slots = defineSlots<BasePickerSlots>();
const props = withDefaults(defineProps<YearPickerProps>(), {
  // locale: undefined,
  // hideTrigger: false,
  // allowClear: false,
  readonly: false,
  error: false,
  size: undefined,
  // shortcuts: () => [],
  // shortcutsPosition: 'bottom',
  position: 'bl',
  popupVisible: undefined,
  defaultPopupVisible: false,
  triggerProps: () => ({}),
  unmountOnClose: false,
  placeholder: '请选择年份',
  disabled: false,
  disabledDate: undefined,
  pickerValue: undefined,
  defaultPickerValue: '',
  popupContainer: undefined,
  valueFormat: 'YYYY',
  // previewShortcut: true,
  showConfirmBtn: false,
  disabledInput: false,
  // abbreviation: true,
  modelValue: undefined,
  defaultValue: '',
  format: 'YYYY',
});
const emits = defineEmits<YearPickerEmits>();
const {
  modelValue,
  defaultValue,
  pickerValue,
  defaultPickerValue,
  popupVisible,
  defaultPopupVisible,
  format,
  valueFormat,
  showConfirmBtn,
} = toRefs(props);
// 受控的值
const computedValue = useControlValue<DatePickerValue>(
  modelValue,
  defaultValue.value,
  (val) => {
    emits('update:modelValue', getFormatFromValue(val));
  },
  (val) => {
    if (!val) return val;

    return val ? getDateFromValue(val) : val;
  }
);
// 展示的value
const formatValue = computed(() => {
  return format.value && computedValue.value
    ? dayjs(computedValue.value).format(format.value)
    : (computedValue.value as string);
});
// 受控的visible
const computedVisible = useControlValue<boolean>(
  popupVisible,
  defaultPopupVisible.value,
  (val) => {
    emits('popup-visible-change', val);
    emits('update:popupVisible', val);
  }
);
// 受控的picker的值
const computedPickerValue = useControlValue<DatePickerValue>(
  pickerValue,
  defaultPickerValue.value,
  (val) => {
    emits('update:pickerValue', val);
  }
);
// 开始的year
const startYear = ref<number>(0);
// 区间范围
const yearRange = ref<number[][]>([]);
// 旧值
let oldValue: DatePickerValue = '';
// format
const getFormatFromValue = (val: DatePickerValue) => {
  let date;
  if (valueFormat.value == 'timestamp') {
    date = dayjs()
      .set('year', val as number)
      .millisecond();
  } else if (valueFormat.value == 'Date') {
    const value = new Date();
    value.setFullYear(val as number);
    date = value;
  } else {
    date = dayjs()
      .set('year', val as number)
      .format(valueFormat.value);
  }
  return date;
};
// 获取date
const getDateFromValue = (val: DatePickerValue) => {
  let date: Date;
  if (valueFormat.value == 'timestamp') {
    date = new Date(val);
  } else if (valueFormat.value == 'Date') {
    date = val as Date;
  } else {
    date = new Date();
    date.setFullYear(dayjs(String(val), valueFormat.value).year());
  }
  return date;
};
// 处理改变
const handleYearChange = (type: string) => {
  startYear.value = type == 'pre' ? startYear.value - 10 : startYear.value + 10;
  yearRange.value = getDecadeRange(startYear.value);
};
// 处理选中
const handleSelect = (year: number) => {
  computedValue.value = year;
  const value = getFormatFromValue(year);
  const date = computedValue.value as any as Date;
  const dateString = `${year}`;
  emits('select', value, date, dateString);
  if (showConfirmBtn.value) return;
  emits('change', value, date, dateString);
};
// 处理确认
const handleConfirm = () => {};
// 处理初始化值
watch(
  () => computedValue.value,
  (val) => {
    const rangeData = getDecadeRange(dayjs(val ? val : undefined).year());
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
      oldValue = computedValue.value;
      return;
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
