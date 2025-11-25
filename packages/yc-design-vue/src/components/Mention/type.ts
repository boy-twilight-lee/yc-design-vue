import { VNode } from 'vue';
import { SelectOption, SelectOptionValue } from '@/components/Select';
import { RecordType } from '@shared/type';

export interface MentionProps {
  modelValue?: string;
  defaultValue?: string;
  data?: SelectOption[];
  prefix?: string | string[];
  split?: string;
  type?: Type;
  disabled?: boolean;
  allowClear?: boolean;
}

export interface MentionEmits {
  (e: 'update:modelValue', value: string): void;
  (e: 'change', value: string): void;
  (e: 'search', value: string): void;
  (e: 'select', value: SelectOptionValue): void;
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
  option?: (scope: { data: RecordType }) => VNode[];
}

type Type = 'input' | 'textarea';
