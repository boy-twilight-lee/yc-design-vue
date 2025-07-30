import { App } from 'vue';
import { default as _Menu } from './Menu.vue';
import { default as _MenuItem } from './MenuItem.vue';
import { default as _SubMenu } from './SubMenu.vue';
import { default as _MenuItemGroup } from './MenuItemGroup.vue';
export type MenuInstance = InstanceType<typeof _Menu>;
export type MenuItemInstance = InstanceType<typeof _MenuItem>;
export type SubMenuInstance = InstanceType<typeof _SubMenu>;
export type MenuItemGroupInstance = InstanceType<typeof _MenuItemGroup>;
export * from './type';
declare const Menu: {
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./type').MenuProps> & Readonly<{
        onCollapse?: ((collapsed: boolean, type: "clickTrigger" | "responsive") => any) | undefined;
        "onUpdate:collapsed"?: ((value: boolean) => any) | undefined;
        "onUpdate:selectedKeys"?: ((value: string) => any) | undefined;
        "onUpdate:openKeys"?: ((value: string) => any) | undefined;
        "onMenu-item-click"?: ((key: string) => any) | undefined;
        "onSub-menu-click"?: ((key: string, openKeys: string[]) => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
        collapse: (collapsed: boolean, type: "clickTrigger" | "responsive") => any;
        "update:collapsed": (value: boolean) => any;
        "update:selectedKeys": (value: string) => any;
        "update:openKeys": (value: string) => any;
        "menu-item-click": (key: string) => any;
        "sub-menu-click": (key: string, openKeys: string[]) => any;
    }, import('vue').PublicProps, {
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
    }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {
        menuRef: HTMLDivElement;
    }, HTMLDivElement, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('./type').MenuProps> & Readonly<{
        onCollapse?: ((collapsed: boolean, type: "clickTrigger" | "responsive") => any) | undefined;
        "onUpdate:collapsed"?: ((value: boolean) => any) | undefined;
        "onUpdate:selectedKeys"?: ((value: string) => any) | undefined;
        "onUpdate:openKeys"?: ((value: string) => any) | undefined;
        "onMenu-item-click"?: ((key: string) => any) | undefined;
        "onSub-menu-click"?: ((key: string, openKeys: string[]) => any) | undefined;
    }>, {}, {}, {}, {}, {
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
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('./type').MenuProps> & Readonly<{
    onCollapse?: ((collapsed: boolean, type: "clickTrigger" | "responsive") => any) | undefined;
    "onUpdate:collapsed"?: ((value: boolean) => any) | undefined;
    "onUpdate:selectedKeys"?: ((value: string) => any) | undefined;
    "onUpdate:openKeys"?: ((value: string) => any) | undefined;
    "onMenu-item-click"?: ((key: string) => any) | undefined;
    "onSub-menu-click"?: ((key: string, openKeys: string[]) => any) | undefined;
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    collapse: (collapsed: boolean, type: "clickTrigger" | "responsive") => any;
    "update:collapsed": (value: boolean) => any;
    "update:selectedKeys": (value: string) => any;
    "update:openKeys": (value: string) => any;
    "menu-item-click": (key: string) => any;
    "sub-menu-click": (key: string, openKeys: string[]) => any;
}, string, {
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
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: Readonly<import('./type').MenuSlots> & import('./type').MenuSlots;
}) & {
    item: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./type').MenuItemProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {
            disabled: boolean;
            path: string;
        }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {
            menuItemRef: HTMLDivElement;
        }, any, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import('./type').MenuItemProps> & Readonly<{}>, {}, {}, {}, {}, {
            disabled: boolean;
            path: string;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<import('./type').MenuItemProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
        disabled: boolean;
        path: string;
    }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: Readonly<import('./type').MenuItemSlots> & import('./type').MenuItemSlots;
    });
    submenu: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./type').SubMenuProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {
            title: string;
            path: string;
            popupMaxHeight: import('./type').PopupMaxHeight;
            selectable: boolean;
            popup: boolean;
        }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLDivElement, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import('./type').SubMenuProps> & Readonly<{}>, {}, {}, {}, {}, {
            title: string;
            path: string;
            popupMaxHeight: import('./type').PopupMaxHeight;
            selectable: boolean;
            popup: boolean;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<import('./type').SubMenuProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
        title: string;
        path: string;
        popupMaxHeight: import('./type').PopupMaxHeight;
        selectable: boolean;
        popup: boolean;
    }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: Readonly<import('./type').SubMenuSlots> & import('./type').SubMenuSlots;
    });
    group: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./type').MenuItemGroupProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {
            title: string;
        }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLDivElement, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import('./type').MenuItemGroupProps> & Readonly<{}>, {}, {}, {}, {}, {
            title: string;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<import('./type').MenuItemGroupProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
        title: string;
    }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: Readonly<import('./type').MenuItemGroupSlots> & import('./type').MenuItemGroupSlots;
    });
    install: (app: App) => void;
};
export { _MenuItem as MenuItem, _MenuItemGroup as MenuItemGroup, _SubMenu as SubMenu, };
declare module 'vue' {
    interface GlobalComponents {
        YcMenu: typeof Menu;
        YcSubMenu: typeof _SubMenu;
        YcMenuItem: typeof _MenuItem;
        YcMenuItemGroup: typeof _MenuItemGroup;
    }
}
export default Menu;
