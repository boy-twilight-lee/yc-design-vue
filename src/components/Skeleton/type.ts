import { VNode } from 'vue';

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
  shape?: SkeletonShapeShape;
  size?: SkeletonShapeSize;
}

export type SkeletonShapeSize = 'small' | 'medium' | 'large';
export type SkeletonShapeShape = 'sqaure' | 'circle';
