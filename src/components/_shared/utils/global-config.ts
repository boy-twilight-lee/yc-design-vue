import { toRefs, inject, ref, isReactive, reactive, Ref, computed } from 'vue';
import { ObjectData, PopupContainer, Props, Size } from '@shared/type';
import { isBoolean, isString, isUndefined } from '../utils';

export const CONFIG_PROVIDER_PROVIDE_KEY = 'config-props';

export interface ConfigProviderProvide {
  zIndex: Ref<number>;
  size: Ref<Size>;
  locale: Ref<ObjectData | undefined>;
  popupContainer: Ref<PopupContainer>;
}

type ValueType = string | number | boolean | PopupContainer | undefined | any;

const getVar = (value: Ref<ValueType>, _value: Ref<ValueType>) => {
  return computed(() => {
    return isUndefined(value?.value) ||
      (isString(value.value) && !value.value.length)
      ? _value.value
      : value.value;
  });
};

export const getGlobalConfig = (props: Props = {}) => {
  // 接收值
  const {
    zIndex,
    locale,
    size: _size,
    popupContainer: _popupContainer,
  } = inject<ConfigProviderProvide>(CONFIG_PROVIDER_PROVIDE_KEY, {
    locale: ref(),
    zIndex: ref(1001),
    size: ref('medium'),
    popupContainer: ref('body'),
  });
  // 接收属性
  const { size, popupContainer, renderToBody } = toRefs(
    isReactive(props) ? props : reactive(props)
  );
  // 是否绝对定位
  const isAbsolute = computed(() => {
    return (
      popupContainer.value ||
      (isBoolean(renderToBody?.value) && !renderToBody.value)
    );
  });
  return {
    zIndex,
    locale,
    isAbsolute,
    size: getVar(size, _size),
    popupContainer: getVar(popupContainer, _popupContainer),
  };
};
