import { RadioGroupProps, RadioGroupSlots } from './type';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Readonly<RadioGroupSlots> & RadioGroupSlots;
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<RadioGroupProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    change: (value: import('./type').RadioValue) => any;
    "update:modelValue": (value: import('./type').RadioValue) => any;
}, string, import('vue').PublicProps, Readonly<RadioGroupProps> & Readonly<{
    onChange?: ((value: import('./type').RadioValue) => any) | undefined;
    "onUpdate:modelValue"?: ((value: import('./type').RadioValue) => any) | undefined;
}>, {
    size: import('..').Size;
    disabled: boolean;
    type: import('./type').RadioType;
    direction: import('..').Direction;
    modelValue: import('./type').RadioValue;
    defaultValue: import('./type').RadioValue;
    options: import('./type').RadioOption[];
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
