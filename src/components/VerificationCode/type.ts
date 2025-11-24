import { VNode } from 'vue';
import { Size } from '@shared/type';

export interface VerificationCodeProps {
  modelValue?: string;
  defaultValue?: string;
  length?: number;
  size?: Size;
  disabled?: boolean;
  masked?: boolean;
  readonly?: boolean;
  error?: boolean;
  separator?: Separator;
  formatter?: Formatter;
}

export interface VerificationCodeEmits {
  (e: 'update:modelValue', value: string): void;
  (e: 'input', value: string, ev: Event, i: number): void;
  (e: 'change', value: string): void;
  (e: 'finish', value: string): void;
}

type Separator = (index: number, character: string) => VNode;

type Formatter = (inputValue: string, index: number, value: string) => string;
