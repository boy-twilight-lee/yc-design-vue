import { App } from 'vue';
import { ModalConfig } from './type';
import { default as _Modal } from './Modal.vue';
export type ModalInstance = InstanceType<typeof _Modal>;
export * from './type';
declare const Modal: {
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./type').ModalProps> & Readonly<{
        onCancel?: ((ev: MouseEvent | KeyboardEvent) => any) | undefined;
        onClose?: (() => any) | undefined;
        onOpen?: (() => any) | undefined;
        "onUpdate:visible"?: ((value: boolean) => any) | undefined;
        onOk?: (() => any) | undefined;
        "onBefore-open"?: (() => any) | undefined;
        "onBefore-close"?: (() => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
        cancel: (ev: MouseEvent | KeyboardEvent) => any;
        close: () => any;
        open: () => any;
        "update:visible": (value: boolean) => any;
        ok: () => any;
        "before-open": () => any;
        "before-close": () => any;
    }, import('vue').PublicProps, {
        top: number;
        unmountOnClose: boolean;
        popupContainer: import('..').PopupContainer;
        renderToBody: boolean;
        width: number | string;
        visible: boolean;
        footer: boolean;
        title: string;
        mask: boolean;
        defaultVisible: boolean;
        closable: boolean;
        bodyStyle: import('vue').CSSProperties;
        titleAlign: import('./type').ModalTitleAlign;
        alignCenter: boolean;
        maskClosable: boolean;
        hideCancel: boolean;
        okText: string;
        cancelText: string;
        okLoading: boolean;
        okButtonProps: import('..').ButtonProps;
        cancelButtonProps: import('..').ButtonProps;
        maskStyle: import('vue').CSSProperties;
        modalClass: import('../_shared/type').ClassName;
        modalStyle: import('vue').CSSProperties;
        escToClose: boolean;
        draggable: boolean;
        fullscreen: boolean;
        maskAnimationName: string;
        modalAnimationName: string;
        bodyClass: import('../_shared/type').ClassName;
        hideTitle: boolean;
        simple: boolean;
        onBeforeCancel: import('./type').OnBeforeCancel;
        onBeforeOk: import('./type').OnBeforeOk;
    }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {
        modalRef: HTMLDivElement;
        headerRef: HTMLDivElement;
    }, any, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('./type').ModalProps> & Readonly<{
        onCancel?: ((ev: MouseEvent | KeyboardEvent) => any) | undefined;
        onClose?: (() => any) | undefined;
        onOpen?: (() => any) | undefined;
        "onUpdate:visible"?: ((value: boolean) => any) | undefined;
        onOk?: (() => any) | undefined;
        "onBefore-open"?: (() => any) | undefined;
        "onBefore-close"?: (() => any) | undefined;
    }>, {}, {}, {}, {}, {
        top: number;
        unmountOnClose: boolean;
        popupContainer: import('..').PopupContainer;
        renderToBody: boolean;
        width: number | string;
        visible: boolean;
        footer: boolean;
        title: string;
        mask: boolean;
        defaultVisible: boolean;
        closable: boolean;
        bodyStyle: import('vue').CSSProperties;
        titleAlign: import('./type').ModalTitleAlign;
        alignCenter: boolean;
        maskClosable: boolean;
        hideCancel: boolean;
        okText: string;
        cancelText: string;
        okLoading: boolean;
        okButtonProps: import('..').ButtonProps;
        cancelButtonProps: import('..').ButtonProps;
        maskStyle: import('vue').CSSProperties;
        modalClass: import('../_shared/type').ClassName;
        modalStyle: import('vue').CSSProperties;
        escToClose: boolean;
        draggable: boolean;
        fullscreen: boolean;
        maskAnimationName: string;
        modalAnimationName: string;
        bodyClass: import('../_shared/type').ClassName;
        hideTitle: boolean;
        simple: boolean;
        onBeforeCancel: import('./type').OnBeforeCancel;
        onBeforeOk: import('./type').OnBeforeOk;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('./type').ModalProps> & Readonly<{
    onCancel?: ((ev: MouseEvent | KeyboardEvent) => any) | undefined;
    onClose?: (() => any) | undefined;
    onOpen?: (() => any) | undefined;
    "onUpdate:visible"?: ((value: boolean) => any) | undefined;
    onOk?: (() => any) | undefined;
    "onBefore-open"?: (() => any) | undefined;
    "onBefore-close"?: (() => any) | undefined;
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    cancel: (ev: MouseEvent | KeyboardEvent) => any;
    close: () => any;
    open: () => any;
    "update:visible": (value: boolean) => any;
    ok: () => any;
    "before-open": () => any;
    "before-close": () => any;
}, string, {
    top: number;
    unmountOnClose: boolean;
    popupContainer: import('..').PopupContainer;
    renderToBody: boolean;
    width: number | string;
    visible: boolean;
    footer: boolean;
    title: string;
    mask: boolean;
    defaultVisible: boolean;
    closable: boolean;
    bodyStyle: import('vue').CSSProperties;
    titleAlign: import('./type').ModalTitleAlign;
    alignCenter: boolean;
    maskClosable: boolean;
    hideCancel: boolean;
    okText: string;
    cancelText: string;
    okLoading: boolean;
    okButtonProps: import('..').ButtonProps;
    cancelButtonProps: import('..').ButtonProps;
    maskStyle: import('vue').CSSProperties;
    modalClass: import('../_shared/type').ClassName;
    modalStyle: import('vue').CSSProperties;
    escToClose: boolean;
    draggable: boolean;
    fullscreen: boolean;
    maskAnimationName: string;
    modalAnimationName: string;
    bodyClass: import('../_shared/type').ClassName;
    hideTitle: boolean;
    simple: boolean;
    onBeforeCancel: import('./type').OnBeforeCancel;
    onBeforeOk: import('./type').OnBeforeOk;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: Readonly<import('./type').ModalSlots> & import('./type').ModalSlots;
}) & {
    open: (props: ModalConfig) => import('./type').ModalReturn;
    success: (props: ModalConfig) => import('./type').ModalReturn;
    error: (props: ModalConfig) => import('./type').ModalReturn;
    warning: (props: ModalConfig) => import('./type').ModalReturn;
    info: (props: ModalConfig) => import('./type').ModalReturn;
    confirm: (props: ModalConfig) => import('vm').ModuleStatus;
    install: (app: App) => void;
};
declare module 'vue' {
    interface GlobalComponents {
        YcModal: typeof Modal;
    }
    interface ComponentCustomProperties {
        $modal: typeof Modal;
    }
}
export default Modal;
