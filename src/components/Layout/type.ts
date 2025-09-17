import { VNode } from 'vue';
import { Theme, BreakpointName, Position } from '@shared/type';

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
  resizeDirections?: Position[];
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
