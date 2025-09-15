import { VNode } from 'vue';

export interface AlertProps {
  type?: 'warning' | 'success' | 'info' | 'error' | 'normal';
  showIcon?: boolean;
  closable?: boolean;
  title?: string;
  banner?: boolean;
  center?: boolean;
}

export interface AlertEmits {
  (e: 'close', ev: MouseEvent): void;
  (e: 'after-close'): void;
}

export interface AlertSlots {
  default?: () => VNode[];
  icon?: () => VNode[];
  title?: () => VNode[];
  action?: () => VNode[];
  'close-element'?: () => VNode[];
}
