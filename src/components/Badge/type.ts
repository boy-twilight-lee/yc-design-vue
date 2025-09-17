import { CSSProperties, VNode } from 'vue';
import { Status } from '@shared/type';

export interface BadgeProps {
  text?: string;
  dot?: boolean;
  dotStyle?: CSSProperties;
  maxCount?: number;
  offset?: number[];
  color?: string;
  status?: Status<'processing'>;
  count?: number;
}

export interface BadgeSlots {
  default?: () => VNode[];
  content?: () => VNode[];
}
