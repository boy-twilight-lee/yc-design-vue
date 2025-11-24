<template>
  <define-panel>
    <picker-panel
      :locale="locale"
      :preview-shortcut="previewShortcut"
      :shortcuts="shortcuts"
      :shortcuts-position="shortcutsPosition"
      :confirm-btn-disabled="!computedValue"
      :show-confirm-btn="showConfirmBtn"
      :show-footer="!showYearPicker"
      @confirm="handleConfirm"
      @shortcut-select="handleShortcut"
    >
      <template v-if="$slots.extra" #extra>
        <slot name="extra" />
      </template>
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
      <div v-else class="yc-panel-month">
        <div class="yc-panel-month-inner">
          <!--header -->
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
          <!-- body -->
          <div class="yc-picker-body">
            <div v-for="(row, i) in monthData" :key="i" class="yc-picker-row">
              <picker-cell
                v-for="({ value: date, label }, k) in row"
                :key="k"
                :value="label"
                :cell-in-view="isCellInView(date, 'month')"
                :is-today="isToday(date, 'month')"
                :is-selected="isSelected(date, 'month')"
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
    type="month"
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
import { watch, computed } from 'vue';
import { BasePickerProps, BasePickerEmits, BasePickerSlots } from './type';
import userPicker from './hooks/userPicker';
import PickerHeader from './component/PickerHeader.vue';
import YcPicker from './component/Picker.vue';
import PickerCell from './component/PickerCell.vue';
import PickerPanel from './component/PickerPanel.vue';
import YcYearPicker from './YearPicker.vue';
defineOptions({
  name: 'MonthPicker',
  inheritAttrs: false,
});
const $slots = defineSlots<BasePickerSlots>();
const props = withDefaults(defineProps<BasePickerProps>(), {
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
  format: 'YYYY-MM',
  valueFormat: 'YYYY-MM',
  previewShortcut: false,
  showConfirmBtn: false,
  disabledInput: false,
  modelValue: undefined,
  defaultValue: '',
  abbreviation: true,
});
const emits = defineEmits<BasePickerEmits>();
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
  handleVisibleChange,
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
      const localeKey = `month.${abbreviation.value ? 'short' : 'long'}.${name}`;
      const tKey = `datePicker.month.${abbreviation.value ? 'short' : 'long'}.${name}`;
      return {
        label: locale.value?.[localeKey] || t(tKey),
        value: new Date(curYear.value, month++, 1),
      };
    });
  });
});
// 处理初始化值
watch(
  () => computedValue.value,
  (val) => {
    const value = getDateFromFormat(val);
    const date = value ? value : new Date();
    curYear.value = date.getFullYear();
  },
  {
    immediate: true,
  }
);
</script>

<style lang="less">
@import './style/picker-panel.less';
</style>
