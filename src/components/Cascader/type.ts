import { RenderFunction, VNode } from 'vue';
import {
  PopupContainer,
  Size,
  FilterOption,
  EventTrigger,
  Format,
  FallBack,
} from '@shared/type';
import { TagProps } from '@/components/Tag';
import { TriggerProps } from '@/components/Trigger';

export interface CascaderProps {
  pathMode?: boolean;
  multiple?: boolean;
  modelValue?: CascaderValue;
  defaultValue?: CascaderValue;
  options?: CascaderOption[];
  disabled?: boolean;
  error?: boolean;
  size?: Size;
  allowSearch?: boolean;
  allowClear?: boolean;
  inputValue?: string;
  defaultInputValue?: string;
  popupVisible?: boolean;
  defaultPopupVisible?: boolean;
  expandTrigger?: EventTrigger;
  placeholder?: string;
  filterOption?: FilterOption<CascaderOption>;
  popupContainer?: PopupContainer;
  maxTagCount?: number;
  formatLabel?: Format<CascaderOption[]>;
  triggerProps?: TriggerProps;
  // checkStrictly?:boolean;
  loadMore?: LoadMore;
  loading?: boolean;
  searchOptionOnlyLabel?: boolean;
  searchDelay?: number;
  fieldNames?: Record<string, string>;
  valueKey?: string;
  fallback?:
    | boolean
    | FallBack<CascaderOptionValue | CascaderOptionValue[], string>;
  expandChild?: boolean;
  // virtual-list-props
  tagNowrap?: boolean;
}

export interface CascaderEmits {
  (e: 'update:modelValue', value: CascaderValue): void;
  (e: 'update:inputValue', value: string): void;
  (e: 'update:popupVisible', value: boolean): void;
  (e: 'change', value: CascaderValue): void;
  (e: 'input-value-change', value: string): void;
  (e: 'clear'): void;
  (e: 'search', value: string): void;
  (e: 'popup-visible-change', value: boolean): void;
  (e: 'focus', ev: FocusEvent): void;
  (e: 'blur', ev: FocusEvent): void;
}

export interface CascaderSlots {
  label?: (scope: { data: CascaderOption }) => VNode[];
  prefix?: () => VNode[];
  'arrow-icon'?: () => VNode[];
  'loading-icon'?: () => VNode[];
  'search-icon'?: () => VNode[];
  empty?: () => VNode[];
  option?: (scope: { data: CascaderOption }) => VNode[];
}

export type CascaderValue =
  | CascaderOptionValue
  | CascaderOptionValue[]
  | CascaderOptionValue[][];

export type CascaderOptionValue = string | number | Record<string, any>;

export type CascaderOption = {
  label?: string;
  value?: CascaderOptionValue;
  render?: RenderFunction;
  disabled?: boolean;
  tagProps?: TagProps;
  children?: CascaderOption[];
  // 用于懒加载的
  isLeaf?: boolean;
};

export type CascaderOptionProps = {
  level?: number;
  index?: number;
  nodePath?: CascaderOptionProps[];
} & CascaderOption;

export type LoadMore = (
  option: CascaderOption,
  done: (children?: CascaderOption[]) => void
) => void;
