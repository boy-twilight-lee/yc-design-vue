import { CSSProperties, VNode } from 'vue';
import { RenderContent, Size, ResponsiveValue } from '@shared/type';

export interface DescriptionsProps {
  data?: DescData[];
  column?: DescriptionsColumn;
  title?: string;
  layout?: DescriptionsLayout;
  align?: DescriptionsAlign;
  size?: Size;
  bordered?: boolean;
  labelStyle?: CSSProperties;
  valueStyle?: CSSProperties;
  tableLayout?: TableLayout;
}

export interface DescriptionsSlots {
  default?: () => VNode[];
  value?: (scope: { value: string; index: number; data: DescData }) => VNode[];
  label?: (scope: { label: string; index: number; data: DescData }) => VNode[];
  title?: () => VNode[];
}

export interface DescriptionsItemProps {
  span?: number;
  label?: string;
}

export interface DescriptionsItemSlots {
  default?: () => VNode[];
  label?: () => VNode[];
}

export interface DescData {
  label?: string | RenderContent;
  value?: string | RenderContent;
  span?: number;
}

export type TextAlign = 'left' | 'right' | 'center';

export type DescriptionsAlign =
  | TextAlign
  | { label?: TextAlign; value?: TextAlign };

export type DescriptionsColumn = number | ResponsiveValue;

export type DescriptionsLayout =
  | 'horizontal'
  | 'vertical'
  | 'inline-horizontal'
  | 'inline-vertical';

export type TableLayout = 'auto' | 'fixed';
