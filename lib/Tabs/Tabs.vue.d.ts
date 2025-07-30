import { TabsProps, TabsSlots } from './type';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Readonly<TabsSlots> & TabsSlots;
    refs: {
        listRef: HTMLDivElement;
    };
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<TabsProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    change: (value: import('./type').TabKey) => any;
    delete: (value: import('./type').TabKey) => any;
    add: () => any;
    "update:activeKey": (value: import('./type').TabKey) => any;
    "tab-click": (value: import('./type').TabKey) => any;
}, string, import('vue').PublicProps, Readonly<TabsProps> & Readonly<{
    onChange?: ((value: import('./type').TabKey) => any) | undefined;
    onDelete?: ((value: import('./type').TabKey) => any) | undefined;
    onAdd?: (() => any) | undefined;
    "onUpdate:activeKey"?: ((value: import('./type').TabKey) => any) | undefined;
    "onTab-click"?: ((value: import('./type').TabKey) => any) | undefined;
}>, {
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
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    listRef: HTMLDivElement;
}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
