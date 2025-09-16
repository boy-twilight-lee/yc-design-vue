import { TooltipProps } from '@/components/Tooltip';
import { TriggerProps } from '@/components/Trigger';
import {
  Theme,
  BreakpointName,
  PopupMaxHeight,
  Direction,
  collapseType,
} from '@shared/type';
import { VNode } from 'vue';

export interface MenuProps {
  theme?: Theme;
  mode?: Direction;
  levelIndent?: number;
  autoOpen?: boolean;
  collapsed?: boolean;
  defaultCollapsed?: boolean;
  collapsedWidth?: number | string;
  accordion?: boolean;
  showCollapseButton?: boolean;
  selectedKeys?: string;
  defaultSelectedKeys?: string;
  openKeys?: string[];
  defaultOpenKeys?: string[];
  breakpoint?: BreakpointName;
  triggerProps?: TriggerProps;
  tooltipProps?: TooltipProps;
  autoOpenSelected?: boolean;
  autoScrollIntoView?: boolean;
  scrollConfig?: ScrollIntoViewOptions;
  popupMaxHeight?: PopupMaxHeight;
}

export interface MenuEmits {
  (e: 'update:selectedKeys', value: string): void;
  (e: 'update:openKeys', value: string): void;
  (e: 'update:collapsed', value: boolean): void;
  (e: 'collapse', collapsed: boolean, type: collapseType): void;
  (e: 'menu-item-click', key: string): void;
  (e: 'sub-menu-click', key: string, openKeys: string[]): void;
}

export interface MenuSlots {
  default?: () => VNode[];
}

export interface SubMenuProps {
  path?: string;
  title?: string;
  selectable?: boolean;
  popup?: boolean;
  popupMaxHeight?: PopupMaxHeight;
}

export interface SubMenuSlots {
  default?: () => VNode[];
  title?: () => VNode[];
  icon?: () => VNode[];
  'expand-icon-down'?: () => VNode[];
}

export interface MenuItemProps {
  path?: string;
  disabled?: boolean;
}

export interface MenuItemSlots {
  default?: () => VNode[];
  icon?: () => VNode[];
  suffix?: () => VNode[];
}

export interface MenuItemGroupProps {
  title?: string;
}

export interface MenuItemGroupSlots {
  default?: () => VNode[];
  title?: () => VNode[];
}
