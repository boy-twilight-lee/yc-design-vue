import { CSSProperties } from 'vue';
import { ClassName, PopupContainer } from '../_shared/type';
import { OnBeforeCancel, OnBeforeOk } from '../Modal';
import { TriggerPostion, TriggerProps } from '../Trigger';
import { ButtonProps } from '../Button';
export interface PopconfirmProps {
    content?: string;
    position?: TriggerPostion;
    popupVisible?: boolean;
    defaultPopupVisible?: boolean;
    type?: PopconfirmType;
    okText?: string;
    cancelText?: string;
    okLoading?: boolean;
    okButtonProps?: ButtonProps;
    cancelButtonProps?: ButtonProps;
    contentClass?: ClassName;
    contentStyle?: CSSProperties;
    arrowClass?: ClassName;
    arrowStyle?: CSSProperties;
    popupContainer?: PopupContainer;
    onBeforeOk?: OnBeforeOk;
    onBeforeCancel?: OnBeforeCancel;
    triggerProps?: TriggerProps;
}
export interface PopconfirmEmits {
    (e: 'update:popupVisible', value: boolean): void;
    (e: 'popup-visible-change', value: boolean): void;
    (e: 'ok'): void;
    (e: 'cancel'): void;
}
export interface PopconfirmSlots {
    default(): void;
    content(): void;
    icon(): void;
}
export type PopconfirmType = 'info' | 'success' | 'warning' | 'error';
export interface PopconfirmExpose {
    hide(): void;
    show(): void;
}
