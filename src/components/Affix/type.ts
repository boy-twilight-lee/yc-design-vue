import { TargetContainer } from '@shared/type';
import { VNode } from 'vue';

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
