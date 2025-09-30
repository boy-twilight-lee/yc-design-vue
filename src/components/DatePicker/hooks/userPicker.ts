import { computed, toRefs, watch } from 'vue';
import {
  BasePickerEmits,
  DatePickerValue,
  DayStartOfWeek,
  ShortcutType,
} from '../type';
import {
  dayjs,
  isString,
  useControlValue,
  createReusableTemplate,
  useI18n,
  sleep,
  isUndefined,
} from '@shared/utils';
import { RecordType } from '@/components/_shared/type';
import userContext from './userContext';
import isoWeek from 'dayjs/plugin/isoWeek';
dayjs.extend(isoWeek);

export type YearData = {
  label: string;
  value: Date;
};

export interface DayData {
  label: string;
  value: Date;
}

export interface WeekData {
  label: number;
  value: Date;
  time: DayData[];
}

export default function usePicker(params: {
  props: RecordType;
  emits: BasePickerEmits;
}) {
  const { props, emits } = params;
  const {
    modelValue,
    defaultValue,
    popupVisible,
    defaultPopupVisible,
    pickerValue,
    defaultPickerValue,
    format,
    valueFormat,
    dayStartOfWeek,
    showConfirmBtn,
    locale,
    abbreviation,
  } = toRefs(props);
  // 格式化时间
  const computedValue = useControlValue<DatePickerValue>(
    modelValue,
    defaultValue.value,
    (val, controlValue) => {
      const date = getFormatFromDate(val as Date);
      controlValue.value = date;
      emits('update:modelValue' as any, date);
    }
  );
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
  // 展示的value
  const formatValue = computed(() => {
    const date = getDateFromFormat(computedValue.value);
    if (!date) return '';
    return format.value && computedValue.value
      ? dayjs(date).format(format.value)
      : (computedValue.value as string);
  });
  // 定义重用模板
  const { define: DefinePanel, reuse: ReusePanel } = createReusableTemplate();
  // 国际化
  const { t } = useI18n();
  // 旧值
  let oldDate: Date | string;
  // 选择的date
  let selectDate: Date;
  // 是否确认过
  let isConfirm = false;
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
  // 从格式化的值中提取
  const getDateFromFormat = (val: DatePickerValue) => {
    if (!val) return '';
    let date: dayjs.Dayjs;
    if (['timestamp', 'Date'].includes(valueFormat.value) || !isString(val)) {
      date = dayjs(val);
    } else {
      date = dayjs(val, valueFormat.value);
    }
    if (!date.isValid()) return '';
    return date.toDate();
  };
  // 把date格式化
  const getFormatFromDate = (val: Date) => {
    if (!val || !dayjs(val).isValid()) return '';
    const date: DatePickerValue = val;
    if (valueFormat.value == 'timestamp') {
      return dayjs(date).valueOf();
    }
    if (valueFormat.value != 'Date') {
      return dayjs(date).format(valueFormat.value);
    }
    return date;
  };
  // 得到范围区间
  const getRangeOfYear = (curYear: number) => {
    const decadeStartYear = Math.floor(curYear / 10) * 10;
    const startYear = decadeStartYear - 1;
    const flatYearArray = Array.from({ length: 12 }, (_, i): YearData => {
      const year = startYear + i;
      return {
        label: year.toString(),
        value: dayjs().year(year).startOf('year').toDate(),
      };
    });
    const grid: YearData[][] = [];
    const columns = 3;
    for (let i = 0; i < flatYearArray.length; i += columns) {
      const chunk = flatYearArray.slice(i, i + columns);
      grid.push(chunk);
    }
    return {
      range: grid,
      startYear: decadeStartYear,
    };
  };
  //  获取一个月中的周
  const getWeeksOfMonth = (
    year: number,
    month: number,
    startOfWeek: DayStartOfWeek = dayStartOfWeek.value
  ) => {
    const firstDayOfMonth = dayjs(new Date(year, month, 1));
    const weekData: WeekData[] = [];
    const dayOfWeekOfFirst = firstDayOfMonth.toDate().getDay();
    const offset = (dayOfWeekOfFirst - startOfWeek + 7) % 7;
    let currentDay = firstDayOfMonth.subtract(offset, 'day');
    for (let i = 0; i < 6; i++) {
      const daysOfWeek: DayData[] = [];
      const weekDatatartDate = currentDay.toDate();
      for (let j = 0; j < 7; j++) {
        daysOfWeek.push({
          label: String(currentDay.date()),
          value: currentDay.toDate(),
        });
        currentDay = currentDay.add(1, 'day');
      }
      weekData.push({
        label: dayjs(weekDatatartDate).isoWeek(),
        value: weekDatatartDate,
        time: daysOfWeek,
      });
    }
    console.log(weekData, 'weekData');
    return weekData;
  };
  // input-context
  userContext().provide(
    {
      computedValue,
      computedVisible,
      formatValue,
      emits,
    },
    props
  );
  return {
    formatValue,
    computedValue,
    computedVisible,
    computedPickerValue,
    dayStartOfWeek,
    showConfirmBtn,
    locale,
    abbreviation,
    DefinePanel,
    ReusePanel,
    t,
    getDateFromFormat,
    getFormatFromDate,
    getRangeOfYear,
    getWeeksOfMonth,
    handleSelect,
    handleConfirm,
    handleShortcut,
  };
}
