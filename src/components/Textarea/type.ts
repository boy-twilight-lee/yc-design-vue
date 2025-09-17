import { MaxLength, WordLength, WordSlice } from '@/components/Input';

export interface TextareaProps {
  modelValue?: string;
  defaultValue?: string;
  placeholder?: string;
  disabled?: boolean;
  error?: AutoSize;
  maxLength?: MaxLength;
  showWordLimit?: boolean;
  allowClear?: boolean;
  readonly?: boolean;
  autoSize?: AutoSize;
  wordLength?: WordLength;
  wordSlice?: WordSlice;
  // 是否阻止enter的默认行为
  enterPrevent?: boolean;
  // 是否展示mirror
  showMirror?: boolean;
}

export interface TextareaEmits {
  (e: 'update:modelValue', value: string): void;
  (e: 'input', value: string, ev: Event): void;
  (e: 'change', value: string, ev: Event): void;
  (e: 'clear', ev: MouseEvent): void;
  (e: 'focus', ev: FocusEvent): void;
  (e: 'blur', ev: FocusEvent): void;
  (e: 'keydown', ev: KeyboardEvent): void;
}

export interface TextareaExpose {
  focus(): void;
  blur(): void;
  getInputRef(): HTMLTextAreaElement;
  getMirrorRef(): HTMLDivElement;
}

type AutoSize =
  | boolean
  | {
      minRows?: number;
      maxRows?: number;
    };
