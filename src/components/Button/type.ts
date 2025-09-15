import { Size } from '@shared/type';
import { VNode } from 'vue';

export interface ButtonProps {
  type?: 'primary' | 'secondary' | 'dashed' | 'outline' | 'text';
  shape?: 'square' | 'circle' | 'round';
  status?: 'normal' | 'warning' | 'success' | 'danger';
  size?: Size;
  long?: boolean;
  loading?: boolean;
  disabled?: boolean;
  htmlType?: 'button' | 'reset' | 'submit';
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
  type?: ButtonProps['type'];
  status?: ButtonProps['status'];
  shape?: ButtonProps['shape'];
  size?: Size;
  disabled?: boolean;
}

export interface ButtonGroupSlots {
  default?: () => VNode[];
}
