import { VNode } from 'vue';

export interface PageHeaderProp {
  title?: string;
  subtitle?: string;
  showBack?: boolean;
}

export interface PageHeaderEmits {
  (e: 'back', ev: Event): void;
}

export interface PageHeaderSlots {
  default?: () => VNode[];
  breadcrumb?: () => VNode[];
  'back-icon': VNode[];
  title?: () => VNode[];
  subtitle?: () => VNode[];
  extra?: () => VNode[];
}
