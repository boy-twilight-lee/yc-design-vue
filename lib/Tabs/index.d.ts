import { App } from 'vue';
import { default as _Tabs } from './Tabs.vue';
import { default as _TabPane } from './TabPane.vue';
export type TabsInstance = InstanceType<typeof _Tabs>;
export type TabPaneInstance = InstanceType<typeof _TabPane>;
export * from './type';
declare const Tabs: {
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./type').TabsProps> & Readonly<{
        onChange?: ((value: import('./type').TabKey) => any) | undefined;
        onDelete?: ((value: import('./type').TabKey) => any) | undefined;
        onAdd?: (() => any) | undefined;
        "onUpdate:activeKey"?: ((value: import('./type').TabKey) => any) | undefined;
        "onTab-click"?: ((value: import('./type').TabKey) => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
        change: (value: import('./type').TabKey) => any;
        delete: (value: import('./type').TabKey) => any;
        add: () => any;
        "update:activeKey": (value: import('./type').TabKey) => any;
        "tab-click": (value: import('./type').TabKey) => any;
    }, import('vue').PublicProps, {
        size: import('..').Size;
        trigger: import('./type').TabTrigger;
        position: import('./type').TabPositon;
        justify: boolean;
        type: import('./type').TabType;
        animation: boolean;
        direction: import('..').Direction;
        activeKey: import('./type').TabKey;
        defaultActiveKey: import('./type').TabKey;
        editable: boolean;
        autoSwitch: boolean;
        headerPadding: boolean;
        destoryOnHide: boolean;
        showAddButton: boolean;
        hideContent: boolean;
    }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {
        listRef: HTMLDivElement;
    }, HTMLDivElement, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('./type').TabsProps> & Readonly<{
        onChange?: ((value: import('./type').TabKey) => any) | undefined;
        onDelete?: ((value: import('./type').TabKey) => any) | undefined;
        onAdd?: (() => any) | undefined;
        "onUpdate:activeKey"?: ((value: import('./type').TabKey) => any) | undefined;
        "onTab-click"?: ((value: import('./type').TabKey) => any) | undefined;
    }>, {}, {}, {}, {}, {
        size: import('..').Size;
        trigger: import('./type').TabTrigger;
        position: import('./type').TabPositon;
        justify: boolean;
        type: import('./type').TabType;
        animation: boolean;
        direction: import('..').Direction;
        activeKey: import('./type').TabKey;
        defaultActiveKey: import('./type').TabKey;
        editable: boolean;
        autoSwitch: boolean;
        headerPadding: boolean;
        destoryOnHide: boolean;
        showAddButton: boolean;
        hideContent: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('./type').TabsProps> & Readonly<{
    onChange?: ((value: import('./type').TabKey) => any) | undefined;
    onDelete?: ((value: import('./type').TabKey) => any) | undefined;
    onAdd?: (() => any) | undefined;
    "onUpdate:activeKey"?: ((value: import('./type').TabKey) => any) | undefined;
    "onTab-click"?: ((value: import('./type').TabKey) => any) | undefined;
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    change: (value: import('./type').TabKey) => any;
    delete: (value: import('./type').TabKey) => any;
    add: () => any;
    "update:activeKey": (value: import('./type').TabKey) => any;
    "tab-click": (value: import('./type').TabKey) => any;
}, string, {
    size: import('..').Size;
    trigger: import('./type').TabTrigger;
    position: import('./type').TabPositon;
    justify: boolean;
    type: import('./type').TabType;
    animation: boolean;
    direction: import('..').Direction;
    activeKey: import('./type').TabKey;
    defaultActiveKey: import('./type').TabKey;
    editable: boolean;
    autoSwitch: boolean;
    headerPadding: boolean;
    destoryOnHide: boolean;
    showAddButton: boolean;
    hideContent: boolean;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: Readonly<import('./type').TabsSlots> & import('./type').TabsSlots;
}) & {
    install: (app: App) => void;
};
export { _TabPane as TabPane };
declare module 'vue' {
    interface GlobalComponents {
        YcTabs: typeof Tabs;
        YcTabPane: typeof _TabPane;
    }
}
export default Tabs;
