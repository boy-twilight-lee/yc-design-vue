import {
  toRefs,
  inject,
  ref,
  isReactive,
  reactive,
  Ref,
  computed,
  CSSProperties,
} from 'vue';
import { RecordType, PopupContainer, Size } from '@shared/type';
import { isBoolean, isString, isUndefined } from './is';

export const CONFIG_PROVIDER_PROVIDE_KEY = 'config-props';

export interface ConfigProviderProvide {
  zIndex: Ref<number>;
  size: Ref<Size>;
  locale: Ref<RecordType | undefined>;
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

export const getGlobalConfig = (props: RecordType = {}) => {
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
  const { size, popupContainer } = toRefs(
    isReactive(props) ? props : reactive(props)
  );
  //传送样式
  const teleportStyle = computed(() => {
    return {
      zIndex: zIndex.value,
      position:
        popupContainer.value && popupContainer.value != 'body'
          ? 'absolute'
          : 'fixed',
    } as CSSProperties;
  });
  return {
    zIndex,
    locale,
    size: getVar(size, _size),
    popupContainer: getVar(popupContainer, _popupContainer),
    teleportStyle,
  };
};
