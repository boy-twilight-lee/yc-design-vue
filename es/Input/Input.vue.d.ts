import { InputProps, InputSlots } from './type';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Readonly<InputSlots> & InputSlots;
    refs: {
        inputRef: HTMLInputElement;
    };
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<InputProps, {
    focus(): void;
    blur(): void;
    getInputRef(): HTMLInputElement;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    [x: string]: any;
} & {
    [x: string]: any;
}, string, import('vue').PublicProps, Readonly<InputProps> & Readonly<{
    [x: `on${Capitalize<any>}`]: ((...args: any) => any) | undefined;
}>, {
    size: import('..').Size;
    disabled: boolean;
    error: boolean;
    visibility: boolean;
    modelValue: string;
    defaultValue: string;
    placeholder: string;
    maxLength: import('./type').MaxLength;
    showWordLimit: boolean;
    allowClear: boolean;
    readonly: boolean;
    wordLength: import('./type').WordLength;
    wordSlice: import('./type').WordSlice;
    inputAttrs: import('../_shared/type').ObjectData;
    isPassword: boolean;
    defaultVisibility: boolean;
    invisibleButton: boolean;
    showInput: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    inputRef: HTMLInputElement;
}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
