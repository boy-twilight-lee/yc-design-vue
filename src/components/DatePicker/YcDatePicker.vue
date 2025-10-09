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
          dayData = getDaysOfMonth(curYear, curMonth, dayStartOfWeek);
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
          dayData = getDaysOfMonth(curYear, curMonth, dayStartOfWeek);
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
      show-now
      @confirm="handleConfirm"
      @shortcut-select="handleShortcut"
      @now-click="handleNowClick"
    >
      <div class="yc-panel-date">
        <picker-header
          type="date"
          :year="curYear"
          :month="curMonth"
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
        <picker-week-header
          :locale="locale"
          :abbreviation="abbreviation"
          :day-start-of-week="dayStartOfWeek"
        />
        <div class="yc-picker-body">
          <div v-for="(row, i) in dayData" :key="i" class="yc-picker-row">
            <picker-cell
              v-for="({ label, value: date }, k) in row"
              :key="k"
              :value="label"
              :cell-in-view="isCellInView(date, 'date')"
              :is-today="isToday(date, 'date')"
              :is-selected="isSelected(date, 'date')"
              :disabled="disabledDate?.(date)"
              @click="handleSelect(date)"
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
    :type="showTime ? 'time' : 'date'"
  >
    <template #content>
      <reuse-panel />
    </template>
  </picker-input>
  <reuse-panel v-else />
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';
import { DatePickerProps, DatePickerEmits, BasePickerSlots } from './type';
import userPicker from './hooks/userPicker';
import { dayjs, DayData } from '@shared/utils';
import PickerCell from './component/PickerCell.vue';
import PickerHeader from './component/PickerHeader.vue';
import PickerWeekHeader from './component/PickerWeekHeader.vue';
import PickerPanel from './component/PickerPanel.vue';
import PickerInput from './component/PickerInput.vue';
import YcYearPicker from './YcYearPicker.vue';
import YcMonthPicker from './YcMonthPicker.vue';
defineOptions({
  name: 'DatePicker',
  inheritAttrs: false,
});
const $slots = defineSlots<BasePickerSlots>();
const props = withDefaults(defineProps<DatePickerProps>(), {
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
  format: 'YYYY-MM-DD',
  previewShortcut: true,
  showConfirmBtn: false,
  disabledInput: false,
  modelValue: undefined,
  defaultValue: '',
  abbreviation: true,
  dayStartOfWeek: 0,
  showNowBtn: false,
  showTime: false,
  timePickerProps: () => ({}),
});
const emits = defineEmits<DatePickerEmits>();
// 获取格式化
const {
  computedValue,
  computedVisible,
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
  getDaysOfMonth,
  handleConfirm,
  handleSelect,
  handleShortcut,
  handleNowClick,
} = userPicker({
  props,
  emits,
});
// weekDate
const dayData = ref<DayData[][]>([]);
// 处理时间变化
const handleDateChange = (dateType: string, type: string) => {
  if (dateType == 'year') {
    curYear.value = type == 'pre' ? curYear.value - 1 : curYear.value + 1;
    dayData.value = getDaysOfMonth(
      curYear.value,
      curMonth.value,
      dayStartOfWeek.value
    );
  } else {
    const base = dayjs()
      .set('year', curYear.value)
      .set('month', curMonth.value);
    const date =
      type == 'pre' ? base.subtract(1, 'month') : base.add(1, 'month');
    curYear.value = date.year();
    curMonth.value = date.month();
    dayData.value = getDaysOfMonth(
      curYear.value,
      curMonth.value,
      dayStartOfWeek.value
    );
  }
};
// 处理初始化值
watch(
  () => computedValue.value,
  (val) => {
    const date = val ? (getDateFromFormat(val) as Date) : new Date();
    curYear.value = date.getFullYear();
    curMonth.value = date.getMonth();
    dayData.value = getDaysOfMonth(
      curYear.value,
      curMonth.value,
      dayStartOfWeek.value
    );
  },
  {
    immediate: true,
  }
);
</script>

<style lang="less">
@import './style/picker.less';
</style>
