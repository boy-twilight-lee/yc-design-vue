import { Direction, Format } from '@shared/type';

export interface SliderProps {
  modelValue?: SliderValue;
  defaultValue?: SliderValue;
  step?: number;
  min?: number;
  marks?: Record<number, string>;
  max?: number;
  direction?: Direction;
  disabled?: boolean;
  showTicks?: boolean;
  showInput?: boolean;
  range?: boolean;
  showTooltip?: boolean;
  formatTooltip?: Format<number>;
}

export interface SliderEmits {
  (e: 'update:modelValue', value: number): void;
  (e: 'change', value: number): void;
}

export type SliderValue = number | number[];
