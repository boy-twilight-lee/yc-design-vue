import { SwitchProps, SwitchSlots, SwitchValue } from './type';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Readonly<SwitchSlots> & SwitchSlots;
    refs: {};
    rootEl: HTMLButtonElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<SwitchProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    change: (value: SwitchValue, ev: Event) => any;
    focus: (ev: FocusEvent) => any;
    blur: (ev: FocusEvent) => any;
    "update:modelValue": (value: SwitchValue) => any;
}, string, import('vue').PublicProps, Readonly<SwitchProps> & Readonly<{
    onChange?: ((value: SwitchValue, ev: Event) => any) | undefined;
    onFocus?: ((ev: FocusEvent) => any) | undefined;
    onBlur?: ((ev: FocusEvent) => any) | undefined;
    "onUpdate:modelValue"?: ((value: SwitchValue) => any) | undefined;
}>, {
    size: import('./type').SwitchSize;
    disabled: boolean;
    loading: boolean;
    type: import('./type').SwitchType;
    defaultChecked: SwitchValue;
    modelValue: SwitchValue;
    checkedValue: SwitchValue;
    uncheckedValue: SwitchValue;
    checkedColor: string;
    uncheckedColor: string;
    checkedText: string;
    uncheckedText: string;
    beforeChange: import('./type').BeforeChange;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLButtonElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
