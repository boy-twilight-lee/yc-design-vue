import { App } from 'vue';
import { default as _Link } from './index.vue';
export type LinkInstance = InstanceType<typeof _Link>;
export * from './type';
declare const Link: {
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./type').LinkProps> & Readonly<{
        onClick?: ((event: MouseEvent) => any) | undefined;
        onContextmenu?: ((event: MouseEvent) => any) | undefined;
        onDblclick?: ((event: MouseEvent) => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
        click: (event: MouseEvent) => any;
        contextmenu: (event: MouseEvent) => any;
        dblclick: (event: MouseEvent) => any;
    }, import('vue').PublicProps, {
        disabled: boolean;
        loading: boolean;
        icon: boolean;
        href: string;
        status: import('./type').LinkStatus;
        hoverable: boolean;
    }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLAnchorElement, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('./type').LinkProps> & Readonly<{
        onClick?: ((event: MouseEvent) => any) | undefined;
        onContextmenu?: ((event: MouseEvent) => any) | undefined;
        onDblclick?: ((event: MouseEvent) => any) | undefined;
    }>, {}, {}, {}, {}, {
        disabled: boolean;
        loading: boolean;
        icon: boolean;
        href: string;
        status: import('./type').LinkStatus;
        hoverable: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('./type').LinkProps> & Readonly<{
    onClick?: ((event: MouseEvent) => any) | undefined;
    onContextmenu?: ((event: MouseEvent) => any) | undefined;
    onDblclick?: ((event: MouseEvent) => any) | undefined;
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    click: (event: MouseEvent) => any;
    contextmenu: (event: MouseEvent) => any;
    dblclick: (event: MouseEvent) => any;
}, string, {
    disabled: boolean;
    loading: boolean;
    icon: boolean;
    href: string;
    status: import('./type').LinkStatus;
    hoverable: boolean;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: Readonly<import('./type').LinkSlots> & import('./type').LinkSlots;
}) & {
    install: (app: App) => void;
};
declare module 'vue' {
    interface GlobalComponents {
        YcLink: typeof Link;
    }
}
export default Link;
