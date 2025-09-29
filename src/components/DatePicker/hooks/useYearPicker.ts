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
    allowClear,
    disabled,
    showConfirmBtn,
    shortcuts,
    shortcutsPosition,
    previewShortcut,
  } = toRefs(props as YearPickerProps);
  const { disabledDate } = props as YearPickerProps;
  // 受控的值
  const computedValue = useControlValue<DatePickerValue>(
    modelValue,
    defaultValue.value,
    (val) => {
      emits('update:modelValue', getFormatFromValue(val));
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
      ? dayjs()
          .set('year', getValueFromFormat(computedValue.value))
          .format(format.value)
      : (computedValue.value as string);
  });
  // 从格式化的值中提取
  const getValueFromFormat = (
    val: DatePickerValue,
    format: ValueFormat = valueFormat.value
  ) => {
    if (!val) return val as number;
    if (format == 'timestamp') {
      return new Date(val).getFullYear();
    } else if (format == 'Date') {
      return (val as Date).getFullYear();
    } else {
      return dayjs(isString(val) ? val : String(val), format).year();
    }
  };
  // format
  const getFormatFromValue = (
    val: DatePickerValue,
    format: ValueFormat = valueFormat.value
  ) => {
    if (!val) return '';
    const date: DatePickerValue = getDateFromYear(val as number);
    if (format == 'timestamp') {
      return date.getTime();
    }
    if (format != 'Date') {
      return dayjs(date).format(format);
    }
    return date;
  };
  // year转date
  const getDateFromYear = (year: number) => {
    return new Date(year, 1, 1, 0, 0, 0);
  };
  return {
    computedValue,
    computedVisible,
    computedPickerValue,
    formatValue,
    showConfirmBtn,
    shortcuts,
    shortcutsPosition,
    previewShortcut,
    emits,
    disabledDate,
    getDateFromYear,
    getValueFromFormat,
    getFormatFromValue,
  };
}
