import { TextareaProps } from './type';
declare const _default: import('vue').DefineComponent<TextareaProps, {
    focus(): void;
    blur(): void;
    getInputRef(): HTMLTextAreaElement;
    getMirrorRef(): HTMLDivElement;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    change: (value: string, ev: Event) => any;
    focus: (ev: FocusEvent) => any;
    clear: (ev: MouseEvent) => any;
    blur: (ev: FocusEvent) => any;
    input: (value: string, ev: Event) => any;
    keydown: (ev: KeyboardEvent) => any;
    "update:modelValue": (value: string) => any;
}, string, import('vue').PublicProps, Readonly<TextareaProps> & Readonly<{
    onChange?: ((value: string, ev: Event) => any) | undefined;
    onFocus?: ((ev: FocusEvent) => any) | undefined;
    onClear?: ((ev: MouseEvent) => any) | undefined;
    onBlur?: ((ev: FocusEvent) => any) | undefined;
    onInput?: ((value: string, ev: Event) => any) | undefined;
    onKeydown?: ((ev: KeyboardEvent) => any) | undefined;
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
}>, {
    disabled: boolean;
    error: import('./type').AutoSize;
    modelValue: string;
    defaultValue: string;
    placeholder: string;
    maxLength: import('..').MaxLength;
    showWordLimit: boolean;
    allowClear: boolean;
    readonly: boolean;
    autoSize: import('./type').AutoSize;
    wordLength: import('..').WordLength;
    wordSlice: import('..').WordSlice;
    enterPrevent: boolean;
    showMirror: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    mirrorRef: HTMLDivElement;
    inputRef: HTMLTextAreaElement;
}, HTMLDivElement>;
export default _default;
