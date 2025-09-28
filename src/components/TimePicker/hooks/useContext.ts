import {
  ref,
  Ref,
  toRefs,
  computed,
  provide as _provide,
  inject as _inject,
} from 'vue';
import {
  TimePickerEmits,
  TimePickerProps as _TimePickerProps,
  TimePickerType,
  TimePickerValue,
  TimeUnit,
  DisabledHours,
  DisabledMinutes,
  DisabledSeconds,
} from '../type';
import { RecordType, Required } from '@shared/type';
import { useControlValue, isArray, useI18n } from '@shared/utils';

const TIME_PICKER_CONTEXT_KEY = 'time-picker-context';
type TimePickerContext = {
  type: Ref<TimePickerType>;
  format: Ref<string>;
  computedValue: Ref<TimePickerValue>;
  computedVisible: Ref<boolean>;
  curIndex: Ref<number>;
  curValue: Ref<number[]>;
  timeColumn: Ref<TimeUnit[]>;
  timeColumnCells: Ref<{ unit: TimeUnit; cells: TimePickerCell[] }[]>;
  inputRefs: Ref<HTMLInputElement[]>;
  disableConfirm: Ref<boolean>;
  hideDisabledOptions: Ref<boolean>;
  disabledHours: DisabledHours;
  disabledMinutes: DisabledMinutes;
  disabledSeconds: DisabledSeconds;
};
type TimePickerProps = Required<_TimePickerProps>;
type TimePickerCell = { label: string; value: number };

export default function useTimePickerContext() {
  const provide = (props: RecordType, emits: TimePickerEmits) => {
    const {
      modelValue,
      defaultValue,
      popupVisible,
      defaultPopupVisible,
      disabled,
      readonly,
      allowClear,
      format,
      type,
      disableConfirm,
      hideDisabledOptions,
      step,
      placeholder: _placeholder,
    } = toRefs(props as TimePickerProps);
    const { disabledHours, disabledMinutes, disabledSeconds } =
      props as TimePickerProps;
    // 国际化
    const { t } = useI18n();
    // 计算的值
    const computedValue = useControlValue(
      modelValue,
      defaultValue.value,
      (val) => {
        emits('update:modelValue', val);
      }
    );
    // 当前的index
    const curIndex = ref<number>(0);
    // 设置value
    const curValue = ref<number[]>([]);
    // 计算的visible
    const computedVisible = useControlValue<boolean>(
      popupVisible,
      defaultPopupVisible.value,
      (val) => {
        emits('update:popupVisible', val);
        emits('popup-visible-change', val);
      }
    );
    // 允许清除
    const showClearBtn = computed(() => {
      const base = !disabled.value && !readonly.value && allowClear.value;
      if (isArray(computedValue.value)) {
        return computedValue.value[0] && computedValue.value[1] && base;
      } else {
        return computedValue.value && base;
      }
    });
    // 渲染column
    const timeColumn = computed<TimeUnit[]>(() => {
      const formatStr = format.value.toLowerCase().replace(/[^a-z]/g, '');
      const units: TimeUnit[] = [];
      if (formatStr.includes('h')) units.push('hour');
      if (formatStr.includes('m')) units.push('minute');
      if (formatStr.includes('s')) units.push('second');
      return units.length > 0 ? units : ['hour', 'minute', 'second'];
    });
    // 渲染columnsvalue
    const timeColumnCells = computed(() => {
      return timeColumn.value.map((unit) => {
        const unitStep = step.value?.[unit] || 1;
        const cellCount = Math.ceil((unit === 'hour' ? 24 : 60) / unitStep);
        return {
          unit,
          cells: Array.from({ length: cellCount }, (_, i) => {
            const value = i * unitStep;
            return {
              label: `${value <= 9 ? '0' : ''}${value}`,
              value: value,
            };
          }),
        };
      });
    });
    // placeholder
    const placeholder = computed(() => {
      return (
        _placeholder.value ??
        t(
          `datePicker.${type.value == 'time-range' ? 'rangePlaceholder.time' : 'placeholder.time'}`
        )
      );
    });
    // inputRefs
    const inputRefs = ref<HTMLInputElement[]>([]);
    // 上下文
    const context: TimePickerContext = {
      computedValue,
      computedVisible,
      timeColumn,
      timeColumnCells,
      curValue,
      format,
      type,
      curIndex,
      inputRefs,
      disableConfirm,
      hideDisabledOptions,
      disabledHours,
      disabledMinutes,
      disabledSeconds,
    };
    _provide<TimePickerContext>(TIME_PICKER_CONTEXT_KEY, context);
    return {
      ...context,
      showClearBtn,
      readonly,
      disabled,
      placeholder,
    };
  };
  const inject = () => {
    return _inject<TimePickerContext>(TIME_PICKER_CONTEXT_KEY, {
      type: ref('time'),
      format: ref('HH:mm:ss'),
      curValue: ref([]),
      computedValue: ref(''),
      computedVisible: ref(false),
      curIndex: ref(0),
      timeColumn: ref([]),
      timeColumnCells: ref([]),
      inputRefs: ref([]),
      disableConfirm: ref(false),
      hideDisabledOptions: ref(false),
      disabledHours: () => [],
      disabledMinutes: () => [],
      disabledSeconds: () => [],
    });
  };
  return {
    provide,
    inject,
  };
}
