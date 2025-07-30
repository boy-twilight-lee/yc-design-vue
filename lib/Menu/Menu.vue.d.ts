import { MenuProps, MenuSlots } from './type';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Readonly<MenuSlots> & MenuSlots;
    refs: {
        menuRef: HTMLDivElement;
    };
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<MenuProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    collapse: (collapsed: boolean, type: "clickTrigger" | "responsive") => any;
    "update:collapsed": (value: boolean) => any;
    "update:selectedKeys": (value: string) => any;
    "update:openKeys": (value: string) => any;
    "menu-item-click": (key: string) => any;
    "sub-menu-click": (key: string, openKeys: string[]) => any;
}, string, import('vue').PublicProps, Readonly<MenuProps> & Readonly<{
    onCollapse?: ((collapsed: boolean, type: "clickTrigger" | "responsive") => any) | undefined;
    "onUpdate:collapsed"?: ((value: boolean) => any) | undefined;
    "onUpdate:selectedKeys"?: ((value: string) => any) | undefined;
    "onUpdate:openKeys"?: ((value: string) => any) | undefined;
    "onMenu-item-click"?: ((key: string) => any) | undefined;
    "onSub-menu-click"?: ((key: string, openKeys: string[]) => any) | undefined;
}>, {
    mode: import('./type').MenuMode;
    triggerProps: import('..').TriggerProps;
    collapsed: boolean;
    breakpoint: import('..').BreakpointName;
    theme: import('..').Theme;
    popupMaxHeight: import('./type').PopupMaxHeight;
    accordion: boolean;
    defaultCollapsed: boolean;
    collapsedWidth: number | string;
    selectedKeys: string;
    defaultSelectedKeys: string;
    openKeys: string[];
    defaultOpenKeys: string[];
    levelIndent: number;
    autoOpen: boolean;
    tooltipProps: import('..').TooltipProps;
    autoOpenSelected: boolean;
    autoScrollIntoView: boolean;
    showCollapseButton: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    menuRef: HTMLDivElement;
}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
