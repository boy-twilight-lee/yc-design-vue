import { MaxLength, WordLength, WordSlice } from '../Input';
export interface TextareaProps {
    modelValue?: string;
    defaultValue?: string;
    placeholder?: string;
    disabled?: boolean;
    error?: AutoSize;
    maxLength?: MaxLength;
    showWordLimit?: boolean;
    allowClear?: boolean;
    readonly?: boolean;
    autoSize?: AutoSize;
    wordLength?: WordLength;
    wordSlice?: WordSlice;
    enterPrevent?: boolean;
    showMirror?: boolean;
}
export interface TextareaEmits {
    (e: 'update:modelValue', value: string): void;
    (e: 'input', value: string, ev: Event): void;
    (e: 'change', value: string, ev: Event): void;
    (e: 'clear', ev: MouseEvent): void;
    (e: 'focus', ev: FocusEvent): void;
    (e: 'blur', ev: FocusEvent): void;
    (e: 'keydown', ev: KeyboardEvent): void;
}
export type TextareaExpose = {
    focus(): void;
    blur(): void;
    getInputRef(): HTMLTextAreaElement;
    getMirrorRef(): HTMLDivElement;
};
export type AutoSize = boolean | {
    minRows?: number;
    maxRows?: number;
};
