import { CSSProperties, VNode } from 'vue';

export interface BadgeProps {
  text?: string;
  dot?: boolean;
  dotStyle?: CSSProperties;
  maxCount?: number;
  offset?: number[];
  color?: string;
  status?: 'normal' | 'processing' | 'success' | 'warning' | 'danger';
  count?: number;
}

export interface BadgeSlots {
  default?: () => VNode[];
  content?: () => VNode[];
}
