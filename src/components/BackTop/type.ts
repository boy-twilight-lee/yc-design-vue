import { VNode } from 'vue';
import { TargetContainer } from '@shared/type';

export interface BackTopProps {
  visibleHeight?: number;
  targetContainer?: TargetContainer;
  easeing?: string;
  duration?: number;
}

export interface BackTopSlots {
  default?: () => VNode[];
}
