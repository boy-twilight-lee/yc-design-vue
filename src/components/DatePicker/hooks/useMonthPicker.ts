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
    return date.startOf('month').toDate();
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
  return {
    computedValue,
    computedVisible,
    computedPickerValue,
    formatValue,
    showConfirmBtn,
    getDateFromFormat,
    getFormatFromDate,
  };
}
