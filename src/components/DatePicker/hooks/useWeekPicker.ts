import { computed, toRefs, provide as _provide, inject as _inject } from 'vue';
import {
  WeekPickerEmits,
  DatePickerValue,
  DayStartOfWeek,
  WeekPickerProps as _WeekPickerProps,
} from '../type';
import { RecordType, Required } from '@shared/type';
import { useControlValue, dayjs, isString } from '@shared/utils';

type WeekPickerProps = Required<_WeekPickerProps>;

interface WeekData {
  label: number;
  value: Date;
  time: string[];
}

export default function useWeekPicker(
  props: RecordType,
  emits: WeekPickerEmits
) {
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
    dayStartOfWeek, // 从 props 中获取 dayStartOfWeek
  } = toRefs(props as WeekPickerProps);
  // 受控的值
  const computedValue = useControlValue<DatePickerValue>(
    modelValue,
    defaultValue.value,
    (val) => {
      emits('update:modelValue', getFormatFromDate(val as Date));
    }
  );
  // 展示的value
  const formatValue = computed(() => {
    const date = getDateFromFormat(computedValue.value);
    if (!date) return '';
    return format.value && computedValue.value
      ? dayjs(date).format(format.value)
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
  //  获取一个月中的周
  const getWeeksOfMonth = (
    year: number,
    month: number,
    startOfWeek: DayStartOfWeek = dayStartOfWeek.value
  ): WeekData[] => {
    const monthIndex = month - 1;
    const firstDayOfMonth = dayjs(new Date(year, monthIndex, 1));
    const lastDayOfMonth = firstDayOfMonth.endOf('month');
    const weeks: WeekData[] = [];
    let weekNumber = 1;
    // 计算日历视图的第一天 (可能属于上个月)
    const dayOfWeekOfFirst = firstDayOfMonth.day();
    const offset = (dayOfWeekOfFirst - startOfWeek + 7) % 7;
    let currentWeekStartDate = firstDayOfMonth.subtract(offset, 'day');
    // 循环直到当前周的起始日超过了本月的最后一天
    while (
      currentWeekStartDate.isBefore(lastDayOfMonth) ||
      currentWeekStartDate.isSame(lastDayOfMonth)
    ) {
      const daysInMonthForThisWeek: string[] = [];
      let tempDate = currentWeekStartDate;
      // 遍历本周的7天
      for (let i = 0; i < 7; i++) {
        // 检查这一天是否属于目标月份
        if (tempDate.month() === monthIndex) {
          daysInMonthForThisWeek.push(String(tempDate.date()));
        }
        tempDate = tempDate.add(1, 'day');
      }
      // 只有当这一周至少有一天在本月内时，才将其添加
      if (daysInMonthForThisWeek.length > 0) {
        weeks.push({
          label: weekNumber,
          value: currentWeekStartDate.toDate(),
          time: daysInMonthForThisWeek,
        });
        weekNumber++;
      }
      // 直接跳到下一周的起始日
      currentWeekStartDate = currentWeekStartDate.add(7, 'day');
    }
    return weeks;
  };
  // 格式化值
  const getDateFromFormat = (val: DatePickerValue) => {
    if (!val) return '';
    let date: dayjs.Dayjs;
    if (['timestamp', 'Date'].includes(valueFormat.value)) {
      date = dayjs(val);
    } else {
      date = dayjs(isString(val) ? val : String(val), valueFormat.value);
    }
    if (!date.isValid()) return '';
    const dayOfWeek = date.day();
    const offset = (dayOfWeek - dayStartOfWeek.value + 7) % 7;
    return date.subtract(offset, 'day').toDate();
  };
  const getFormatFromDate = (val: Date | null): DatePickerValue | '' => {
    if (!val || !dayjs(val).isValid()) return '';
    const date: DatePickerValue = val;
    if (valueFormat.value === 'timestamp') {
      return dayjs(date).valueOf();
    }
    if (valueFormat.value === 'Date') {
      return date;
    }
    return dayjs(date).format(valueFormat.value);
  };
  return {
    computedValue,
    computedVisible,
    computedPickerValue,
    formatValue,
    showConfirmBtn,
    getDateFromFormat,
    getFormatFromDate, // 导出以供内部使用
    getWeeksOfMonth, // 导出以在模板中使用
  };
}
