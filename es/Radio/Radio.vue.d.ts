import { RadioProps, RadioSlots, RadioValue } from './type';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Readonly<RadioSlots> & RadioSlots;
    refs: {};
    rootEl: HTMLLabelElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<RadioProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    change: (value: RadioValue, ev: Event) => any;
    "update:modelValue": (value: boolean) => any;
}, string, import('vue').PublicProps, Readonly<RadioProps> & Readonly<{
    onChange?: ((value: RadioValue, ev: Event) => any) | undefined;
    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
}>, {
    disabled: boolean;
    value: RadioValue;
    type: import('./type').RadioType;
    defaultChecked: boolean;
    modelValue: RadioValue;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLLabelElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
