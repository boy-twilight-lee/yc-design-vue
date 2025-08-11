import { Direction, ObjectData } from '@shared/type';
import { GridProps } from '../Grid';
import { PaginationProps } from '../Pagination';
import { VirtualListProps } from '../Select';
import { VNode } from 'vue';

export interface ListProps {
  data?: ObjectData[];
  size?: ListSize;
  bordered?: boolean;
  split?: boolean;
  loading?: boolean;
  hoverable?: boolean;
  paginationProps?: PaginationProps;
  gridProps?: GridProps;
  maxHeight?: number | string;
  bottomOffset?: number;
  virtualListProps?: VirtualListProps;
  scrollbar?: boolean;
}

export interface ListEmits {
  (e: 'scroll', ev: Event): void;
  (e: 'reach-bottom', ev: Event): void;
  (e: 'page-change', value: number): void;
  (e: 'page-size-change', value: number): void;
}

export interface ListSlots {
  empty?: () => VNode[];
  header?: () => VNode[];
  footer?: () => VNode[];
  default?: () => VNode[];
  'scroll-loading'?: () => VNode[];
  item?: (scope: { index: number; item: ObjectData }) => VNode[];
}

export interface ListItemProps {
  actionLayout?: Direction;
}

export interface ListItemSlots {
  default?: () => VNode[];
  meta?: () => VNode[];
  extra?: () => VNode[];
  actions?: () => VNode[];
}

export interface ListItemMetaProps {
  title?: string;
  description?: string;
}

export interface ListItemMetaSlots {
  avatar?: () => VNode[];
  title?: () => VNode[];
  description?: () => VNode[];
}

export type ListSize = 'small' | 'medium' | 'large';
