import {
  ref,
  toRefs,
  Ref,
  computed,
  provide as _provide,
  inject as _inject,
} from 'vue';
import {
  CheckboxGroupProps as _CheckboxGroupProps,
  CheckboxValue,
  CheckboxGroupEmits,
} from '../type';
import { RecordType, Required } from '@shared/type';
import { isObject } from '@shared/utils/is';
import { useControlValue } from '@shared/utils/control';

const CHECKBOX_GROUP_CONTEXT_KEY = 'checkbox-group-context';
type CheckboxContext = {
  computedValue: Ref<CheckboxValue[]>;
  max: Ref<number>;
  disabled: Ref<boolean>;
  hasGroup: Ref<boolean>;
};
type CheckboxGroupProps = Required<_CheckboxGroupProps>;

export default () => {
  const provide = (props: RecordType, emits: CheckboxGroupEmits) => {
    const {
      modelValue,
      defaultValue,
      disabled,
      max,
      options: _options,
    } = toRefs(props as CheckboxGroupProps);
    // 受控值
    const computedValue = useControlValue<CheckboxValue[]>(
      modelValue,
      defaultValue.value,
      (val) => {
        emits('update:modelValue', val);
        emits('change', val);
      }
    );
    // options
    const options = computed(() => {
      return _options.value.map((item) => {
        return isObject(item) ? item : { label: item, value: item };
      }) as RecordType[];
    });
    _provide<CheckboxContext>(CHECKBOX_GROUP_CONTEXT_KEY, {
      computedValue,
      max,
      disabled,
      hasGroup: ref(true),
    });
    return {
      options,
    };
  };
  const inject = () => {
    return _inject<CheckboxContext>(CHECKBOX_GROUP_CONTEXT_KEY, {
      computedValue: ref([]),
      max: ref(100000),
      disabled: ref(false),
      hasGroup: ref(false),
    });
  };
  return {
    provide,
    inject,
  };
};
