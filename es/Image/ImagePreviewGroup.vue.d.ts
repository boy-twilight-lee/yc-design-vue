import { ImagePreviewGroupProps, ImagePreviewGroupSlots } from './type';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Readonly<ImagePreviewGroupSlots> & ImagePreviewGroupSlots;
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<ImagePreviewGroupProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    change: (index: number) => any;
    "update:visible": (value: boolean) => any;
    "update:current": (index: number) => any;
    "visible-change": (value: boolean) => any;
}, string, import('vue').PublicProps, Readonly<ImagePreviewGroupProps> & Readonly<{
    onChange?: ((index: number) => any) | undefined;
    "onUpdate:visible"?: ((value: boolean) => any) | undefined;
    "onUpdate:current"?: ((index: number) => any) | undefined;
    "onVisible-change"?: ((value: boolean) => any) | undefined;
}>, {
    popupContainer: import('..').PopupContainer;
    infinite: boolean;
    visible: boolean;
    defaultVisible: boolean;
    closable: boolean;
    current: number;
    defaultCurrent: number;
    maskClosable: boolean;
    escToClose: boolean;
    actionsLayout: string[];
    wheelZoom: boolean;
    keyboard: boolean;
    defaultScale: number;
    zoomRate: number;
    srcList: string[];
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
