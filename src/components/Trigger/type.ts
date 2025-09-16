import { CSSProperties, VNode } from 'vue';
import {
  ClassName,
  EventTrigger,
  PopupContainer,
  PopupPosition,
} from '@shared/type';
export interface TriggerProps {
  popupVisible?: boolean;
  defaultPopupVisible?: boolean;
  trigger?: TriggerType;
  position?: PopupPosition;
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
  // 是否需要trasformOrigin
  needTransformOrigin?: boolean;
  // 是否需要自由设置位置
  autoSetPosition?: boolean;
  // 各个回调
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
  default?: () => VNode[];
  content?: () => VNode[];
}

export interface TriggerExpose {
  hide(): void;
  show(): void;
  updatePosition(x: number, y: number): void;
}

export type TriggerType = EventTrigger | 'focus' | 'contextMenu';
