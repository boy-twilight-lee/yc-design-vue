import { ObjectData, RenderContent, Size, PopupContainer } from '@shared/type';
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
  options?: SelectOptions;
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
  (e: 'update:inputValue', value: SelectValue): void;
  (e: 'update:popupVisible', value: boolean): void;
  (e: 'change', value: SelectValue): void;
  (e: 'input-value-change', value: string): void;
  (e: 'clear'): void;
  (e: 'remove', index: number | string, ev: Event): void;
  (e: 'search', value: string): void;
  (e: 'exceedLimit', value: SelectValue, ev?: MouseEvent): void;
  (e: 'popup-visible-change', value: boolean): void;
  (e: 'dropdown-scroll', ev: Event): void;
  (e: 'dropdown-reach-bottom', ev: Event): void;
  (e: 'select', value: SelectValue): void;
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
  label?: (scope: { data: ObjectData }) => VNode[];
  option?: (scope: { data: ObjectData }) => VNode[];
  empty?: () => VNode[];
}

export interface SelectExpose {
  focus(): void;
  blur(): void;
  getPopupRef(): TriggerInstance;
}

export interface OptionProps {
  label?: string;
  value?: SelectValue;
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

export type SelectValue =
  | (string | number | boolean | ObjectData)
  | (string | number | boolean | ObjectData)[];

export type SelectOptionData = {
  render?: RenderContent;
} & OptionProps;

export type SelectOptionGroup = {
  id?: string;
  label?: string;
  isGroup?: true;
  options?: SelectOptionData[];
};

export type SelectOptions = (
  | SelectValue
  | SelectOptionData
  | SelectOptionGroup
  | ObjectData
)[];

export type FilterOption =
  | boolean
  | ((inputValue: string, option: SelectOptionData) => boolean);
export type FallbackOption = (value: SelectValue) => SelectOptionData;
export type FormatLabel = (data: SelectOptionData) => string;
export type VirtualListProps = {
  itemHeight?: number;
  buffer?: number;
  threshold?: number;
};
