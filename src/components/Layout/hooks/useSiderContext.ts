import { provide as _provide, inject as _inject, toRefs, Ref, ref } from 'vue';
import { Props, Theme } from '@shared/type';
import { useControlValue } from '@shared/utils';
import { LayoutSiderEmits } from '../type';

export const LAYOUT_CONTEXT_KEY = 'LAYOUT-CONTEXT';
export type LayoutContext = {
  theme: Ref<Theme>;
  collapsed: Ref<boolean>;
};

export default () => {
  const provide = (props: Props, emits: LayoutSiderEmits) => {
    const { theme, collapsed, defaultCollapsed } = toRefs(props);
    // 受控的收缩
    const computedCollapsed = useControlValue<boolean>(
      collapsed,
      defaultCollapsed.value,
      (val) => {
        emits('update:collapsed', val);
      }
    );
    _provide<LayoutContext>(LAYOUT_CONTEXT_KEY, {
      theme,
      collapsed: computedCollapsed,
    });
    return {
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
