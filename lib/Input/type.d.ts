import { Size, ObjectData } from '../_shared/type';
export interface InputProps {
    modelValue?: string;
    defaultValue?: string;
    size?: Size;
    allowClear?: boolean;
    disabled?: boolean;
    readonly?: boolean;
    error?: boolean;
    placeholder?: string;
    maxLength?: MaxLength;
    wordLength?: WordLength;
    wordSlice?: WordSlice;
    showWordLimit?: boolean;
    inputAttrs?: ObjectData;
    isPassword?: boolean;
    visibility?: boolean;
    defaultVisibility?: boolean;
    invisibleButton?: boolean;
    showInput?: boolean;
}
export interface InputEmits {
    (e: 'update:modelValue', value: string): void;
    (e: 'update:visibility', value: boolean): void;
    (e: 'input', value: string, ev: Event): void;
    (e: 'change', value: string, ev: Event): void;
    (e: 'visibility-change', value: boolean): void;
    (e: 'pressEnter', ev: KeyboardEvent): void;
    (e: 'keydown', ev: KeyboardEvent): void;
    (e: 'clear', ev: MouseEvent): void;
    (e: 'focus', ev: FocusEvent): void;
    (e: 'blur', ev: FocusEvent): void;
}
export interface InputSlots {
    prefix(): void;
    suffix(): void;
    prepend(): void;
    append(): void;
    label(): void;
}
export interface InputExpose {
    focus(): void;
    blur(): void;
    getInputRef(): HTMLInputElement;
}
export type WordSlice = (value: string, maxLength: number) => string;
export type WordLength = (value: string) => number;
export type MaxLength = number | {
    length: number;
    errorOnly?: boolean;
};
