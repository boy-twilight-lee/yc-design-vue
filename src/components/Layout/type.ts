import { VNode } from 'vue';
import { Theme, BreakpointName, collapseType } from '@shared/type';
import { ResizeBoxDirection } from '../ResizeBox';

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
  resizeDirections?: ResizeBoxDirection[];
}

export interface LayoutSiderEmits {
  (e: 'update:collapsed', collapsed: boolean): void;
  (e: 'collapse', collapsed: boolean, type: collapseType): void;
  (e: 'breakpoint', collapsed: boolean): void;
}

export interface LayoutSiderSlots {
  default?: () => VNode[];
  trigger?: (scope: { collapsed: boolean }) => VNode[];
}
