import { App } from 'vue';
import { default as _Drawer } from './Drawer.vue';
export type DrawerInstance = InstanceType<typeof _Drawer>;
export * from './type';
declare const Drawer: {
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./type').DrawerProps> & Readonly<{
        onCancel?: ((event: MouseEvent | KeyboardEvent) => any) | undefined;
        onClose?: (() => any) | undefined;
        onOpen?: (() => any) | undefined;
        "onUpdate:visible"?: ((value: boolean) => any) | undefined;
        onOk?: (() => any) | undefined;
        "onBefore-open"?: (() => any) | undefined;
        "onBefore-close"?: (() => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
        cancel: (event: MouseEvent | KeyboardEvent) => any;
        close: () => any;
        open: () => any;
        "update:visible": (value: boolean) => any;
        ok: () => any;
        "before-open": () => any;
        "before-close": () => any;
    }, import('vue').PublicProps, {
        unmountOnClose: boolean;
        popupContainer: import('..').PopupContainer;
        renderToBody: boolean;
        width: number | string;
        height: number | string;
        visible: boolean;
        footer: boolean;
        header: boolean;
        title: string;
        mask: boolean;
        defaultVisible: boolean;
        closable: boolean;
        maskClosable: boolean;
        hideCancel: boolean;
        okText: string;
        cancelText: string;
        okLoading: boolean;
        okButtonProps: import('..').ButtonProps;
        cancelButtonProps: import('..').ButtonProps;
        escToClose: boolean;
        onBeforeCancel: import('..').OnBeforeCancel;
        onBeforeOk: import('..').OnBeforeOk;
        placement: import('./type').DrawerPlacement;
        drawerStyle: import('vue').CSSProperties;
    }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('./type').DrawerProps> & Readonly<{
        onCancel?: ((event: MouseEvent | KeyboardEvent) => any) | undefined;
        onClose?: (() => any) | undefined;
        onOpen?: (() => any) | undefined;
        "onUpdate:visible"?: ((value: boolean) => any) | undefined;
        onOk?: (() => any) | undefined;
        "onBefore-open"?: (() => any) | undefined;
        "onBefore-close"?: (() => any) | undefined;
    }>, {}, {}, {}, {}, {
        unmountOnClose: boolean;
        popupContainer: import('..').PopupContainer;
        renderToBody: boolean;
        width: number | string;
        height: number | string;
        visible: boolean;
        footer: boolean;
        header: boolean;
        title: string;
        mask: boolean;
        defaultVisible: boolean;
        closable: boolean;
        maskClosable: boolean;
        hideCancel: boolean;
        okText: string;
        cancelText: string;
        okLoading: boolean;
        okButtonProps: import('..').ButtonProps;
        cancelButtonProps: import('..').ButtonProps;
        escToClose: boolean;
        onBeforeCancel: import('..').OnBeforeCancel;
        onBeforeOk: import('..').OnBeforeOk;
        placement: import('./type').DrawerPlacement;
        drawerStyle: import('vue').CSSProperties;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('./type').DrawerProps> & Readonly<{
    onCancel?: ((event: MouseEvent | KeyboardEvent) => any) | undefined;
    onClose?: (() => any) | undefined;
    onOpen?: (() => any) | undefined;
    "onUpdate:visible"?: ((value: boolean) => any) | undefined;
    onOk?: (() => any) | undefined;
    "onBefore-open"?: (() => any) | undefined;
    "onBefore-close"?: (() => any) | undefined;
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    cancel: (event: MouseEvent | KeyboardEvent) => any;
    close: () => any;
    open: () => any;
    "update:visible": (value: boolean) => any;
    ok: () => any;
    "before-open": () => any;
    "before-close": () => any;
}, string, {
    unmountOnClose: boolean;
    popupContainer: import('..').PopupContainer;
    renderToBody: boolean;
    width: number | string;
    height: number | string;
    visible: boolean;
    footer: boolean;
    header: boolean;
    title: string;
    mask: boolean;
    defaultVisible: boolean;
    closable: boolean;
    maskClosable: boolean;
    hideCancel: boolean;
    okText: string;
    cancelText: string;
    okLoading: boolean;
    okButtonProps: import('..').ButtonProps;
    cancelButtonProps: import('..').ButtonProps;
    escToClose: boolean;
    onBeforeCancel: import('..').OnBeforeCancel;
    onBeforeOk: import('..').OnBeforeOk;
    placement: import('./type').DrawerPlacement;
    drawerStyle: import('vue').CSSProperties;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: Readonly<import('./type').DrawerSlots> & import('./type').DrawerSlots;
}) & {
    install: (app: App) => void;
};
declare module 'vue' {
    interface GlobalComponents {
        YcDrawer: typeof Drawer;
    }
    interface ComponentCustomProperties {
        $drawer: typeof Drawer;
    }
}
export default Drawer;
