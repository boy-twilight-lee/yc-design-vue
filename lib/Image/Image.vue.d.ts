import { ImageProps, ImageSlots } from './type';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Readonly<ImageSlots> & ImageSlots;
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<ImageProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    "update:previewVisible": (visible: boolean) => any;
    "preview-visible-change": (visible: boolean) => any;
}, string, import('vue').PublicProps, Readonly<ImageProps> & Readonly<{
    "onUpdate:previewVisible"?: ((visible: boolean) => any) | undefined;
    "onPreview-visible-change"?: ((visible: boolean) => any) | undefined;
}>, {
    title: string;
    description: string;
    src: string;
    hideFooter: import('./type').HideFooter;
    footerPosition: import('./type').FooterPostion;
    showLoader: boolean;
    preview: boolean;
    previewVisible: boolean;
    defaultPreviewVisible: boolean;
    previewProps: import('./type').ImagePreviewProps;
    footerClass: import('../_shared/type').ClassName;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
