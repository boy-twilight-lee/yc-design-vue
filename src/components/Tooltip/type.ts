import { CSSProperties, VNode } from 'vue';
import { ClassName, PopupContainer, PopupPosition } from '@shared/type';
import { TriggerProps } from '@/components/Trigger/type';

export interface TooltipProps {
  popupVisible?: boolean;
  defaultPopupVisible?: boolean;
  content?: string;
  position?: PopupPosition;
  mini?: boolean;
  backgroundColor?: string;
  contentClass?: ClassName;
  contentStyle?: CSSProperties;
  arrowClass?: ClassName;
  arrowStyle?: CSSProperties;
  popupContainer?: PopupContainer;
  // triggerProps
  triggerProps?: TriggerProps;
}

export interface TooltipEmits {
  (e: 'update:popupVisible', value: boolean): void;
  (e: 'popup-visible-change', value: boolean): void;
}

export interface TooltipSlots {
  default?: () => VNode[];
  content?: () => VNode[];
}

export interface TooltipExpose {
  hide(): void;
  show(): void;
}
