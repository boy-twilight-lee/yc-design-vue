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
      <template v-if="$slots.extra" #extra>
        <slot name="extra" />
      </template>
      <div class="yc-panel-year">
        <div class="yc-panel-year-inner">
          <!-- header -->
          <picker-header
            type="year"
            @prev-double-click="handleYearChange('pre')"
            @next-double-click="handleYearChange('next')"
          >
            {{ curYear }}-{{ curYear + 10 }}
            <template v-if="$slots['icon-prev-double']" #icon-prev-double>
              <slot name="icon-next-double" />
            </template>
            <template v-if="$slots['icon-next-double']" #icon-next-double>
              <slot name="icon-next-double" />
            </template>
          </picker-header>
          <!-- body -->
          <div class="yc-picker-body">
            <div v-for="(row, i) in yearData" :key="i" class="yc-picker-row">
              <picker-cell
                v-for="({ value: date, label }, k) in row"
                :key="k"
                :value="label"
                :cell-in-view="isCellInView(date, 'year')"
                :is-today="isToday(date, 'year')"
                :is-selected="isSelected(date, 'year')"
                :disabled="disabledDate?.(date)"
                @click="handleSelect(date)"
              >
                <template v-if="$slots.cell" #cell>
                  <slot name="cell" :date="date" />
                </template>
              </picker-cell>
            </div>
          </div>
        </div>
      </div>
    </picker-panel>
  </define-panel>
  <yc-picker
    v-if="!hideTrigger"
    :class="$attrs.class"
    :style="$attrs.style"
    type="year"
    @popup-visible-change="handleVisibleChange"
  >
    <template v-if="$slots.default" #trigger>
      <slot />
    </template>
    <template v-if="$slots['suffix-icon']" #suffix-icon>
      <slot name="suffix-icon" />
    </template>
    <template v-if="$slots.prefix" #prefix>
      <slot name="prefix" />
    </template>
    <template #content>
      <reuse-panel />
    </template>
  </yc-picker>
  <reuse-panel v-else />
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';
import { YearPickerProps, YearPickerEmits, BasePickerSlots } from './type';
import usePicker from './hooks/userPicker';
import { YearData } from '@shared/utils';
import PickerHeader from './component/PickerHeader.vue';
import PickerCell from './component/PickerCell.vue';
import PickerPanel from './component/PickerPanel.vue';
import YcPicker from './component/Picker.vue';
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
  pickerValue: undefined,
  defaultPickerValue: '',
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
  DefinePanel,
  ReusePanel,
  curYear,
  isToday,
  isCellInView,
  isSelected,
  getDateFromFormat,
  getRangeOfYear,
  handleConfirm,
  handleSelect,
  handleShortcut,
  handleVisibleChange,
} = usePicker({
  props,
  emits,
});
// 区间范围
const yearData = ref<YearData[][]>([]);
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
@import './style/picker-panel.less';
</style>
