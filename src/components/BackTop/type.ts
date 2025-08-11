import { TargetContainer } from '@shared/type';
import { VNode } from 'vue';

export interface BackTopProps {
  visibleHeight?: number;
  targetContainer?: TargetContainer;
  easeing?: string;
  duration?: number;
}

export interface BackTopSlots {
  default?: () => VNode[];
}
