import { InputTagProps, InputTagValue, InputTagSlots } from './type';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Readonly<InputTagSlots> & InputTagSlots;
    refs: {
        mirrorRef: HTMLDivElement;
        inputRef: HTMLInputElement;
    };
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<InputTagProps, {
    focus(): void;
    blur(): void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    [x: string]: any;
} & {
    [x: string]: any;
}, string, import('vue').PublicProps, Readonly<InputTagProps> & Readonly<{
    [x: `on${Capitalize<any>}`]: ((...args: any) => any) | undefined;
}>, {
    size: import('../_shared/type').Size;
    disabled: boolean;
    error: boolean;
    modelValue: InputTagValue;
    defaultValue: InputTagValue;
    placeholder: string;
    allowClear: boolean;
    readonly: boolean;
    inputValue: string;
    defaultInputValue: string;
    fieldNames: Record<string, string>;
    allowCreate: boolean;
    maxTagCount: number;
    tagNowrap: boolean;
    retainInputValue: import('./type').InputRetainValue;
    uniqueValue: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    mirrorRef: HTMLDivElement;
    inputRef: HTMLInputElement;
}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
