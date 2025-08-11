import { VNode } from 'vue';

export interface TagProps {
  color?: string;
  size?: TagSize;
  bordered?: boolean;
  visible?: boolean;
  defaultVisible?: boolean;
  loading?: boolean;
  closable?: boolean;
  checkable?: boolean;
  checked?: boolean;
  defaultChecked?: boolean;
  nowrap?: boolean;
}

export interface TagEmits {
  (e: 'update:visible', value: boolean): void;
  (e: 'update:checked', value: boolean): void;
  (e: 'close', ev: MouseEvent, value?: string): void;
  (e: 'check', value: boolean, ev: MouseEvent): void;
}

export interface TagSlots {
  default?: () => VNode[];
  icon?: () => VNode[];
  'close-icon'?: () => VNode[];
}

export type TagSize = 'small' | 'medium' | 'large';
