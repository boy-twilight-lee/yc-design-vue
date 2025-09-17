import { VNode } from 'vue';
import { Status } from '@shared/type';
// icon
export interface LinkProps {
  href?: string;
  icon?: boolean;
  status?: Status;
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
