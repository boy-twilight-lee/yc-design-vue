import { VNode } from 'vue';
import { ClassName, Direction, EventTrigger, Position } from '@shared/type';

export interface CarouselProps {
  current?: number;
  defaultCurrent?: number;
  autoPlay?: AutoPlay;
  moveSpeed?: number;
  animationName?: AnimationName;
  trigger?: EventTrigger;
  direction?: Direction;
  showArrow?: ShowArrow;
  arrowClass?: ClassName;
  indicatorType?: IndicatorType;
  indicatorPosition?: IndicatorPosition;
  indicatorClass?: ClassName;
  transitionTimingFunction?: string;
}

export interface CarouselEmits {
  (e: 'update:current', index: number): void;
  (e: 'change', index: number, preIndex: number, isManual: boolean): void;
}

export interface CarouselSlots {
  default?: () => VNode[];
}

export interface CarouselItemSlots {
  default?: () => VNode[];
}

export type AnimationName = 'slide' | 'fade' | 'card';

export type ShowArrow = 'always' | 'hover' | 'never';

export type AutoPlay = boolean | { interval?: number; hoverToPause?: boolean };

export type IndicatorPosition = Position | 'outer';

export type IndicatorType = 'line' | 'dot' | 'slider' | 'never';
