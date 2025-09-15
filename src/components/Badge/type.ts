import { CSSProperties, VNode } from 'vue';

export interface BadgeProps {
  text?: string;
  dot?: boolean;
  dotStyle?: CSSProperties;
  maxCount?: number;
  offset?: number[];
  color?: string;
  status?: BadgeStatus;
  count?: number;
}

export interface BadgeSlots {
  default?: () => VNode[];
  content?: () => VNode[];
}

export type BadgeStatus =
  | 'normal'
  | 'processing'
  | 'success'
  | 'warning'
  | 'danger';
