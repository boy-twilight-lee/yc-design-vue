import {
  provide as _provide,
  inject as _inject,
  toRefs,
  Ref,
  ref,
  computed,
} from 'vue';
import { Theme, Required, ObjectType } from '@shared/type';
import { useControlValue } from '@shared/utils';
import { LayoutSiderEmits, LayoutSiderProps } from '../type';

export const LAYOUT_CONTEXT_KEY = 'LAYOUT-CONTEXT';
export type LayoutContext = {
  theme: Ref<Theme | undefined>;
  collapsed: Ref<boolean>;
};

export default () => {
  const provide = (props: ObjectType, emits: LayoutSiderEmits) => {
    const { collapsed, defaultCollapsed, theme } = toRefs(
      props as Required<LayoutSiderProps>
    );
    // 受控的收缩
    const computedCollapsed = useControlValue<boolean>(
      collapsed,
      defaultCollapsed.value,
      (val) => {
        emits('update:collapsed', val);
      }
    );
    // light
    const mergeTheme = computed(() => theme.value || 'light');
    _provide<LayoutContext>(LAYOUT_CONTEXT_KEY, {
      theme,
      collapsed: computedCollapsed,
    });
    return {
      theme: mergeTheme,
      computedCollapsed,
    };
  };
  const inject = () => {
    return _inject<LayoutContext>(LAYOUT_CONTEXT_KEY, {
      theme: ref(undefined),
      collapsed: ref(false),
    });
  };
  return {
    provide,
    inject,
  };
};
