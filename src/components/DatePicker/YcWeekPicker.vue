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
          weekDate = getWeeksOfMonth(curYear, curMonth);
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
          weekDate = getWeeksOfMonth(curYear, curMonth);
          showMonthPicker = false;
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
      <div class="yc-panel-week">
        <div class="yc-picker-header">
          <div
            class="yc-picker-header-icon"
            @click="handleDateChange('year', 'pre')"
          >
            <slot name="icon-prev-double">
              <icon-double-left />
            </slot>
          </div>
          <div
            class="yc-picker-header-icon"
            @click="handleDateChange('month', 'pre')"
          >
            <slot name="icon-prev">
              <icon-arrow-right :rotate="180" />
            </slot>
          </div>
          <div class="yc-picker-header-title">
            <span
              class="yc-picker-header-label"
              @click="showYearPicker = true"
              >{{ curYear }}</span
            >
            <span>-</span>
            <span
              class="yc-picker-header-label"
              @click="showMonthPicker = true"
            >
              {{ curMonth < 9 ? `0${curMonth + 1}` : curMonth + 1 }}
            </span>
          </div>
          <div
            class="yc-picker-header-icon"
            @click="handleDateChange('month', 'next')"
          >
            <slot name="icon-next">
              <icon-arrow-right />
            </slot>
          </div>
          <div
            class="yc-picker-header-icon"
            @click="handleDateChange('year', 'next')"
          >
            <slot name="icon-next-double">
              <icon-double-right />
            </slot>
          </div>
        </div>
        <div class="yc-picker-week-list">
          <div class="yc-picker-week-list-item"></div>
          <div
            v-for="v in weekHeaders"
            :key="v"
            class="yc-picker-week-list-item"
          >
            {{ v }}
          </div>
        </div>
        <div class="yc-picker-body">
          <div
            v-for="({ label, time, value }, i) in weekDate"
            :key="i"
            :class="[
              'yc-picker-row',
              'yc-picker-week-row',
              {
                'yc-picker-week-row-disabled': disabledDate?.(value),
                'yc-picker-week-row-selected': isSelected(value),
              },
            ]"
            @click="!disabledDate?.(value) && handleSelect(value)"
          >
            <picker-cell :cell-in-view="false" :value="label" />
            <picker-cell
              v-for="(day, i) in time"
              :key="i"
              :value="day.label"
              :cell-in-view="isCellInView(day)"
              :is-today="isToday(day)"
              :hoverable="false"
              :class="{
                'yc-week-picker-cell-first': !i,
                'yc-week-picker-cell-last': i == time.length - 1,
              }"
            />
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
    type="week"
  >
    <template #content>
      <reuse-panel />
    </template>
  </picker-input>
  <reuse-panel v-else />
</template>

<script lang="ts" setup>
import { ref, watch, computed } from 'vue';
import { WeekPickerProps, WeekPickerEmits, BasePickerSlots } from './type';
import userPicker, { WeekData, DayData } from './hooks/userPicker';
import { dayjs } from '@shared/utils';
import { IconDoubleLeft, IconDoubleRight, IconArrowRight } from '@shared/icons';
import PickerCell from './component/PickerCell.vue';
import PickerPanel from './component/PickerPanel.vue';
import PickerInput from './component/PickerInput.vue';
import YcYearPicker from './YcYearPicker.vue';
import YcMonthPicker from './YcMonthPicker.vue';
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
  computedPickerValue,
  locale,
  abbreviation,
  dayStartOfWeek,
  curMonth,
  curYear,
  showMonthPicker,
  showYearPicker,
  DefinePanel,
  ReusePanel,
  t,
  getDateFromFormat,
  getWeeksOfMonth,
  handleConfirm,
  handleSelect,
  handleShortcut,
} = userPicker({
  props,
  emits,
});
// weekDate
const weekDate = ref<WeekData[]>([]);
// headers
const weekHeaders = computed(() => {
  const baseDays = [0, 1, 2, 3, 4, 5, 6];
  const days = [
    ...baseDays.slice(dayStartOfWeek.value || 0),
    ...baseDays.slice(0, dayStartOfWeek.value || 0),
  ];
  const map = Object.fromEntries(
    [
      'sunday',
      'monday',
      'tuesday',
      'wednesday',
      'thursday',
      'friday',
      'saturday',
    ].map((v, i) => [i, v])
  );
  return days.map((v) => {
    const key = `datePicker.week.${abbreviation.value ? 'short' : 'long'}.${map[v]}`;
    return locale.value?.[key] || t(key);
  });
});
// isCellInView
const isCellInView = (day: DayData) => {
  const { value } = day;
  return (
    value.getFullYear() == curYear.value && value.getMonth() == curMonth.value
  );
};
// isToday
const isToday = (day: DayData) => {
  const { value } = day;
  const date = dayjs();
  return (
    value.getFullYear() == date.year() &&
    value.getMonth() == date.month() &&
    value.getDate() == date.date()
  );
};
// 是否选中
const isSelected = (v: Date) => {
  const date = getDateFromFormat(computedValue.value) as Date;
  if (!date) return false;
  return (
    date.getFullYear() == v.getFullYear() &&
    date.getMonth() == v.getMonth() &&
    date.getDate() == v.getDate()
  );
};
// 处理时间变化
const handleDateChange = (dateType: string, type: string) => {
  if (dateType == 'year') {
    curYear.value = type == 'pre' ? curYear.value - 1 : curYear.value + 1;
    weekDate.value = getWeeksOfMonth(curYear.value, curMonth.value);
  } else {
    const base = dayjs()
      .set('year', curYear.value)
      .set('month', curMonth.value);
    const date =
      type == 'pre' ? base.subtract(1, 'month') : base.add(1, 'month');
    curYear.value = date.year();
    curMonth.value = date.month();
    weekDate.value = getWeeksOfMonth(curYear.value, curMonth.value);
  }
};
// 处理初始化值
watch(
  () => computedValue.value,
  (val) => {
    const date = val ? (getDateFromFormat(val) as Date) : new Date();
    curYear.value = date.getFullYear();
    curMonth.value = date.getMonth();
    weekDate.value = getWeeksOfMonth(curYear.value, curMonth.value);
  },
  {
    immediate: true,
  }
);
</script>

<style lang="less" scoped>
@import './style/picker.less';
</style>
