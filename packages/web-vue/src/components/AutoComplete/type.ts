import { VNode } from 'vue';
import { PopupContainer, RecordType, FilterOption } from '@shared/type';
import { VirtualListProps } from '@shared/components/VirtualList/type';
import { SelectOption, SelectOptionData } from '@/components/Select';
import { TriggerProps } from '@/components/Trigger';

export interface AutoCompleteProps {
  modelValue?: string;
  defaultValue?: string;
  disabled?: boolean;
  data?: SelectOption[];
  popupContainer?: PopupContainer;
  strict?: boolean;
  filterOption?: FilterOption<SelectOptionData>;
  triggerProps?: TriggerProps;
  allowClear?: boolean;
  vistualListProps?: VirtualListProps;
  // 是否在选择时设置value
  isSelectSetValue?: boolean;
  isSearch?: boolean;
  type?: 'textarea' | 'input';
}

export interface AutoCompleteEmits {
  (e: 'update:modelValue', value: string): void;
  (e: 'change', value: string): void;
  (e: 'search', value: string): void;
  (e: 'select', value: string): void;
  (e: 'clear', ev?: Event): void;
  (e: 'dropdown-scroll', ev?: Event): void;
  (e: 'dropdown-reach-bottom', ev?: Event): void;
  (e: 'blur', ev: FocusEvent): void;
  (e: 'focus', ev: FocusEvent): void;
  (e: 'input', value: string, ev: Event): void;
  (e: 'keydown', ev: KeyboardEvent): void;
}

export interface AutoCompleteSlots {
  option?: (scope: { data: RecordType }) => VNode[];
  footer?: () => VNode[];
  trigger?: () => VNode[];
}

export interface AutoCompleteExpose {
  focus(): void;
  blur(): void;
  getInputRef(): HTMLInputElement | HTMLTextAreaElement | undefined;
  getMirrorRef(): HTMLDivElement | undefined;
  updatePosition(x: number, y: number): void;
}
