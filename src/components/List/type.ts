import { VNode } from 'vue';
import { Direction, RecordType, Size } from '@shared/type';
import { PaginationProps } from '@/components/Pagination';
import { VirtualListProps } from '@shared/components/VirtualList/type';

export interface ListProps {
  data?: RecordType[];
  size?: Exclude<Size, 'mini'>;
  bordered?: boolean;
  split?: boolean;
  loading?: boolean;
  hoverable?: boolean;
  paginationProps?: PaginationProps;
  maxHeight?: number | string;
  bottomOffset?: number;
  virtualListProps?: VirtualListProps;
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
  item?: (scope: { index: number; item: RecordType }) => VNode[];
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
