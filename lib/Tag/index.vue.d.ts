import { TagProps, TagSlots } from './type';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Readonly<TagSlots> & TagSlots;
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<TagProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    close: (ev: MouseEvent, value?: string | undefined) => any;
    "update:visible": (value: boolean) => any;
    "update:checked": (value: boolean) => any;
    check: (value: boolean, ev: MouseEvent) => any;
}, string, import('vue').PublicProps, Readonly<TagProps> & Readonly<{
    onClose?: ((ev: MouseEvent, value?: string | undefined) => any) | undefined;
    "onUpdate:visible"?: ((value: boolean) => any) | undefined;
    "onUpdate:checked"?: ((value: boolean) => any) | undefined;
    onCheck?: ((value: boolean, ev: MouseEvent) => any) | undefined;
}>, {
    size: import('./type').TagSize;
    loading: boolean;
    visible: boolean;
    color: string;
    nowrap: boolean;
    bordered: boolean;
    defaultVisible: boolean;
    closable: boolean;
    checkable: boolean;
    checked: boolean;
    defaultChecked: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
