import {
  ref,
  toRefs,
  Ref,
  computed,
  provide as _provide,
  inject as _inject,
} from 'vue';
import {
  ButtonType,
  ButtonProps as _ButtonProps,
  ButtonGroupProps as _ButtonGroupProps,
} from '../type';
import { Size, Shape, Status, Required, RecordType } from '@shared/type';
import { getGlobalConfig } from '@shared/utils';

const BUTTON_GROUP_CONTEXT_KEY = 'button-group-context';
type ButtonContext = {
  type: Ref<ButtonType>;
  status: Ref<Status>;
  size?: Ref<Size>;
  shape: Ref<Shape>;
  disabled: Ref<boolean>;
};
type ButtonProps = Required<_ButtonProps>;
type ButtonGroupProps = Required<_ButtonGroupProps>;

export default function useButtonContext() {
  const provide = (props: RecordType) => {
    const { type, status, shape, disabled } = toRefs(props as ButtonGroupProps);
    const { size } = getGlobalConfig(props);
    _provide<ButtonContext>(BUTTON_GROUP_CONTEXT_KEY, {
      type,
      status,
      size,
      shape,
      disabled,
    });
  };
  const inject = (props: RecordType) => {
    const { size: globalSize } = getGlobalConfig(props);
    const { type, status, shape, size, disabled } = toRefs(
      props as ButtonProps
    );
    const {
      type: _type,
      status: _status,
      shape: _shape,
      disabled: _disabled,
      size: _size,
    } = _inject<ButtonContext>(BUTTON_GROUP_CONTEXT_KEY, {
      type: ref('secondary'),
      status: ref('normal'),
      shape: ref('square'),
      disabled: ref(false),
    });
    return {
      disabled: computed(() => disabled.value ?? _disabled.value),
      type: computed(() => type.value ?? _type.value),
      status: computed(() => status.value ?? _status.value),
      shape: computed(() => shape.value ?? _shape.value),
      size: computed(() => {
        return size.value ?? _size?.value ?? globalSize.value;
      }),
    };
  };
  return {
    provide,
    inject,
  };
}
