import { BreakpointName } from '@/components/Grid';
import { Theme } from '@shared/type';
import { VNode } from 'vue';

export interface LayoutProps {
  hasSider?: boolean;
}

export interface LayoutSlots {
  default?: () => VNode[];
}

export interface LayoutHeaderSlots {
  default?: () => VNode[];
}

export interface LayoutContentSlots {
  default?: () => VNode[];
}

export interface LayoutFooterSlots {
  default?: () => VNode[];
}

export interface LayoutSiderProps {
  theme?: Theme;
  collapsed?: boolean;
  defaultCollapsed?: boolean;
  collapsible?: boolean;
  width?: number;
  collapsedWidth?: number;
  reverseArrow?: boolean;
  breakpoint?: BreakpointName;
  hideTrigger?: boolean;
  resizeDirections?: ResizeDirections;
}

export interface LayoutSiderEmits {
  (e: 'update:collapsed', collapsed: boolean): void;
  (
    e: 'collapse',
    collapsed: boolean,
    type: 'clickTrigger' | 'responsive'
  ): void;
  (e: 'breakpoint', collapsed: boolean): void;
}

export interface LayoutSiderSlots {
  default?: () => VNode[];
  trigger?: (scope: { collapsed: boolean }) => VNode[];
}

export type ResizeDirections = Array<'left' | 'right' | 'top' | 'bottom'>;
