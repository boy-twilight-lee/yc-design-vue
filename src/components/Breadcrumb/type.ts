import { DropdownProps } from '@/components/Dropdown';
import { VNode } from 'vue';
export interface BreadcrumbProps {
  maxCount?: number;
  routes?: BreadcrumbRoute[];
  separator?: BreadcrumbSeparator;
  customUrl?: CustomUrl;
}

export interface BreadcrumbSlots {
  default?: () => VNode[];
  'item-render': (scope: {
    route: BreadcrumbRoute;
    routes: BreadcrumbRoute[];
    paths: string[];
  }) => VNode[];
  'more-icon'?: () => VNode[];
  separator?: () => VNode[];
}

export interface BreadcrumbItemProps {
  separator?: BreadcrumbSeparator;
  droplist?: BreadcrumbRoute[];
  dropdownProps?: DropdownProps;
  path?: string;
  showSeparator?: boolean;
}

export interface BreadcrumbItemSlots {
  default?: () => VNode[];
  droplist?: () => VNode[];
  separator?: () => VNode[];
}

export interface BreadcrumbRoute {
  label?: string;
  path?: string;
  index?: number;
  children?: BreadcrumbRoute[];
}

export type CustomUrl = (path: string[]) => string;

export type BreadcrumbSeparator = string | number;
