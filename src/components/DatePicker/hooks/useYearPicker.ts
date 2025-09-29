import { computed, toRefs, provide as _provide, inject as _inject } from 'vue';
import {
  YearPickerEmits,
  DatePickerValue,
  ValueFormat,
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
      emits('update:modelValue', getFormatFromDate(val));
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
    return format.value && computedValue.value
      ? dayjs(getDateFromFormat(computedValue.value)).format(format.value)
      : (computedValue.value as string);
  });
  // 从格式化的值中提取
  const getDateFromFormat = (val: DatePickerValue) => {
    if (!val) return val as string;
    if (valueFormat.value == 'timestamp') {
      return new Date(val);
    } else if (valueFormat.value == 'Date') {
      return val as Date;
    } else {
      const year = dayjs(
        isString(val) ? val : String(val),
        valueFormat.value
      ).year();
      return new Date(year, 0, 1);
    }
  };
  // format
  const getFormatFromDate = (val: Date) => {
    if (!val) return '';
    const date: DatePickerValue = val;
    if (valueFormat.value == 'timestamp') {
      return date.getTime();
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
        value: new Date(year, 0, 1),
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
