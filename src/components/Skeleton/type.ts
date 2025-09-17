import { VNode } from 'vue';
import { Shape, Size } from '@shared/type';

export interface SkeletonProps {
  animation?: boolean;
  loading?: boolean;
}

export interface SkeletonSlots {
  default?: () => VNode[];
  content?: () => VNode[];
}

export interface SkeletonLineProps {
  rows?: number;
  widths?: number[];
  lineHeight?: number;
  lineSpacing?: number;
}

export interface SkeletonShapeProps {
  shape?: Exclude<Shape, 'round'>;
  size?: Exclude<Size, 'mini'>;
}
