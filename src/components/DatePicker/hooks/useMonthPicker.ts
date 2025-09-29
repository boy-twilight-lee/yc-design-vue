import {
  ref,
  computed,
  toRefs,
  provide as _provide,
  inject as _inject,
} from 'vue';
import {
  MonthPickerEmits,
  DatePickerValue,
  ValueFormat,
  MonthPickerProps as _MonthPickerProps,
} from '../type';
import { RecordType, Required } from '@shared/type';
import { useControlValue, dayjs, isString } from '@shared/utils';

type MonthPickerProps = Required<_MonthPickerProps>;

export default function useMonthPicker(
  props: RecordType,
  emits: MonthPickerEmits
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
  } = toRefs(props as MonthPickerProps);
  // 受控的值
  const computedValue = useControlValue<DatePickerValue>(
    modelValue,
    defaultValue.value,
    (val) => {
      emits('update:modelValue', getFormatFromDate(val));
    }
  );
  // 展示的value
  const formatValue = computed(() => {
    return format.value && computedValue.value
      ? dayjs(getDateFromFormat(computedValue.value)).format(format.value)
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
  // 开始的year
  const curYear = ref<number>(0);
  // 从格式化的值中提取
  const getDateFromFormat = (
    val: DatePickerValue,
    format: ValueFormat = valueFormat.value
  ) => {
    if (!val) return val as string;
    if (format == 'timestamp') {
      return new Date(val);
    } else if (format == 'Date') {
      return val as Date;
    } else {
      const date = dayjs(isString(val) ? val : String(val), format);
      const year = date.year();
      const month = date.month();
      return new Date(year, month, 1);
    }
  };
  // format
  const getFormatFromDate = (
    val: Date,
    format: ValueFormat = valueFormat.value
  ) => {
    if (!val) return '';
    const date: DatePickerValue = val;
    if (format == 'timestamp') {
      return date.getTime();
    }
    if (format != 'Date') {
      return dayjs(date).format(format);
    }
    return date;
  };
  return {
    computedValue,
    computedVisible,
    computedPickerValue,
    formatValue,
    curYear,
    showConfirmBtn,
    getDateFromFormat,
  };
}
