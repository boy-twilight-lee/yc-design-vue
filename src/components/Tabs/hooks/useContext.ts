import {
  toRefs,
  provide as _provide,
  inject as _inject,
  ref,
  Ref,
  computed,
  Slots,
} from 'vue';
import {
  TabPaneProps as _TabPaneProps,
  TabsProps as _TabsProps,
  TabKey,
  TabsEmits,
  TabTrigger,
  TabType,
  TabPositon,
} from '../type';
import { Direction, ObjectData, , Required, Size } from '@shared/type';
import { useControlValue, getGlobalConfig } from '@shared/utils';

const TABS_CONTEXT_KEY = 'tabs-context';
type TabsContext = {
  computedActiveKey: Ref<TabKey>;
  type: Ref<TabType>;
  trigger: Ref<TabTrigger>;
  direction: Ref<Direction>;
  position: Ref<TabPositon>;
  editable: Ref<boolean>;
  destoryOnHide: Ref<boolean>;
  listRef: Ref<HTMLDivElement | undefined>;
  titleRefs: Ref<HTMLSpanElement[]>;
  tabRefs: Ref<HTMLDivElement[]>;
  headerPadding: Ref<boolean>;
  size: Ref<Size>;
  emits: TabsEmits;
};
type TabsProps = Required<_TabsProps>;
type TabPaneProps = Required<_TabPaneProps>;
export type PaneNode = {
  slots: Slots;
} & TabPaneProps;

export default () => {
  const provide = (
    props: ObjectData,
    emits: TabsEmits,
    listRef: Ref<HTMLDivElement | undefined>
  ) => {
    const { size } = getGlobalConfig(props);
    const {
      activeKey,
      defaultActiveKey,
      position,
      trigger,
      autoSwitch,
      type,
      editable,
      headerPadding,
      destoryOnHide,
      direction: _direction,
    } = toRefs(props as TabsProps);
    // 当前活跃的key
    const computedActiveKey = useControlValue<TabKey>(
      activeKey,
      defaultActiveKey.value,
      (val) => {
        emits('update:activeKey', val);
      }
    );
    // titleRefs
    const titleRefs = ref<HTMLSpanElement[]>([]);
    // tabRefs
    const tabRefs = ref<HTMLDivElement[]>([]);
    // 方向
    const direction = computed(() => {
      if (['top', 'bottom'].includes(position.value)) {
        return 'horizontal';
      } else if (['left', 'right'].includes(position.value)) {
        return 'vertical';
      }
      return _direction.value;
    });
    _provide<TabsContext>(TABS_CONTEXT_KEY, {
      computedActiveKey,
      editable,
      direction,
      trigger,
      type,
      destoryOnHide,
      position,
      headerPadding,
      size,
      listRef,
      titleRefs,
      tabRefs,
      emits,
    });
    return {
      computedActiveKey,
      size,
      direction,
      position,
      autoSwitch,
      titleRefs,
      tabRefs,
    };
  };
  const inject = () => {
    return _inject<TabsContext>(TABS_CONTEXT_KEY, {
      computedActiveKey: ref(''),
      editable: ref(false),
      headerPadding: ref(false),
      trigger: ref('click'),
      type: ref('line'),
      direction: ref('horizontal'),
      destoryOnHide: ref(false),
      position: ref('top'),
      size: ref('medium'),
      titleRefs: ref([]),
      listRef: ref(),
      tabRefs: ref([]),
      emits: () => {},
    });
  };

  return {
    provide,
    inject,
  };
};
