import {
  provide as _provide,
  inject as _inject,
  Ref,
  ref,
  computed,
  toRefs,
} from 'vue';
import { RecordType } from '@shared/type';
import { DatePickerValue } from '../type';

const PICKER_TRIGGER_CONTEXT = 'picker-context';
export interface PickerInputContext {
  props: RecordType;
  computedVisible: Ref<boolean>;
  formatValue: Ref<string>;
  showClearBtn: Ref<boolean>;
  onClear: () => void;
}

export default function usePickerInputContext() {
  const provide = (
    context: {
      computedValue: Ref<DatePickerValue | DatePickerValue[]>;
      computedVisible: Ref<boolean>;
      formatValue: Ref<string>;
      emits: (...args: any) => void;
    },
    props: RecordType
  ) => {
    const { computedVisible, computedValue, formatValue, emits } = context;
    const { allowClear, disabled } = toRefs(props);
    _provide<PickerInputContext>(PICKER_TRIGGER_CONTEXT, {
      computedVisible,
      formatValue,
      props,
      showClearBtn: computed(() => {
        return !!computedValue.value && allowClear.value && !disabled.value;
      }),
      onClear: () => {
        computedValue.value = '';
        emits('clear');
      },
    });
  };
  const inject = () => {
    return _inject<PickerInputContext>(PICKER_TRIGGER_CONTEXT, {
      computedVisible: ref(false),
      formatValue: ref(''),
      showClearBtn: ref(false),
      props: ref({}),
      onClear: () => {},
    });
  };
  return {
    provide,
    inject,
  };
}
