import { Size, RecordType, Format } from '@shared/type';
import { VNode } from 'vue';
export interface InputNumberProps {
  modelValue?: InputNumberValue;
  defaultValue?: InputNumberValue;
  mode?: InputNumberMode;
  precision?: number;
  step?: number;
  disabled?: boolean;
  error?: boolean;
  max?: number;
  min?: number;
  placeholder?: string;
  hideButton?: boolean;
  size?: Size;
  allowClear?: boolean;
  formatter?: Format<string>;
  parser?: InputNumberParser;
  readonly?: boolean;
  inputAttrs?: RecordType;
}

export interface InputNumberEmits {
  (e: 'update:modelValue', value: InputNumberValue): void;
  (e: 'input', value: InputNumberValue, ev: Event): void;
  (e: 'change', value: InputNumberValue, ev: Event): void;
  (e: 'focus', ev: FocusEvent): void;
  (e: 'blur', ev: FocusEvent): void;
  (e: 'clear', ev: MouseEvent): void;
  (e: 'keydown', ev: KeyboardEvent): void;
  (e: 'pressEnter', ev: KeyboardEvent): void;
}

export interface InputNumberSlots {
  plus?: () => VNode[];
  minus?: () => VNode[];
  prefix?: () => VNode[];
  suffix?: () => VNode[];
  prepend?: () => VNode[];
  append?: () => VNode[];
  label?: () => VNode[];
}

export interface InputNumberExpose {
  focus(): void;
  blur(): void;
}

export type InputNumberValue = number | string;

export type InputNumberMode = 'embed' | 'button';

export type InputNumberParser = (value: string) => string;
