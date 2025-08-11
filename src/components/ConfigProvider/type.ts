import { Size, PopupContainer } from '@shared/type';
import { VNode } from 'vue';
export interface ConfigProviderProps {
  zIndex?: number;
  size?: Size;
  popupContainer?: PopupContainer;
  updateAtScroll?: boolean;
  scrollToClose?: boolean;
  exchangeTime?: boolean;
}

export interface ConfigconfigSlots {
  default?: () => VNode[];
  loading?: () => VNode[];
  empty?: (scope: { component: EmptyComponent }) => VNode[];
}

export type EmptyComponent = 'Select' | 'List' | 'Transfer';
