import { CSSProperties } from 'vue';
import { ClassName, PopupContainer } from '../_shared/type';
export interface TriggerProps {
    popupVisible?: boolean;
    defaultPopupVisible?: boolean;
    trigger?: TriggerType;
    position?: TriggerPostion;
    disabled?: boolean;
    popupOffset?: number;
    popupTranslate?: number[];
    showArrow?: boolean;
    popuphoverStay?: boolean;
    blurToClose?: boolean;
    clickToClose?: boolean;
    clickOutsideToClose?: boolean;
    unmountOnClose?: boolean;
    contentClass?: ClassName;
    contentStyle?: CSSProperties;
    arrowClass?: ClassName;
    arrowStyle?: CSSProperties;
    animationName?: string;
    duration?: number;
    mouseEnterDelay?: number;
    mouseLeaveDelay?: number;
    focusDelay?: number;
    autoFitPopupWidth?: boolean;
    autoFitPopupMinWidth?: boolean;
    popupContainer?: PopupContainer;
    renderToBody?: boolean;
    autoFitPosition?: boolean;
    updateAtScroll?: boolean;
    preventFocus?: boolean;
    alignPoint?: boolean;
    scrollToClose?: boolean;
    scrollToCloseDistance?: number;
    needTransformOrigin?: boolean;
    autoSetPosition?: boolean;
    onTriggerMouseenter?: () => void;
    onTriggerMouseleave?: () => void;
    onTriggerMouseclick?: () => void;
    onTriggerFocus?: () => void;
    onTriggerBlur?: () => void;
    onClickOutSide?: () => void;
}
export interface TriggerEmits {
    (e: 'update:popupVisible', value: boolean): void;
    (e: 'popup-visible-change', value: boolean): void;
    (e: 'show'): void;
    (e: 'hide'): void;
}
export interface TriggerSlots {
    default(): void;
    content(): void;
}
export interface TriggerExpose {
    hide(): void;
    show(): void;
    updatePosition(x: number, y: number): void;
}
export type TriggerPostion = 'top' | 'tl' | 'tr' | 'bottom' | 'bl' | 'br' | 'left' | 'lt' | 'lb' | 'right' | 'rt' | 'rb';
export type TriggerType = 'hover' | 'click' | 'focus' | 'contextMenu';
