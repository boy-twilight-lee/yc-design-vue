import { VNode } from 'vue';
import { Direction } from '@shared/type';

export interface DividerProps {
  direction?: Direction;
  orientation?: Orientation;
  type?: Type;
  size?: number;
  margin?: number | string;
}

export interface DividerSlots {
  default?: () => VNode[];
}

type Orientation = 'left' | 'center' | 'right';

type Type = 'solid' | 'dashed' | 'dotted' | 'double';
