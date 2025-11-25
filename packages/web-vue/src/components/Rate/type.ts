import { VNode } from 'vue';

export interface RateProps {
  count?: number;
  modelValue?: number;
  defaultValue?: number;
  allowHalf?: boolean;
  allowClear?: boolean;
  grading?: boolean;
  readonly?: boolean;
  disabled?: boolean;
  color?: string | Record<number, string>;
}

export interface RateEmits {
  (e: 'update:modelValue', value: number): void;
  (e: 'change', value: number): void;
  (e: 'hover-change', value: number): void;
}

export interface RateSlots {
  character?: (scope: { index: number }) => VNode[];
}
