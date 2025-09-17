import { VNode } from 'vue';

export interface OverflowListProps {
  min?: number;
  margin?: number;
  from?: From;
}

export interface OverflowListEmits {
  (e: 'change', value: number): void;
}

export interface OverflowListSlots {
  default?: () => VNode[];
  overflow?: () => VNode[];
}

type From = 'start' | 'end';
