import { Size, ObjectData } from '@shared/type';
import { TagProps } from '@/components/Tag';
import { VNode } from 'vue';

export interface InputTagProps {
  modelValue?: InputTagValue;
  defaultValue?: InputTagValue;
  inputValue?: string;
  defaultInputValue?: string;
  placeholder?: string;
  disabled?: boolean;
  error?: boolean;
  readonly?: boolean;
  allowClear?: boolean;
  size?: Size;
  maxTagCount?: number;
  retainInputValue?: InputRetainValue;
  formatTag?: FormatTag;
  uniqueValue?: boolean;
  tagNowrap?: boolean;
  fieldNames?: Record<string, string>;
  allowCreate?: boolean;
}

export interface InputTagEmits {
  (e: 'update:modelValue', value: InputTagValue): void;
  (e: 'update:inputValue', value: string): void;
  (e: 'input', value: string): void;
  (e: 'input-value-change', value: string, ev: Event): void;
  (e: 'focus', ev: FocusEvent): void;
  (e: 'blur', ev: FocusEvent): void;
  (e: 'press-enter', ev: KeyboardEvent): void;
  (e: 'remove', value: number | string, ev: MouseEvent | KeyboardEvent): void;
  (e: 'clear', ev: MouseEvent): void;
}

export interface InputTagSlots {
  tag?: (scope: { tag: ObjectData }) => VNode[];
  prefix?: () => VNode[];
  suffix?: () => VNode[];
}

export interface InputTagExpose {
  focus(): void;
  blur(): void;
}

export type TagData =
  | {
      id?: string;
      label: string;
      value: string | number;
      closeable?: boolean;
      tagProps?: TagProps;
    }
  | ObjectData;

export type InputTagValue = (string | number | TagData)[];
export type InputRetainValue = boolean | { create?: boolean; blur?: boolean };
export type FormatTag = (data: TagData) => string;
