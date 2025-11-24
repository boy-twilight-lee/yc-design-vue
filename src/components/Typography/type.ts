import { VNode } from 'vue';
import { TooltipProps } from '@/components/Tooltip';

// base
export interface TypographyBaseProps {
  tag?: string;
  type?: BaseType;
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
  spacing?: Spacing;
}

export interface TypographyTitleProps {
  heading?: Heading;
}

type Heading = 1 | 2 | 3 | 4 | 5 | 6;

type Spacing = 'default' | 'close';

type BaseType = 'success' | 'warning' | 'danger' | 'primary' | 'secondary';
