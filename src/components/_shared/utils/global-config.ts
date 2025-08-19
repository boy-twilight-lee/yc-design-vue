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
import { PopupContainer, Props, Size } from '@shared/type';
import { isString, isUndefined } from '../utils';
import YcEmpty from '@/components/Empty';
import { IconLoading } from '@shared/icons';

export const CONFIG_PROVIDER_PROVIDE_KEY = 'config-props';

export interface ConfigProviderProvide {
  zIndex: Ref<number>;
  size: Ref<Size>;
  popupContainer: Ref<PopupContainer>;
  updateAtScroll: Ref<boolean>;
  scrollToClose: Ref<boolean>;
  exchangeTime: Ref<boolean>;
  slots: Partial<ConfigconfigSlots>;
}

type ValueType = string | number | boolean | PopupContainer | undefined;

const getVar = (value: Ref<ValueType>, _value: Ref<ValueType>) => {
  return computed(() => {
    return isUndefined(value?.value) ||
      (isString(value?.value) && !value?.value?.length)
      ? _value.value
      : value.value;
  });
};

export const getGlobalConfig = (props: Props = {}) => {
  // 接收值
  const {
    slots,
    zIndex,
    size: _size,
    updateAtScroll: _updateAtScroll,
    scrollToClose: _scrollToClose,
    exchangeTime: _exchangeTime,
    popupContainer: _popupContainer,
  } = inject<ConfigProviderProvide>(CONFIG_PROVIDER_PROVIDE_KEY, {
    zIndex: ref(1001),
    size: ref('medium'),
    updateAtScroll: ref(true),
    scrollToClose: ref(false),
    exchangeTime: ref(true),
    popupContainer: ref('body'),
    slots: {},
  });
  // 渲染empty
  const renderEmpty = (name: EmptyComponent) => {
    return slots.empty
      ? () =>
          slots.empty?.({
            component: name,
          })
      : (YcEmpty as VNode);
  };
  const renderLoading = () => {
    return slots.loading ? slots.loading : (IconLoading as VNode);
  };
  // 接收属性
  const { size, updateAtScroll, scrollToClose, exchangeTime, popupContainer } =
    toRefs(isReactive(props) ? props : reactive(props));
  return {
    slots,
    zIndex,
    size: getVar(size, _size),
    updateAtScroll: getVar(updateAtScroll, _updateAtScroll),
    scrollToClose: getVar(scrollToClose, _scrollToClose),
    popupContainer: getVar(popupContainer, _popupContainer),
    exchangeTime: getVar(exchangeTime, _exchangeTime),
    renderEmpty,
    renderLoading,
  };
};
