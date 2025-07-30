import { VNode } from 'vue';
import { Size } from '../_shared/type';
export interface VerificationCodeProps {
    modelValue?: string;
    defaultValue?: string;
    length?: number;
    size?: Size;
    disabled?: boolean;
    masked?: boolean;
    readonly?: boolean;
    error?: boolean;
    separator?: VerificationCodeSeparator;
    formatter?: VerificationCodeFormatter;
}
export interface VerificationCodeEmits {
    (e: 'update:modelValue', value: string): void;
    (e: 'input', value: string, ev: Event, i: number): void;
    (e: 'change', value: string): void;
    (e: 'finish', value: string): void;
}
export type VerificationCodeSeparator = (index: number, character: string) => VNode;
export type VerificationCodeFormatter = (inputValue: string, index: number, value: string) => string;
