import { CSSProperties } from 'vue';
import { ModalProps, ModalSlots } from './type';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Readonly<ModalSlots> & ModalSlots;
    refs: {
        modalRef: HTMLDivElement;
        headerRef: HTMLDivElement;
    };
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<ModalProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    cancel: (ev: MouseEvent | KeyboardEvent) => any;
    close: () => any;
    open: () => any;
    "update:visible": (value: boolean) => any;
    ok: () => any;
    "before-open": () => any;
    "before-close": () => any;
}, string, import('vue').PublicProps, Readonly<ModalProps> & Readonly<{
    onCancel?: ((ev: MouseEvent | KeyboardEvent) => any) | undefined;
    onClose?: (() => any) | undefined;
    onOpen?: (() => any) | undefined;
    "onUpdate:visible"?: ((value: boolean) => any) | undefined;
    onOk?: (() => any) | undefined;
    "onBefore-open"?: (() => any) | undefined;
    "onBefore-close"?: (() => any) | undefined;
}>, {
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
    bodyStyle: CSSProperties;
    titleAlign: import('./type').ModalTitleAlign;
    alignCenter: boolean;
    maskClosable: boolean;
    hideCancel: boolean;
    okText: string;
    cancelText: string;
    okLoading: boolean;
    okButtonProps: import('../Button').ButtonProps;
    cancelButtonProps: import('../Button').ButtonProps;
    maskStyle: CSSProperties;
    modalClass: import('../_shared/type').ClassName;
    modalStyle: CSSProperties;
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
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    modalRef: HTMLDivElement;
    headerRef: HTMLDivElement;
}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
