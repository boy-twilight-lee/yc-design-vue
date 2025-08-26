import { Direction } from '@shared/type';
import { VNode } from 'vue';
export interface DividerProps {
  direction?: Direction;
  orientation?: Orientation;
  type?: DividerType;
  size?: number;
  margin?: number | string;
}

export interface DividerSlots {
  default?: () => VNode[];
}

export type Orientation = 'left' | 'center' | 'right';
export type DividerType = 'solid' | 'dashed' | 'dotted' | 'double';
