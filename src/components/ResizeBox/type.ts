import { Position } from '@vueuse/core';
import { VNode } from 'vue';

export interface ResizeBoxProps {
  width?: number;
  height?: number;
  component?: string;
  directions?: Position[];
}

export interface ResizeBoxEmits {
  (e: 'update:width', value: number): void;
  (e: 'update:height', value: number): void;
  (e: 'moving-start', ev: MouseEvent): void;
  (e: 'moving', size: { width: number; height: number }, ev: MouseEvent): void;
  (e: 'moving-end', ev: MouseEvent): void;
}

export interface ResizeBoxSlots {
  default?: () => VNode[];
  'resize-trigger'?: (scope: { direction: Position }) => VNode[];
  'resize-trigger-icon'?: (scope: { direction: Position }) => VNode[];
}
