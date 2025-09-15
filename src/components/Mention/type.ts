import { SelectOption, OptionValue } from '@/components/Select';
import { ObjectType } from '@shared/type';
import { VNode } from 'vue';

export interface MentionProps {
  modelValue?: string;
  defaultValue?: string;
  data?: SelectOption[];
  prefix?: string | string[];
  split?: string;
  type?: MentionType;
  disabled?: boolean;
  allowClear?: boolean;
}

export interface MentionEmits {
  (e: 'update:modelValue', value: string): void;
  (e: 'change', value: string): void;
  (e: 'search', value: string): void;
  (e: 'select', value: OptionValue): void;
  (e: 'focus', ev: FocusEvent): void;
  (e: 'blur', ev: FocusEvent): void;
  (e: 'clear', ev: MouseEvent): void;
  (e: 'input', value: string, ev: Event): void;
}

export interface MentionExpose {
  focus(): void;
  blur(): void;
}

export interface MentionSlots {
  option?: (scope: { data: ObjectType }) => VNode[];
}

export type MentionType = 'input' | 'textarea';
