import { ObjectType, RenderContent, Size, PopupContainer } from '@shared/type';
import { TriggerInstance, TriggerProps } from '../Trigger';
import { TagProps } from '../Tag';
import { VNode } from 'vue';

export interface SelectProps {
  multiple?: boolean;
  modelValue?: SelectValue;
  defaultValue?: SelectValue;
  inputValue?: string;
  defaultInputValue?: string;
  size?: Size;
  placeholder?: string;
  loading?: boolean;
  disabled?: boolean;
  error?: boolean;
  allowClear?: boolean;
  allowSearch?: boolean;
  allowCreate?: boolean;
  maxTagCount?: number;
  popupContainer?: PopupContainer;
  bordered?: boolean;
  popupVisible?: boolean;
  defaultPopupVisible?: boolean;
  unmountonClose?: boolean;
  filterOption?: FilterOption;
  options?: SelectOption[];
  virtualListProps?: VirtualListProps;
  triggerProps?: TriggerProps;
  formatLabel?: FormatLabel;
  fallbackOption?: FallbackOption;
  showExtraOptions?: boolean;
  valueKey?: string;
  searchDelay?: number;
  limit?: number;
  fieldNames?: Record<string, string>;
  scrollbar?: boolean;
  showHeaderOnEmpty?: boolean;
  showFooterOnEmpty?: boolean;
  tagNowrap?: boolean;
  // 是否开启快捷键
  hotkeys?: boolean;
  // 是否展示empty
  showEmpty?: boolean;
}

export interface SelectEmits {
  (e: 'update:modelValue', value: SelectValue): void;
  (e: 'update:inputValue', value: string): void;
  (e: 'update:popupVisible', value: boolean): void;
  (e: 'change', value: SelectValue): void;
  (e: 'input-value-change', value: string): void;
  (e: 'clear'): void;
  (e: 'remove', index: number | string, ev: Event): void;
  (e: 'search', value: string): void;
  (e: 'exceedLimit', value: OptionValue, ev?: MouseEvent): void;
  (e: 'popup-visible-change', value: boolean): void;
  (e: 'dropdown-scroll', ev: Event): void;
  (e: 'dropdown-reach-bottom', ev: Event): void;
  (e: 'select', value: OptionValue): void;
}

export interface SelectSlots {
  default?: () => VNode[];
  trigger?: () => VNode[];
  prefix?: () => VNode[];
  'search-icon'?: () => VNode[];
  'loading-icon'?: () => VNode[];
  'arrow-icon'?: () => VNode[];
  footer?: () => VNode[];
  header?: () => VNode[];
  label?: (scope: { data: ObjectType }) => VNode[];
  option?: (scope: { data: ObjectType }) => VNode[];
  empty?: () => VNode[];
}

export interface SelectExpose {
  focus(): void;
  blur(): void;
  getPopupRef(): TriggerInstance;
}

export interface OptionProps {
  label?: string;
  value?: OptionValue;
  disabled?: boolean;
  tagProps?: TagProps;
  // 选项id
  id?: string;
  // 是否是fallbackoption
  isFallbackOption?: boolean;
}

export interface OptionSlots {
  default?: () => VNode[];
  icon?: () => VNode[];
  suffix?: () => VNode[];
}

export interface OptgroupProps {
  label?: string;
}

export interface OptgroupSlots {
  default?: () => VNode[];
  label?: () => VNode[];
}

export type OptionValue = string | number | boolean | ObjectType;

export type SelectValue = OptionValue | OptionValue[];

export type SelectOptionData = {
  render?: RenderContent;
} & OptionProps;

export type SelectOptionGroup = {
  id?: string;
  label?: string;
  isGroup?: true;
  options?: SelectOptionData[];
};

export type SelectOption =
  | OptionValue
  | SelectOptionData
  | SelectOptionGroup
  | ObjectType;

export type FilterOption =
  | boolean
  | ((inputValue: string, option: SelectOptionData) => boolean);

export type FallbackOption = (value: OptionValue) => SelectOptionData;

export type FormatLabel = (data: SelectOptionData) => string;

export type VirtualListProps = {
  itemHeight?: number;
  buffer?: number;
  threshold?: number;
};
