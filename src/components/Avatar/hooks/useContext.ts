import {
  ref,
  toRefs,
  Ref,
  provide as _provide,
  inject as _inject,
  computed,
} from 'vue';
import { AvatarProps, AvatarGroupProps as _AvatarGroupProps } from '../type';

import { RecordType, Required } from '@shared/type';

const AVATAR_GROUP_CONTEXT_KEY = 'radio-group-context';
type AvatarContext = {
  shape: Ref<AvatarProps['shape']>;
  size: Ref<number>;
  autoFixFontSize: Ref<boolean>;
};
type AvatarGroupProps = Required<_AvatarGroupProps>;

export default () => {
  const provide = (props: RecordType) => {
    const { shape, size, autoFixFontSize } = toRefs(props as AvatarGroupProps);
    _provide<AvatarContext>(AVATAR_GROUP_CONTEXT_KEY, {
      shape,
      size,
      autoFixFontSize,
    });
  };
  const inject = (props: RecordType) => {
    const { shape, size, autoFixFontSize } = toRefs(props);
    const {
      shape: _shape,
      size: _size,
      autoFixFontSize: _autoFixFontSize,
    } = _inject<AvatarContext>(AVATAR_GROUP_CONTEXT_KEY, {
      shape: ref('round'),
      size: ref(40),
      autoFixFontSize: ref(true),
    });
    return {
      shape: computed(() => {
        return shape.value ?? _shape.value;
      }),
      size: computed(() => {
        return size.value ?? _size.value;
      }),
      autoFixFontSize: computed(() => {
        return autoFixFontSize.value ?? _autoFixFontSize.value;
      }),
    };
  };
  return {
    provide,
    inject,
  };
};
