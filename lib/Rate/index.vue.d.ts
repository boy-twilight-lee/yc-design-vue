import { RateProps, RateSlots } from './type';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Readonly<RateSlots> & RateSlots;
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<RateProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    change: (value: number) => any;
    "update:modelValue": (value: number) => any;
    "hover-change": (value: number) => any;
}, string, import('vue').PublicProps, Readonly<RateProps> & Readonly<{
    onChange?: ((value: number) => any) | undefined;
    "onUpdate:modelValue"?: ((value: number) => any) | undefined;
    "onHover-change"?: ((value: number) => any) | undefined;
}>, {
    disabled: boolean;
    color: string | Record<number, string>;
    modelValue: number;
    defaultValue: number;
    readonly: boolean;
    count: number;
    allowHalf: boolean;
    grading: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
