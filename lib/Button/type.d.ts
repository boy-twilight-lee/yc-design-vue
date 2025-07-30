import { Size } from '../_shared/type';
export interface ButtonProps {
    type?: ButtonType;
    shape?: ButtonShape;
    status?: ButtonStatus;
    size?: Size;
    long?: boolean;
    loading?: boolean;
    disabled?: boolean;
    htmlType?: ButtonHtmlType;
    href?: string;
}
export interface ButtonEmits {
    (e: 'mousedown', event: MouseEvent): void;
    (e: 'mouseup', event: MouseEvent): void;
    (e: 'click', event: MouseEvent): void;
    (e: 'dblclick', event: MouseEvent): void;
    (e: 'contextmenu', event: MouseEvent): void;
}
export interface ButtonSlots {
    default(): void;
    icon(): void;
}
export interface ButtonGroupProps {
    type?: ButtonType;
    status?: ButtonStatus;
    shape?: ButtonShape;
    size?: Size;
    disabled?: boolean;
}
export interface ButtonGroupSlots {
    default(): void;
}
export type ButtonStatus = 'normal' | 'warning' | 'success' | 'danger';
export type ButtonShape = 'square' | 'circle' | 'round';
export type ButtonType = 'primary' | 'secondary' | 'dashed' | 'outline' | 'text';
export type ButtonHtmlType = 'button' | 'reset' | 'submit';
