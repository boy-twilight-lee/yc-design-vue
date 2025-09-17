import { Direction, Size as _Size } from '@shared/type';
import { VNode } from 'vue';
export interface SpaceProps {
  align?: Align;
  direction?: Direction;
  wrap?: boolean;
  fill?: boolean;
  size?: SpaceSize | [SpaceSize, SpaceSize];
}

export interface SpaceSlots {
  default?: () => VNode[];
  split?: () => VNode[];
}

type Align = 'start' | 'end' | 'center' | 'baseline';

type SpaceSize = _Size | number;
