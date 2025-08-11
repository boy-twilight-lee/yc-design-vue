import { Direction, Size } from '@shared/type';
import { VNode } from 'vue';
export interface SpaceProps {
  align?: SpaceAlign;
  direction?: Direction;
  wrap?: boolean;
  fill?: boolean;
  size?: Size | number;
}

export interface SpaceSlots {
  default?: () => VNode[];
  split?: () => VNode[];
}

export type SpaceAlign = 'start' | 'end' | 'center' | 'baseline';
