import { CheckboxProps, CheckboxSlots } from './type';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Readonly<CheckboxSlots> & CheckboxSlots;
    refs: {};
    rootEl: HTMLLabelElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<CheckboxProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    change: (value: boolean, ev: Event) => any;
    "update:modelValue": (value: boolean) => any;
}, string, import('vue').PublicProps, Readonly<CheckboxProps> & Readonly<{
    onChange?: ((value: boolean, ev: Event) => any) | undefined;
    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
}>, {
    disabled: boolean;
    value: import('./type').CheckboxValue;
    defaultChecked: boolean;
    modelValue: boolean;
    indeterminate: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLLabelElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
