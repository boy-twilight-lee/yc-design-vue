import { ImagePreviewActionProps, ImagePreviewActionSlots } from './type';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Readonly<ImagePreviewActionSlots> & ImagePreviewActionSlots;
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<ImagePreviewActionProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    click: (ev: MouseEvent) => any;
    contextmenu: (ev: MouseEvent) => any;
    dblclick: (ev: MouseEvent) => any;
}, string, import('vue').PublicProps, Readonly<ImagePreviewActionProps> & Readonly<{
    onClick?: ((ev: MouseEvent) => any) | undefined;
    onContextmenu?: ((ev: MouseEvent) => any) | undefined;
    onDblclick?: ((ev: MouseEvent) => any) | undefined;
}>, {
    disabled: boolean;
    name: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
