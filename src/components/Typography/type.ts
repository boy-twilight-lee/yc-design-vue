import { TooltipProps } from '@/components/Tooltip';
import { VNode } from 'vue';

// base
export interface TypographyBaseProps {
  tag?: string;
  type?: TypographyType;
  bold?: boolean;
  disabled?: boolean;
  mark?: boolean;
  underline?: boolean;
  delete?: boolean;
  code?: boolean;
  editable?: boolean;
  editing?: boolean;
  defaultEditing?: boolean;
  editText?: string;
  copyable?: boolean;
  copyText?: string;
  copyDelay?: number;
  ellipsis?: boolean | EllipsisConfig;
  editTooltiProps?: TooltipProps;
  copyTooltiProps?: TooltipProps;
}

export interface TypographyBaseEmits {
  (e: 'update:editing', value: boolean): void;
  (e: 'update:editText', value: boolean): void;
  (e: 'edit-start'): void;
  (e: 'change', value: string): void;
  (e: 'copy', value: string): void;
  (e: 'edit-end'): void;
}

export interface TypographyBaseSlots {
  default?: () => VNode[];
  'copy-icon': (scope: { copied: boolean }) => VNode[];
  'copy-tooltip': (scope: { copied: boolean }) => VNode[];
}

export interface TypographyParagraphProps {
  blockquote?: boolean;
  spacing?: 'default' | 'close';
}

export interface TypographyTitleProps {
  heading?: 1 | 2 | 3 | 4 | 5 | 6;
}

export type EllipsisConfig = {
  rows?: number;
  expandable?: boolean;
  ellipsisStr?: string;
  suffix?: string;
  showTooltip?:
    | boolean
    | { type: 'tooltip' | 'popover'; props: Record<string, any> };
  css?: boolean;
};
export type TypographyType =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning';
