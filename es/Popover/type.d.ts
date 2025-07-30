import { CSSProperties } from 'vue';
import { ClassName, PopupContainer } from '../_shared/type';
import { TriggerPostion, TriggerProps, TriggerType } from '../Trigger';
export interface PopoverProps {
    popupVisible?: boolean;
    defaultPopupVisible?: boolean;
    title?: string;
    content?: string;
    trigger?: TriggerType;
    position?: TriggerPostion;
    contentClass?: ClassName;
    contentStyle?: CSSProperties;
    arrowClass?: ClassName;
    arrowStyle?: CSSProperties;
    popupContainer?: PopupContainer;
    triggerProps?: TriggerProps;
}
export interface PopoverEmits {
    (e: 'update:popupVisible', value: boolean): void;
    (e: 'popup-visible-change', value: boolean): void;
}
export interface PopoverSlots {
    default(): void;
    content(): void;
    title(): void;
}
export interface PopoverExpose {
    hide(): void;
    show(): void;
}
