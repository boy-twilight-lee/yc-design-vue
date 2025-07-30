import { CSSProperties } from 'vue';
import { DrawerProps, DrawerSlots } from './type';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Readonly<DrawerSlots> & DrawerSlots;
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<DrawerProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    cancel: (event: MouseEvent | KeyboardEvent) => any;
    close: () => any;
    open: () => any;
    "update:visible": (value: boolean) => any;
    ok: () => any;
    "before-open": () => any;
    "before-close": () => any;
}, string, import('vue').PublicProps, Readonly<DrawerProps> & Readonly<{
    onCancel?: ((event: MouseEvent | KeyboardEvent) => any) | undefined;
    onClose?: (() => any) | undefined;
    onOpen?: (() => any) | undefined;
    "onUpdate:visible"?: ((value: boolean) => any) | undefined;
    onOk?: (() => any) | undefined;
    "onBefore-open"?: (() => any) | undefined;
    "onBefore-close"?: (() => any) | undefined;
}>, {
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
    okButtonProps: import('../Button').ButtonProps;
    cancelButtonProps: import('../Button').ButtonProps;
    escToClose: boolean;
    onBeforeCancel: import('..').OnBeforeCancel;
    onBeforeOk: import('..').OnBeforeOk;
    placement: import('./type').DrawerPlacement;
    drawerStyle: CSSProperties;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
