import {
  ref,
  toRefs,
  Ref,
  computed,
  provide as _provide,
  inject as _inject,
} from 'vue';
import {
  RadioGroupProps as _RadioGroupProps,
  RadioType,
  RadioGroupEmits,
  RadioValue,
  RadioOption,
} from '../type';
import { Size, Props, RequiredDeep, ObjectData } from '@shared/type';
import { useControlValue, getGlobalConfig, isObject } from '@shared/utils';

const RADIO_GROUP_CONTEXT_KEY = 'radio-group-context';
interface RadioContext {
  computedValue: Ref<RadioValue | undefined>;
  type: Ref<RadioType>;
  disabled: Ref<boolean>;
  size: Ref<Size>;
  hasGroup: Ref<boolean>;
  emits: RadioGroupEmits;
}
type RadioGroupProps = RequiredDeep<_RadioGroupProps>;

export default () => {
  const provide = (props: Props, emits: RadioGroupEmits) => {
    const {
      modelValue,
      defaultValue,
      disabled,
      type,
      options: _options,
    } = toRefs(props as RadioGroupProps);
    // 获取全局配置
    const { size } = getGlobalConfig(props);
    // 受控值
    const computedValue = useControlValue<RadioValue>(
      modelValue,
      defaultValue.value,
      (val) => {
        emits('update:modelValue', val);
        emits('change', val);
      }
    );
    // options
    const options = computed(() => {
      return _options.value.map((item: RadioOption) => {
        return isObject(item)
          ? item
          : {
              label: item,
              value: item,
            };
      }) as ObjectData[];
    });
    // 提供给子组件
    _provide<RadioContext>(RADIO_GROUP_CONTEXT_KEY, {
      computedValue,
      type,
      disabled,
      size,
      hasGroup: ref(true),
      emits,
    });
    return {
      options,
    };
  };
  const inject = () => {
    // 接收的值
    return _inject<RadioContext>(RADIO_GROUP_CONTEXT_KEY, {
      computedValue: ref(undefined),
      disabled: ref(false),
      type: ref('radio'),
      size: ref('medium'),
      hasGroup: ref(false),
      emits: () => {},
    });
  };
  return {
    provide,
    inject,
  };
};
