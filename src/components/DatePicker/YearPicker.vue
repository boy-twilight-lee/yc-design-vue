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
      :class="[
        'yc-year-picker',
        $attrs.class,
        {
          'yc-year-picker-allow-clear': showClearBtn,
        },
      ]"
    >
      <template v-if="$slots.prefix" #prefix>
        <slot name="prefix" />
      </template>
      <template #suffix>
        <div class="yc-picker-suffix-icon">
          <slot name="suffix-icon">
            <icon-calendar />
          </slot>
        </div>
        <icon-button v-if="showClearBtn" @click.stop="handleClear" />
      </template>
    </yc-input>
    <template #content>
      <div class="yc-picker-container">
        <div class="yc-picker-panel-wrapper">
          <div class="yc-panel-year">
            <div class="yc-panel-year-inner">
              <div class="yc-picker-header">
                <div
                  class="yc-picker-header-icon"
                  @click="handleYearChange('pre')"
                >
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
            <div v-if="showConfirmBtn" class="yc-picker-footer-btn-wrapper">
              <div class="yc-picker-shortcuts"></div>
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
import useYearFormat from './hooks/useYearFormat';
import { getDecadeRange, useControlValue, dayjs, sleep } from '@shared/utils';
import { IconDoubleLeft, IconDoubleRight, IconCalendar } from '@shared/icons';
import { IconButton } from '@shared/components';
import PickerCell from './PickerCell.vue';
import YcInput from '@/components/Input';
import YcTrigger from '@/components/Trigger';
defineOptions({
  name: 'YearPicker',
  inheritAttrs: false,
});
const $slots = defineSlots<BasePickerSlots>();
const props = withDefaults(defineProps<YearPickerProps>(), {
  // locale: undefined,
  // hideTrigger: false,
  allowClear: false,
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
  allowClear,
  disabled,
  valueFormat,
  showConfirmBtn,
} = toRefs(props);
// 格式化时间
const { getDateFromYear, getFormatFromValue, getValueFromFormat } =
  useYearFormat(valueFormat);
// 受控的值
const computedValue = useControlValue<DatePickerValue>(
  modelValue,
  defaultValue.value,
  (val) => {
    emits('update:modelValue', getFormatFromValue(val));
  }
);
// 展示的value
const formatValue = computed(() => {
  return format.value && computedValue.value
    ? dayjs()
        .set('year', getValueFromFormat(computedValue.value))
        .format(format.value)
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
// 展示clearbtn
const showClearBtn = computed(() => {
  return computedValue.value && allowClear.value && !disabled.value;
});
// 开始的year
const startYear = ref<number>(0);
// 区间范围
const yearRange = ref<number[][]>([]);
// 旧值
let oldValue: DatePickerValue;
// 是否确认过
let isConfirm = false;
// 处理改变
const handleYearChange = (type: string) => {
  startYear.value = type == 'pre' ? startYear.value - 10 : startYear.value + 10;
  yearRange.value = getDecadeRange(startYear.value);
};
// 处理选中
const handleSelect = (year: number) => {
  computedValue.value = year;
  const value = getFormatFromValue(year);
  const date = getDateFromYear(year);
  const dateString = `${year}`;
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
  await sleep(0);
  computedVisible.value = false;
};
// 处理清除
const handleClear = () => {
  computedValue.value = '';
  emits('clear');
};
// 处理初始化值
watch(
  () => computedValue.value,
  (val) => {
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
    if (!showConfirmBtn.value || isConfirm) return;
    console.log(oldValue, 'oldValue');
    computedValue.value = oldValue ?? computedValue.value;
  },
  {
    immediate: true,
  }
);
</script>

<style lang="less">
@import './style/year-picker.less';
</style>
