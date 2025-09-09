import { InputProps } from '@/components/Input';
import { VNode } from 'vue';

export interface TransferProps {
  data?: TransferItem[];
  modelValue?: string[];
  defaultValue?: string[];
  selected?: string[];
  defaultSelected?: string[];
  disabled?: boolean;
  simple?: boolean;
  oneWay?: boolean;
  showSearch?: boolean;
  showSelectAll?: boolean;
  title?: string[];
  sourceInputSearchProps?: InputProps;
  targetInputSearchProps?: InputProps;
}

export interface TransferEmits {
  (e: 'update:selected', value: TransferItemValue[]): void;
  (e: 'update:modelValue', value: TransferItemValue[]): void;
  (e: 'change', value: TransferItemValue[]): void;
  (e: 'select', value: TransferItemValue[]): void;
  (e: 'search', value: string, type: 'target' | 'source'): void;
}

export interface TransferSlots {
  source?: (scope: DefaultSlots) => VNode[];
  target?: (scope: DefaultSlots) => VNode[];
  'source-title'?: (scope: TitleSlots) => VNode[];
  'target-title'?: (scope: TitleSlots) => VNode[];
  'to-source-icon'?: () => VNode[];
  'to-target-icon'?: () => VNode[];
  item?: (scope: TransferItem) => VNode[];
}

export interface TransferPanelSlots {
  default: (scope: DefaultSlots) => VNode[];
  title: (scope: TitleSlots) => VNode[];
  item: (scope: TransferItem) => VNode[];
}

export interface TransferItem {
  label?: string;
  value?: TransferItemValue;
  disabled?: boolean;
}

export type TransferItemValue = string | number;

type TitleSlots = {
  countTotal: number;
  countSelected: number;
  searchValue: string;
  checked: boolean;
  indeterminate: boolean;
  onSelectAllChange: (checked: boolean) => void;
  onClear: () => void;
};

type DefaultSlots = {
  data: TransferItem[];
  selectedKeys: TransferItemValue[];
  onSelect: (value: TransferItemValue[]) => void;
};
