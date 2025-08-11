import { CSSProperties, VNode } from 'vue';
import { ClassName, PopupContainer } from '@shared/type';
import {
  TriggerPostion,
  TriggerProps,
  TriggerType,
} from '@/components/Trigger';

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
  // triggerProps
  triggerProps?: TriggerProps;
}

export interface PopoverEmits {
  (e: 'update:popupVisible', value: boolean): void;
  (e: 'popup-visible-change', value: boolean): void;
}

export interface PopoverSlots {
  default?: () => VNode[];
  content?: () => VNode[];
  title?: () => VNode[];
}

export interface PopoverExpose {
  hide(): void;
  show(): void;
}
