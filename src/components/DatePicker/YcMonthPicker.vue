<template>
  <define-panel>
    <yc-year-picker
      v-if="showYearPicker"
      :model-value="`${curYear}`"
      hide-trigger
      value-format="YYYY"
      @change="
        (_, date) => {
          curYear = date.getFullYear();
          showYearPicker = false;
        }
      "
    />
    <picker-panel
      v-else
      :locale="locale"
      :preview-shortcut="previewShortcut"
      :shortcuts="shortcuts"
      :shortcuts-position="shortcutsPosition"
      :confirm-btn-disabled="!computedValue"
      :show-confirm-btn="showConfirmBtn"
      @confirm="handleConfirm"
      @shortcut-select="handleShortcut"
    >
      <div class="yc-panel-month">
        <picker-header
          :year="curYear"
          type="month"
          @year-click="showYearPicker = true"
          @prev-double-click="curYear--"
          @next-double-click="curYear++"
        >
          <template v-if="$slots['icon-prev-double']" #icon-prev-double>
            <slot name="icon-next-double" />
          </template>
          <template v-if="$slots['icon-next-double']" #icon-next-double>
            <slot name="icon-next-double" />
          </template>
        </picker-header>
        <div class="yc-picker-body">
          <div v-for="(row, i) in monthData" :key="i" class="yc-picker-row">
            <picker-cell
              v-for="({ value: date, label }, k) in row"
              :key="k"
              :value="label"
              :is-selected="isSelected(date, 'month')"
              :is-today="isToday(date, 'month')"
              :cell-in-view="isCellInView(date, 'month')"
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
      <template v-if="$slots.extra" #extra>
        <slot name="extra" />
      </template>
    </picker-panel>
  </define-panel>
  <picker-input
    v-if="!hideTrigger"
    :class="$attrs.class"
    :style="$attrs.style"
    type="month"
  >
    <template #content>
      <reuse-panel />
    </template>
  </picker-input>
  <reuse-panel v-else />
</template>

<script lang="ts" setup>
import { watch, computed } from 'vue';
import { MonthPickerProps, MonthPickerEmits, BasePickerSlots } from './type';
import userPicker from './hooks/userPicker';
import { dayjs } from '@shared/utils';
import PickerHeader from './component/PickerHeader.vue';
import PickerCell from './component/PickerCell.vue';
import PickerPanel from './component/PickerPanel.vue';
import PickerInput from './component/PickerInput.vue';
import YcYearPicker from './YcYearPicker.vue';
defineOptions({
  name: 'MonthPicker',
  inheritAttrs: false,
});
const $slots = defineSlots<BasePickerSlots>();
const props = withDefaults(defineProps<MonthPickerProps>(), {
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
  valueFormat: 'YYYY-MM',
  format: 'YYYY-MM',
  previewShortcut: true,
  showConfirmBtn: false,
  disabledInput: false,
  modelValue: undefined,
  defaultValue: '',
  abbreviation: true,
});
const emits = defineEmits<MonthPickerEmits>();
// 获取格式化
const {
  computedValue,
  showYearPicker,
  curYear,
  locale,
  abbreviation,
  DefinePanel,
  ReusePanel,
  t,
  getDateFromFormat,
  isCellInView,
  isToday,
  isSelected,
  handleConfirm,
  handleSelect,
  handleShortcut,
} = userPicker({
  props,
  emits,
});
// 区间范围
const monthData = computed(() => {
  const months = [
    ['January', 'February', 'March'],
    ['April', 'May', 'June'],
    ['July', 'August', 'September'],
    ['October', 'November', 'December'],
  ];
  let month = 0;
  return months.map((row) => {
    return row.map((name) => {
      const key = `datePicker.month.${abbreviation.value ? 'short' : 'long'}.${name}`;
      return {
        label: locale.value?.[key] || t(key),
        value: new Date(curYear.value, month++, 1),
      };
    });
  });
});
// 处理初始化值
watch(
  () => computedValue.value,
  (val) => {
    const date = val ? (getDateFromFormat(val) as Date) : new Date();
    curYear.value = date.getFullYear();
  },
  {
    immediate: true,
  }
);
</script>

<style lang="less">
@import './style/picker.less';
</style>
