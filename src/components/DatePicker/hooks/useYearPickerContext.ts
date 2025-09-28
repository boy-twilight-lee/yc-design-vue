import {
  ref,
  Ref,
  computed,
  toRefs,
  provide as _provide,
  inject as _inject,
} from 'vue';
import {
  YearPickerEmits,
  DatePickerValue,
  ValueFormat,
  YearPickerProps as _YearPickerProps,
  ShortcutType,
  ShortcutsPosition,
  DisabledDate,
} from '../type';
import { RecordType, Required } from '@shared/type';
import { useControlValue, dayjs, isString } from '@shared/utils';

const YEAR_PICKER_CONTENXT_KEY = 'year-picker-context';
interface YearPickerContenxt {
  computedValue: Ref<DatePickerValue>;
  computedPickerValue: Ref<DatePickerValue>;
  formatValue: Ref<string>;
  computedVisible: Ref<boolean>;
  showConfirmBtn: Ref<boolean>;
  shortcuts: Ref<ShortcutType[]>;
  shortcutsPosition: Ref<ShortcutsPosition>;
  emits: YearPickerEmits;
  disabledDate: DisabledDate;
  getValueFromFormat: (val: DatePickerValue, format?: ValueFormat) => number;
  getFormatFromValue: (
    val: DatePickerValue,
    format?: ValueFormat
  ) => DatePickerValue;
  getDateFromYear: (year: number) => Date;
}
type YearPickerProps = Required<_YearPickerProps>;

export default function useYearPickerContext() {
  const provide = (props: RecordType, emits: YearPickerEmits) => {
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
    // 展示的value
    const formatValue = computed(() => {
      return format.value && computedValue.value
        ? dayjs()
            .set('year', getValueFromFormat(computedValue.value))
            .format(format.value)
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
    const context: YearPickerContenxt = {
      computedValue,
      computedVisible,
      computedPickerValue,
      formatValue,
      showConfirmBtn,
      shortcuts,
      shortcutsPosition,
      emits,
      disabledDate,
      getDateFromYear,
      getValueFromFormat,
      getFormatFromValue,
    };
    _provide<YearPickerContenxt>(YEAR_PICKER_CONTENXT_KEY, context);
    return {
      ...context,
      disabled,
      allowClear,
    };
  };
  const inject = () => {
    return _inject<YearPickerContenxt>(YEAR_PICKER_CONTENXT_KEY, {
      computedValue: ref(''),
      computedVisible: ref(false),
      computedPickerValue: ref(''),
      formatValue: ref(''),
      showConfirmBtn: ref(false),
      shortcuts: ref([]),
      shortcutsPosition: ref('bottom'),
      emits: () => {},
      disabledDate: () => false,
      getDateFromYear: () => new Date(),
      getFormatFromValue: () => '',
      getValueFromFormat: () => 0,
    });
  };

  return {
    provide,
    inject,
  };
}
