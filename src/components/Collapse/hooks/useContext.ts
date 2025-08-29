import {
  ref,
  toRefs,
  Ref,
  useSlots,
  Slots,
  provide as _provide,
  inject as _inject,
  computed,
} from 'vue';
import {
  CollapseItemProps as _CollapseItemProps,
  CollapseProps as _CollapseProps,
  CollapseEmits,
  CollapseValue,
  ExpandIconPosition,
} from '../type';
import { Props, RequiredDeep } from '@shared/type';
import { useControlValue } from '@shared/utils';

export const COLLAPSE_CONTEXT_KEY = 'collapse-context';
export type CollapseContext = {
  computedActiveKey: Ref<CollapseValue[]>;
  accordion: Ref<boolean>;
  expandIconPosition: Ref<ExpandIconPosition>;
  showExpandIcon: Ref<boolean>;
  destroyOnHide: Ref<boolean>;
  slots: Slots;
};
export type CollapseProps = RequiredDeep<_CollapseProps>;
export type CollapseItemProps = RequiredDeep<_CollapseItemProps>;

export default () => {
  const provide = (props: Props, emits: CollapseEmits) => {
    const {
      activeKey,
      defaultActiveKey,
      accordion,
      expandIconPosition,
      showExpandIcon,
      destroyOnHide,
    } = toRefs(props as CollapseProps);
    // 插槽对象
    const slots = useSlots();
    // 受控的key
    const computedActiveKey = useControlValue<CollapseValue[]>(
      activeKey,
      defaultActiveKey.value,
      (val) => {
        emits('update:activekey', val);
        emits('change', val);
      }
    );
    _provide<CollapseContext>(COLLAPSE_CONTEXT_KEY, {
      computedActiveKey,
      accordion,
      expandIconPosition,
      showExpandIcon,
      destroyOnHide,
      slots,
    });
  };
  const inject = (props: Props) => {
    const { showExpandIcon, destroyOnHide } = toRefs(
      props as CollapseItemProps
    );
    // 接收的值
    const injection = _inject<CollapseContext>(COLLAPSE_CONTEXT_KEY, {
      computedActiveKey: ref([]),
      accordion: ref(false),
      expandIconPosition: ref('left'),
      showExpandIcon: ref(true),
      destroyOnHide: ref(false),
      slots: {},
    });
    const { showExpandIcon: _showExpandIcon, destroyOnHide: _destroyOnHide } =
      injection;
    return {
      ...injection,
      showExpandIcon: computed(() => {
        return showExpandIcon.value ?? _showExpandIcon.value;
      }),
      destroyOnHide: computed(() => {
        return destroyOnHide.value ?? _destroyOnHide.value;
      }),
    };
  };
  return {
    provide,
    inject,
  };
};
