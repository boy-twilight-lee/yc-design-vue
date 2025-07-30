import { ImagePreviewProps, ImagePreviewSlots } from './type';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Readonly<ImagePreviewSlots> & ImagePreviewSlots;
    refs: {
        imageRef: HTMLImageElement;
    };
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<ImagePreviewProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    close: () => any;
    "update:visible": (value: boolean) => any;
}, string, import('vue').PublicProps, Readonly<ImagePreviewProps> & Readonly<{
    onClose?: (() => any) | undefined;
    "onUpdate:visible"?: ((value: boolean) => any) | undefined;
}>, {
    popupContainer: import('..').PopupContainer;
    visible: boolean;
    src: string;
    defaultVisible: boolean;
    closable: boolean;
    maskClosable: boolean;
    escToClose: boolean;
    actionsLayout: string[];
    wheelZoom: boolean;
    keyboard: boolean;
    defaultScale: number;
    zoomRate: number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    imageRef: HTMLImageElement;
}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
