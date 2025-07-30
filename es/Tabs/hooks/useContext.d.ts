import { Ref, Slots } from 'vue';
import { TabPaneProps as _TabPaneProps, TabKey, TabsEmits, TabTrigger, TabType, TabPositon } from '../type';
import { Direction, Props, RequiredDeep, Size } from '../../_shared/type';
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
type TabPaneProps = RequiredDeep<_TabPaneProps>;
export type PaneNode = {
    slots: Slots;
} & TabPaneProps;
declare const _default: () => {
    provide: (props: Props, emits: TabsEmits, listRef: Ref<HTMLDivElement | undefined>) => {
        computedActiveKey: import('vue').WritableComputedRef<any, TabKey>;
        size: Ref<any, any>;
        direction: import('vue').ComputedRef<Direction>;
        position: Ref<TabPositon, TabPositon>;
        autoSwitch: Ref<boolean, boolean>;
        titleRefs: Ref<HTMLSpanElement[], HTMLSpanElement[]>;
        tabRefs: Ref<HTMLDivElement[], HTMLDivElement[]>;
    };
    inject: () => TabsContext;
};
export default _default;
