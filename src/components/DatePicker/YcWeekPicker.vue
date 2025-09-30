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
      <div class="yc-panel-week">
        <div class="yc-picker-header">
          <div class="yc-picker-header-icon" @click="">
            <slot name="icon-prev-double">
              <icon-double-left />
            </slot>
          </div>
          <div class="yc-picker-header-title">
            <span class="yc-picker-header-label">{{ curYear }}</span>
            <span>-</span>
            <span class="yc-picker-header-label"
              >{{ curMonth < 9 ? `0${curMonth + 1}` : curMonth + 1 }}
            </span>
          </div>
          <div class="yc-picker-header-icon" @click="">
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
            :class="['yc-picker-row', 'yc-picker-week-row']"
            v-for="({ label, time, value }, i) in weekRange"
            :key="i"
            @click="handleSelect(value)"
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
import { toRefs, ref, watch, computed } from 'vue';
import {
  WeekPickerProps,
  WeekPickerEmits,
  BasePickerSlots,
  DatePickerValue,
  ShortcutType,
} from './type';
import { useControlValue, dayjs, sleep, isUndefined } from '@shared/utils';
import userPicker, { WeekData, DayData } from './hooks/userPicker';
import PickerCell from './component/PickerCell.vue';
import PickerPanel from './component/PickerPanel.vue';
import PickerInput from './component/PickerInput.vue';
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
  // pickerValue: undefined,
  // defaultPickerValue: '',
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
  computedVisible,
  computedPickerValue,
  locale,
  abbreviation,
  dayStartOfWeek,
  showConfirmBtn,
  DefinePanel,
  ReusePanel,
  t,
  getDateFromFormat,
  getWeeksOfMonth,
} = userPicker({
  props,
  emits,
});
//  当前的年
const curYear = ref<number>(0);
// 当前的月
const curMonth = ref<number>(0);
// weekrange
const weekRange = ref<WeekData[]>([]);
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
// 旧值
let oldDate: Date | string;
// 选择的date
let selectDate: Date;
// 是否确认过
let isConfirm = false;
// isCellInView
const isCellInView = (day: DayData) => {
  const { value } = day;
  return (
    value.getFullYear() == curYear.value && value.getMonth() == curMonth.value
  );
};
// isToday
const isToday = (day: DayData) => {
  return isCellInView(day) && day.value.getDate() == dayjs().day();
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
  const dateString = dayjs(date).format('YYYY-MM-DD');
  emits('select', computedValue.value, date, dateString);
  if (showConfirmBtn.value) return;
  emits('change', computedValue.value, date, dateString);
};
// 处理确认
const handleConfirm = async () => {
  isConfirm = true;
  const dateString = dayjs(selectDate).format('YYYY-MM-DD');
  emits('change', computedValue.value, selectDate, dateString);
  emits('ok', computedValue.value, selectDate, dateString);
  await sleep(0);
  computedVisible.value = false;
};
// 处理初始化值
watch(
  () => computedValue.value,
  (val) => {
    const date = val ? (getDateFromFormat(val) as Date) : new Date();
    curYear.value = date.getFullYear();
    curMonth.value = date.getMonth();
    weekRange.value = getWeeksOfMonth(curYear.value, curMonth.value);
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

<style lang="less" scoped>
@import './style/picker.less';
</style>
