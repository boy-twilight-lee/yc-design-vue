import { BreakpointName } from '@/components/Grid';
import { TooltipProps } from '@/components/Tooltip';
import { TriggerProps } from '@/components/Trigger';
import { Theme } from '@shared/type';

export interface MenuProps {
  theme?: Theme;
  mode?: MenuMode;
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
  (
    e: 'collapse',
    collapsed: boolean,
    type: 'clickTrigger' | 'responsive'
  ): void;
  (e: 'menu-item-click', key: string): void;
  (e: 'sub-menu-click', key: string, openKeys: string[]): void;
}

export interface MenuSlots {
  default(): void;
}

export interface SubMenuProps {
  path?: string;
  title?: string;
  selectable?: boolean;
  popup?: boolean;
  popupMaxHeight?: PopupMaxHeight;
}

export interface SubMenuSlots {
  default(): void;
  title(): void;
  icon(): void;
  ['expand-icon-down'](): void;
}

export interface MenuItemProps {
  path?: string;
  disabled?: boolean;
}

export interface MenuItemSlots {
  default(): void;
  icon(): void;
  suffix(): void;
}

export interface MenuItemGroupProps {
  title?: string;
}

export interface MenuItemGroupSlots {
  default(): void;
  title(): void;
}

export type MenuMode = 'vertical' | 'horizontal';
export type PopupMaxHeight = boolean | number;
