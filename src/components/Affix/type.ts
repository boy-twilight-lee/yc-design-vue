import { VNode } from 'vue';
import { TargetContainer } from '@shared/type';

export interface AffixProps {
  offsetTop?: number;
  offsetBottom?: number;
  target?: TargetContainer;
  targetContainer?: TargetContainer;
}

export interface AffixEmits {
  (e: 'change', fixed: boolean): void;
}

export interface AffixSlots {
  default?: () => VNode[];
}

export interface AffixExpose {
  updatePosition(): void;
}
