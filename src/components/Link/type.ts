import { VNode } from 'vue';

// icon
export interface LinkProps {
  href?: string;
  icon?: boolean;
  status?: LinkStatus;
  hoverable?: boolean;
  disabled?: boolean;
  loading?: boolean;
}

export interface LinkEmits {
  (e: 'click', event: MouseEvent): void;
  (e: 'dblclick', event: MouseEvent): void;
  (e: 'contextmenu', event: MouseEvent): void;
}

export interface LinkSlots {
  default?: () => VNode[];
  icon?: () => VNode[];
}

export type LinkStatus = 'success' | 'warning' | 'danger' | 'normal';
