import {
  provide as _provide,
  inject as _inject,
  toRefs,
  Ref,
  ref,
  computed,
} from 'vue';
import { Props, Theme, RequiredDeep } from '@shared/type';
import { isUndefined, useControlValue } from '@shared/utils';
import { LayoutSiderEmits, LayoutSiderProps } from '../type';
import { useDark } from '@vueuse/core';

export const LAYOUT_CONTEXT_KEY = 'LAYOUT-CONTEXT';
export type LayoutContext = {
  theme: Ref<Theme>;
  collapsed: Ref<boolean>;
};

export default () => {
  const provide = (props: Props, emits: LayoutSiderEmits) => {
    const {
      theme: _theme,
      collapsed,
      defaultCollapsed,
    } = toRefs(props as RequiredDeep<LayoutSiderProps>);
    // isDark
    const isDark = useDark({
      selector: 'body',
      attribute: 'yc-design-theme',
      valueDark: 'dark',
      valueLight: 'light',
      initialValue: 'light',
    });
    isDark.value = false;
    // 受控的收缩
    const computedCollapsed = useControlValue<boolean>(
      collapsed,
      defaultCollapsed.value,
      (val) => {
        emits('update:collapsed', val);
      }
    );
    // 处理主题问题
    const theme = computed<Theme>(() => {
      if (!isUndefined(_theme.value)) {
        return _theme.value;
      }
      return isDark.value ? 'dark' : 'light';
    });
    _provide<LayoutContext>(LAYOUT_CONTEXT_KEY, {
      theme,
      collapsed: computedCollapsed,
    });
    return {
      theme,
      computedCollapsed,
    };
  };
  const inject = () => {
    return _inject<LayoutContext>(LAYOUT_CONTEXT_KEY, {
      theme: ref('light'),
      collapsed: ref(false),
    });
  };
  return {
    provide,
    inject,
  };
};
