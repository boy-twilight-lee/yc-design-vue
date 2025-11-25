import { VNode } from 'vue';
import {
  EventTrigger,
  RecordType,
  PopupContainer,
  PopupMaxHeight,
  PopupPosition,
} from '@shared/type';
import { TriggerProps, TriggerType } from '@/components/Trigger';
import { ButtonProps, ButtonType } from '@/components/Button';
import { Size } from '@shared/type';

export interface DropdownProps {
  popupVisible?: boolean;
  defaultPopupVisible?: boolean;
  trigger?: TriggerType;
  position?: Extract<
    PopupPosition,
    'top' | 'tr' | 'tl' | 'bottom' | 'br' | 'bl'
  >;
  popupContainer?: PopupContainer;
  hideOnSelect?: boolean;
  alignPoint?: boolean;
  // triggerProps
  triggerProps?: TriggerProps;
  popupMaxHeight?: PopupMaxHeight;
}

export interface DropdownEmits {
  (e: 'update:popupVisible', value: boolean): void;
  (e: 'popup-visible-change', value: boolean): void;
  (e: 'select', value: DoptionValue, ev: MouseEvent): void;
}

export interface DropdownSlots {
  default?: () => VNode[];
  content?: () => VNode[];
  footer?: () => VNode[];
}

export interface DropdownExpose {
  show(): void;
  hide(): void;
}

export interface DoptionProps {
  value?: DoptionValue;
  disabled?: boolean;
  // 是否激活
  isSubmenu?: boolean;
  isActive?: boolean;
}

export interface DoptionSlots {
  default?: () => VNode[];
  icon?: () => VNode[];
  suffix?: () => VNode[];
}

export interface DsubmenuProps {
  disabled?: boolean;
  trigger?: EventTrigger;
  position?: Extract<PopupPosition, 'rt' | 'lt'>;
  popupVisible?: boolean;
  defaultPopupVisible?: boolean;
  // triggerProps
  triggerProps?: TriggerProps;
  popupMaxHeight?: PopupMaxHeight;
}

export interface DsubmenuEmits {
  (e: 'update:popupVisible', value: boolean): void;
  (e: 'popup-visible-change', value: boolean): void;
}

export interface DsubmenuSlots {
  content?: () => VNode[];
  default?: () => VNode[];
  footer?: () => VNode[];
}

export interface DgroupProps {
  title?: string;
}

export interface DgroupSlots {
  title?: () => VNode[];
  default?: () => VNode[];
}

export interface DropdownButtonProps {
  popupVisible?: boolean;
  defaultPopupVisible?: boolean;
  trigger?: TriggerType;
  position?: Extract<
    PopupPosition,
    'top' | 'tr' | 'tl' | 'bottom' | 'br' | 'bl'
  >;
  popupContainer?: PopupContainer;
  disabled?: boolean;
  type?: ButtonType;
  size?: Size;
  buttonProps?: ButtonProps;
  hideOnSelect?: boolean;
}

export interface DropdownButtonSlots {
  content?: () => VNode[];
  default?: () => VNode[];
  icon?: () => VNode[];
}

export type DoptionValue = string | number | boolean | RecordType;
