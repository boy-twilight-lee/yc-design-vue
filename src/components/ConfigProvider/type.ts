import { Size, PopupContainer, RecordType } from '@shared/type';
import { VNode } from 'vue';
export interface ConfigProviderProps {
  locale?: RecordType;
  zIndex?: number;
  size?: Size;
  popupContainer?: PopupContainer;
}

export interface ConfigconfigSlots {
  default?: () => VNode[];
}
