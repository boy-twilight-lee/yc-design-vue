import { Shape, Size } from '@shared/type';
import { VNode } from 'vue';

export interface ButtonProps {
  type?: ButtonType;
  shape?: Shape;
  status?: ButtonStatus;
  size?: Size;
  long?: boolean;
  loading?: boolean;
  disabled?: boolean;
  htmlType?: ButtonHtmlType;
  autofocus?: boolean;
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
  default?: () => VNode[];
  icon?: () => VNode[];
}

export interface ButtonGroupProps {
  type?: ButtonType;
  status?: ButtonStatus;
  shape?: Shape;
  size?: Size;
  disabled?: boolean;
}

export interface ButtonGroupSlots {
  default?: () => VNode[];
}

export type ButtonStatus = 'normal' | 'warning' | 'success' | 'danger';

export type ButtonType =
  | 'primary'
  | 'secondary'
  | 'dashed'
  | 'outline'
  | 'text';

export type ButtonHtmlType = 'button' | 'reset' | 'submit';
