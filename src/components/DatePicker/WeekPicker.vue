<template>
  <define-panel>
    <picker-panel
      :locale="locale"
      :preview-shortcut="previewShortcut"
      :shortcuts="shortcuts"
      :shortcuts-position="shortcutsPosition"
      :confirm-btn-disabled="!computedValue"
      :show-confirm-btn="showConfirmBtn"
      :show-footer="!showYearPicker && !showMonthPicker"
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
            weekData = getWeeksOfMonth(curYear, curMonth);
            showYearPicker = false;
          }
        "
      />
      <yc-month-picker
        v-else-if="showMonthPicker"
        :model-value="`${curYear}-${curMonth + 1 < 10 ? `0${curMonth + 1}` : curMonth + 1}`"
        hide-trigger
        value-format="YYYY-MM"
        @change="
          (_, date) => {
            curMonth = date.getMonth();
            weekData = getWeeksOfMonth(curYear, curMonth);
            showMonthPicker = false;
          }
        "
      />
      <div v-else class="yc-panel-week">
        <div class="yc-panel-week-inner">
          <!-- header -->
          <picker-header
            :year="curYear"
            :month="curMonth"
            type="week"
            @prev-click="handleDateChange('month', 'pre')"
            @next-click="handleDateChange('month', 'next')"
            @prev-double-click="handleDateChange('year', 'pre')"
            @next-double-click="handleDateChange('year', 'next')"
            @year-click="showYearPicker = true"
            @month-click="showMonthPicker = true"
          >
            <template v-if="$slots['icon-prev']" #icon-prev-double>
              <slot name="icon-next" />
            </template>
            <template v-if="$slots['icon-next']" #icon-next-double>
              <slot name="icon-next" />
            </template>
            <template v-if="$slots['icon-prev-double']" #icon-prev-double>
              <slot name="icon-next-double" />
            </template>
            <template v-if="$slots['icon-next-double']" #icon-next-double>
              <slot name="icon-next-double" />
            </template>
          </picker-header>
          <!-- week-header -->
          <picker-week-header
            :locale="locale"
            :abbreviation="abbreviation"
            :day-start-of-week="dayStartOfWeek"
          />
          <!-- body -->
          <div class="yc-picker-body">
            <div
              v-for="({ label, time, value }, i) in weekData"
              :key="i"
              :class="[
                'yc-picker-row',
                'yc-picker-week-row',
                {
                  'yc-picker-week-row-disabled': disabledDate?.(value),
                  'yc-picker-week-row-selected': isSelected(value, 'week'),
                },
              ]"
              @click="handleSelect(value)"
            >
              <picker-cell :cell-in-view="false" :value="label" />
              <picker-cell
                v-for="({ value: date, label }, k) in time"
                :key="k"
                :value="label"
                :cell-in-view="isCellInView(date, 'week')"
                :is-today="isToday(date, 'week')"
                :hoverable="false"
                :class="{
                  'yc-week-picker-cell-first': !i,
                  'yc-week-picker-cell-last': i == time.length - 1,
                }"
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
  <picker-input
    v-if="!hideTrigger"
    :class="$attrs.class"
    :style="$attrs.style"
    type="week"
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
  </picker-input>
  <reuse-panel v-else />
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';
import { WeekPickerProps, WeekPickerEmits, BasePickerSlots } from './type';
import userPicker from './hooks/userPicker';
import { dayjs, WeekData } from '@shared/utils';
import PickerHeader from './component/PickerHeader.vue';
import PickerWeekHeader from './component/PickerWeekHeader.vue';
import PickerCell from './component/PickerCell.vue';
import PickerPanel from './component/PickerPanel.vue';
import PickerInput from './component/PickerInput.vue';
import YcYearPicker from './YearPicker.vue';
import YcMonthPicker from './MonthPicker.vue';
defineOptions({
  name: 'WeekPicker',
  inheritAttrs: false,
});
const $slots = defineSlots<BasePickerSlots>();
const props = withDefaults(defineProps<WeekPickerProps>(), {
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
  valueFormat: 'YYYY-MM-DD',
  format: 'gggg-wo',
  previewShortcut: true,
  showConfirmBtn: false,
  disabledInput: false,
  modelValue: undefined,
  defaultValue: '',
  abbreviation: true,
  dayStartOfWeek: 0,
});
const emits = defineEmits<WeekPickerEmits>();
// 获取格式化
const {
  computedValue,
  locale,
  abbreviation,
  dayStartOfWeek,
  curMonth,
  curYear,
  showMonthPicker,
  showYearPicker,
  DefinePanel,
  ReusePanel,
  getDateFromFormat,
  isCellInView,
  isToday,
  isSelected,
  getWeeksOfMonth,
  handleConfirm,
  handleSelect,
  handleShortcut,
} = userPicker({
  props,
  emits,
});
// weekData
const weekData = ref<WeekData[]>([]);
// 处理时间变化
const handleDateChange = (dateType: string, type: string) => {
  if (dateType == 'year') {
    curYear.value = type == 'pre' ? curYear.value - 1 : curYear.value + 1;
    weekData.value = getWeeksOfMonth(curYear.value, curMonth.value);
  } else {
    const base = dayjs()
      .set('year', curYear.value)
      .set('month', curMonth.value);
    const date =
      type == 'pre' ? base.subtract(1, 'month') : base.add(1, 'month');
    curYear.value = date.year();
    curMonth.value = date.month();
    weekData.value = getWeeksOfMonth(curYear.value, curMonth.value);
  }
};
// 处理初始化值
watch(
  () => computedValue.value,
  (val) => {
    const date = val ? (getDateFromFormat(val) as Date) : new Date();
    curYear.value = date.getFullYear();
    curMonth.value = date.getMonth();
    weekData.value = getWeeksOfMonth(curYear.value, curMonth.value);
  },
  {
    immediate: true,
  }
);
</script>

<style lang="less">
@import './style/picker-panel.less';
</style>
