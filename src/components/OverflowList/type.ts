import { VNode } from 'vue';

export interface OverflowListProps {
  min?: number;
  margin?: number;
  from?: OverflowListFrom;
}

export interface OverflowListEmits {
  (e: 'change', value: number): void;
}

export interface OverflowListSlots {
  default?: () => VNode[];
  overflow?: () => VNode[];
}

export type OverflowListFrom = 'start' | 'end';
