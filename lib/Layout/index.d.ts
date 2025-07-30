import { App } from 'vue';
import { default as _Layout } from './Layout.vue';
import { default as _LayoutHeader } from './LayoutHeader.vue';
import { default as _LayoutFooter } from './LayoutFooter.vue';
import { default as _LayoutContent } from './LayoutContent.vue';
import { default as _LayoutSider } from './LayoutSider.vue';
export type LayoutInstance = InstanceType<typeof _Layout>;
export type LayoutHeaderInstance = InstanceType<typeof _LayoutHeader>;
export type LayoutFooterInstance = InstanceType<typeof _LayoutFooter>;
export type LayoutContentInstance = InstanceType<typeof _LayoutContent>;
export type LayoutSiderInstance = InstanceType<typeof _LayoutSider>;
export * from './type';
declare const Layout: {
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./type').LayoutProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {
        hasSider: boolean;
    }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLElement, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('./type').LayoutProps> & Readonly<{}>, {}, {}, {}, {}, {
        hasSider: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('./type').LayoutProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
    hasSider: boolean;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: Readonly<import('./type').LayoutSlots> & import('./type').LayoutSlots;
}) & {
    content: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {}, true, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLElement, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, {}>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: Readonly<import('./type').LayoutContentSlots> & import('./type').LayoutContentSlots;
    });
    header: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {}, true, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLElement, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, {}>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: Readonly<import('./type').LayoutHeaderSlots> & import('./type').LayoutHeaderSlots;
    });
    footer: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {}, true, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLElement, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, {}>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: Readonly<import('./type').LayoutFooterSlots> & import('./type').LayoutFooterSlots;
    });
    sider: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./type').LayoutSiderProps> & Readonly<{
            onCollapse?: ((collapsed: boolean, type: "clickTrigger" | "responsive") => any) | undefined;
            onBreakpoint?: ((collapsed: boolean) => any) | undefined;
            "onUpdate:collapsed"?: ((collapsed: boolean) => any) | undefined;
        }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
            collapse: (collapsed: boolean, type: "clickTrigger" | "responsive") => any;
            breakpoint: (collapsed: boolean) => any;
            "update:collapsed": (collapsed: boolean) => any;
        }, import('vue').PublicProps, {
            width: number;
            collapsed: boolean;
            breakpoint: import('..').BreakpointName;
            theme: import('..').Theme;
            hideTrigger: boolean;
            defaultCollapsed: boolean;
            collapsible: boolean;
            collapsedWidth: number;
            reverseArrow: boolean;
            resizeDirections: import('./type').ResizeDirections;
        }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import('./type').LayoutSiderProps> & Readonly<{
            onCollapse?: ((collapsed: boolean, type: "clickTrigger" | "responsive") => any) | undefined;
            onBreakpoint?: ((collapsed: boolean) => any) | undefined;
            "onUpdate:collapsed"?: ((collapsed: boolean) => any) | undefined;
        }>, {}, {}, {}, {}, {
            width: number;
            collapsed: boolean;
            breakpoint: import('..').BreakpointName;
            theme: import('..').Theme;
            hideTrigger: boolean;
            defaultCollapsed: boolean;
            collapsible: boolean;
            collapsedWidth: number;
            reverseArrow: boolean;
            resizeDirections: import('./type').ResizeDirections;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<import('./type').LayoutSiderProps> & Readonly<{
        onCollapse?: ((collapsed: boolean, type: "clickTrigger" | "responsive") => any) | undefined;
        onBreakpoint?: ((collapsed: boolean) => any) | undefined;
        "onUpdate:collapsed"?: ((collapsed: boolean) => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
        collapse: (collapsed: boolean, type: "clickTrigger" | "responsive") => any;
        breakpoint: (collapsed: boolean) => any;
        "update:collapsed": (collapsed: boolean) => any;
    }, string, {
        width: number;
        collapsed: boolean;
        breakpoint: import('..').BreakpointName;
        theme: import('..').Theme;
        hideTrigger: boolean;
        defaultCollapsed: boolean;
        collapsible: boolean;
        collapsedWidth: number;
        reverseArrow: boolean;
        resizeDirections: import('./type').ResizeDirections;
    }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: Readonly<import('./type').LayoutSiderSlots> & import('./type').LayoutSiderSlots;
    });
    install: (app: App) => void;
};
export { _LayoutHeader as LayoutHeader, _LayoutSider as LayoutSider, _LayoutFooter as LayoutFooter, _LayoutContent as LayoutContent, };
declare module 'vue' {
    interface GlobalComponents {
        YcLayout: typeof Layout;
        YcLayoutHeader: typeof _LayoutHeader;
        YcLayoutFooter: typeof _LayoutFooter;
        YcLayoutContent: typeof _LayoutContent;
        YcLayoutSider: typeof _LayoutSider;
    }
}
export default Layout;
