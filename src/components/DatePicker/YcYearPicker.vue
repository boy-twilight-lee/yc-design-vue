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
            {{ curYear }}-{{ curYear + 10 }}
          </div>
          <div class="yc-picker-header-icon" @click="handleYearChange('next')">
            <slot name="icon-next-double">
              <icon-double-right />
            </slot>
          </div>
        </div>
        <div class="yc-picker-body">
          <div v-for="(row, i) in yearData" :key="i" class="yc-picker-row">
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
import { ref, watch } from 'vue';
import { YearPickerProps, YearPickerEmits, BasePickerSlots } from './type';
import usePicker, { YearData } from './hooks/userPicker';
import { dayjs } from '@shared/utils';
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
// 获取格式化
const {
  computedValue,
  computedPickerValue,
  DefinePanel,
  ReusePanel,
  curYear,
  getDateFromFormat,
  getRangeOfYear,
  handleConfirm,
  handleSelect,
  handleShortcut,
} = usePicker({
  props,
  emits,
});
// 区间范围
const yearData = ref<YearData[][]>([]);
// 是否选中
const isSelected = (val: Date) => {
  const date = getDateFromFormat(computedValue.value) as Date;
  if (!date) return false;
  return date.getFullYear() == val.getFullYear();
};
// 处理改变
const handleYearChange = (type: string) => {
  curYear.value = type == 'pre' ? curYear.value - 10 : curYear.value + 10;
  const { range } = getRangeOfYear(curYear.value);
  yearData.value = range;
};
// 处理初始化值
watch(
  () => computedValue.value,
  (val) => {
    const date = val ? getDateFromFormat(val) : new Date();
    const { range, startYear } = getRangeOfYear((date as Date).getFullYear());
    curYear.value = startYear;
    yearData.value = range;
  },
  {
    immediate: true,
  }
);
</script>

<style lang="less">
@import './style/picker.less';
</style>
