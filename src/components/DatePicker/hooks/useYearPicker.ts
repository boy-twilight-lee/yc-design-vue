import { computed, toRefs } from 'vue';
import {
  YearPickerEmits,
  DatePickerValue,
  YearPickerProps as _YearPickerProps,
} from '../type';
import { RecordType, Required } from '@shared/type';
import { useControlValue, dayjs, isString } from '@shared/utils';

type YearPickerProps = Required<_YearPickerProps>;
export type YearData = {
  label: string;
  value: Date;
};

export default function useYearPickerContext(
  props: RecordType,
  emits: YearPickerEmits
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
  } = toRefs(props as YearPickerProps);
  // 受控的值
  const computedValue = useControlValue<DatePickerValue>(
    modelValue,
    defaultValue.value,
    (val) => {
      emits('update:modelValue', getFormatFromDate(val as Date));
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
  // 从格式化的值中提取
  const getDateFromFormat = (val: DatePickerValue) => {
    if (!val) return '';
    let date: dayjs.Dayjs;
    if (['timestamp', 'Date'].includes(valueFormat.value)) {
      date = dayjs(val);
    } else {
      date = dayjs(isString(val) ? val : String(val), valueFormat.value);
    }
    if (!date.isValid()) return '';
    return date.startOf('year').toDate();
  };
  // format
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
  const getYearRange = (curYear: number) => {
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
  return {
    computedValue,
    computedVisible,
    computedPickerValue,
    formatValue,
    showConfirmBtn,
    getYearRange,
    getDateFromFormat,
    getFormatFromDate,
  };
}
