import { VNode } from 'vue';
import { ClassName, Direction, EventTrigger } from '@shared/type';
import { Position } from '@vueuse/core';

export interface CarouselProps {
  current?: number;
  defaultCurrent?: number;
  autoPlay?: AutoPlay;
  moveSpeed?: number;
  animationName?: CarouselAnimationName;
  trigger?: EventTrigger;
  direction?: Direction;
  showArrow?: CarouselShowArrow;
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

export type CarouselAnimationName = 'slide' | 'fade';

export type CarouselShowArrow = 'always' | 'hover' | 'never';

export type AutoPlay = boolean | { interval?: number; hoverToPause?: boolean };

export type IndicatorPosition = Position | 'outer';

export type IndicatorType = 'line' | 'dot' | 'slider' | 'never';
