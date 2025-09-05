import {
  toRefs,
  inject,
  ref,
  isReactive,
  reactive,
  Ref,
  VNode,
  computed,
} from 'vue';
import { ConfigconfigSlots, EmptyComponent } from '@/components/ConfigProvider';
import { ObjectData, PopupContainer, Props, Size } from '@shared/type';
import { isString, isUndefined } from '../utils';
import YcEmpty from '@/components/Empty';
import { IconLoading } from '@shared/icons';

export const CONFIG_PROVIDER_PROVIDE_KEY = 'config-props';

export interface ConfigProviderProvide {
  zIndex: Ref<number>;
  size: Ref<Size>;
  locale: Ref<ObjectData | undefined>;
  popupContainer: Ref<PopupContainer>;
  updateAtScroll: Ref<boolean>;
  scrollToClose: Ref<boolean>;
  slots: Partial<ConfigconfigSlots>;
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
    updateAtScroll: _updateAtScroll,
    scrollToClose: _scrollToClose,
    popupContainer: _popupContainer,
  } = inject<ConfigProviderProvide>(CONFIG_PROVIDER_PROVIDE_KEY, {
    locale: ref(),
    zIndex: ref(1001),
    size: ref('medium'),
    updateAtScroll: ref(true),
    scrollToClose: ref(false),
    popupContainer: ref('body'),
    slots: {},
  });
  // 接收属性
  const { size, updateAtScroll, scrollToClose, popupContainer } = toRefs(
    isReactive(props) ? props : reactive(props)
  );
  return {
    zIndex,
    locale,
    size: getVar(size, _size),
    updateAtScroll: getVar(updateAtScroll, _updateAtScroll),
    scrollToClose: getVar(scrollToClose, _scrollToClose),
    popupContainer: getVar(popupContainer, _popupContainer),
  };
};
