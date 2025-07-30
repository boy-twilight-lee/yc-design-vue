import { ButtonProps, ButtonSlots } from './type';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Readonly<ButtonSlots> & ButtonSlots;
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<ButtonProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    click: (event: MouseEvent) => any;
    contextmenu: (event: MouseEvent) => any;
    dblclick: (event: MouseEvent) => any;
    mousedown: (event: MouseEvent) => any;
    mouseup: (event: MouseEvent) => any;
}, string, import('vue').PublicProps, Readonly<ButtonProps> & Readonly<{
    onClick?: ((event: MouseEvent) => any) | undefined;
    onContextmenu?: ((event: MouseEvent) => any) | undefined;
    onDblclick?: ((event: MouseEvent) => any) | undefined;
    onMousedown?: ((event: MouseEvent) => any) | undefined;
    onMouseup?: ((event: MouseEvent) => any) | undefined;
}>, {
    size: import('..').Size;
    disabled: boolean;
    loading: boolean;
    type: import('./type').ButtonType;
    href: string;
    shape: import('./type').ButtonShape;
    status: import('./type').ButtonStatus;
    long: boolean;
    htmlType: import('./type').ButtonHtmlType;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
