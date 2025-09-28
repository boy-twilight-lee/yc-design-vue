import {
  ref,
  Ref,
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
  ShortcutType,
  ShortcutsPosition,
  DisabledDate,
} from '../type';
import { RecordType, Required } from '@shared/type';
import { useControlValue, dayjs, isString } from '@shared/utils';

const MONTH_PICKER_CONTENXT_KEY = 'month-picker-context';
interface MonthPickerContenxt {
  computedValue: Ref<DatePickerValue>;
  computedPickerValue: Ref<DatePickerValue>;
  formatValue: Ref<string>;
  computedVisible: Ref<boolean>;
  showConfirmBtn: Ref<boolean>;
  shortcuts: Ref<ShortcutType[]>;
  shortcutsPosition: Ref<ShortcutsPosition>;
  previewShortcut: Ref<boolean>;
  emits: MonthPickerEmits;
  disabledDate: DisabledDate;
  getValueFromFormat: (val: DatePickerValue, format?: ValueFormat) => number;
  getFormatFromValue: (
    val: DatePickerValue,
    format?: ValueFormat
  ) => DatePickerValue;
  getDateFromMonth: (year: number) => Date;
}
type MonthPickerProps = Required<_MonthPickerProps>;

export default function useMonthPickerContext() {
  const provide = (props: RecordType, emits: MonthPickerEmits) => {
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
      shortcuts,
      shortcutsPosition,
      previewShortcut,
    } = toRefs(props as MonthPickerProps);
    const { disabledDate } = props as MonthPickerProps;
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
        return new Date(val).getMonth();
      } else if (format == 'Date') {
        return (val as Date).getMonth();
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
      const date: DatePickerValue = getDateFromMonth(val as number);
      if (format == 'timestamp') {
        return date.getTime();
      }
      if (format != 'Date') {
        return dayjs(date).format(format);
      }
      return date;
    };
    // year转date
    const getDateFromMonth = (year: number) => {
      return new Date(year, 1, 1, 0, 0, 0);
    };
    const context: MonthPickerContenxt = {
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
      getDateFromMonth,
      getValueFromFormat,
      getFormatFromValue,
    };
    _provide<MonthPickerContenxt>(MONTH_PICKER_CONTENXT_KEY, context);
    return context;
  };
  const inject = () => {
    return _inject<MonthPickerContenxt>(MONTH_PICKER_CONTENXT_KEY, {
      computedValue: ref(''),
      computedVisible: ref(false),
      computedPickerValue: ref(''),
      formatValue: ref(''),
      showConfirmBtn: ref(false),
      shortcuts: ref([]),
      shortcutsPosition: ref('bottom'),
      previewShortcut: ref(true),
      emits: () => {},
      disabledDate: () => false,
      getDateFromMonth: () => new Date(),
      getFormatFromValue: () => '',
      getValueFromFormat: () => 0,
    });
  };

  return {
    provide,
    inject,
  };
}
