import { CheckboxGroupProps, CheckboxGroupSlots } from './type';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Readonly<CheckboxGroupSlots> & CheckboxGroupSlots;
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<CheckboxGroupProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    change: (value: import('./type').CheckboxValue[]) => any;
    "update:modelValue": (value: import('./type').CheckboxValue[]) => any;
}, string, import('vue').PublicProps, Readonly<CheckboxGroupProps> & Readonly<{
    onChange?: ((value: import('./type').CheckboxValue[]) => any) | undefined;
    "onUpdate:modelValue"?: ((value: import('./type').CheckboxValue[]) => any) | undefined;
}>, {
    disabled: boolean;
    direction: import('..').Direction;
    modelValue: import('./type').CheckboxValue[];
    defaultValue: import('./type').CheckboxValue[];
    options: (import('./type').CheckboxOption | import('./type').CheckboxValue)[];
    max: number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
