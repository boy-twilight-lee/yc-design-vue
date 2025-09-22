import { VNode } from 'vue';
import { Direction, Size, RecordType } from '@shared/type';

export interface RadioProps {
  modelValue?: RadioValue;
  defaultChecked?: boolean;
  value?: RadioValue;
  type?: RadioType;
  disabled?: boolean;
}

export interface RadioEmits {
  (e: 'update:modelValue', value: boolean): void;
  (e: 'change', value: RadioValue, ev: Event): void;
}

export interface RadioSlots {
  default?: () => VNode[];
  radio?: (scope: { checked: boolean; disabled: boolean }) => VNode[];
}

export interface RadioGroupProps {
  modelValue?: RadioValue;
  defaultValue?: RadioValue;
  size?: Size;
  type?: RadioType;
  options?: RadioOption[];
  direction?: Direction;
  disabled?: boolean;
}

export interface RadioGroupEmits {
  (e: 'update:modelValue', value: RadioValue): void;
  (e: 'change', value: RadioValue): void;
}

export interface RadioGroupSlots {
  default?: () => VNode[];
  radio?: (scope: { checked: boolean; disabled: boolean }) => VNode[];
  label?: (scope: { data: RecordType }) => VNode[];
}

export type RadioValue = string | number | boolean;

export type RadioOption = (
  | RadioValue
  | {
      label?: string;
      value: RadioValue;
      disabled?: boolean;
    }
)[];

export type RadioType = 'radio' | 'button';
