import { CSSProperties, VNode } from 'vue';
import { Size } from '@shared/type';

export interface CardProps {
  bordered?: boolean;
  loading?: boolean;
  hoverable?: boolean;
  size?: Exclude<Size, 'mini' | 'large'>;
  headerStyle?: CSSProperties;
  bodyStyle?: CSSProperties;
  title?: string;
  extra?: string;
}

export interface CardSlots {
  actions?: () => VNode[];
  cover?: () => VNode[];
  extra?: () => VNode[];
  title?: () => VNode[];
  default?: () => VNode[];
}

export interface CardMetaProps {
  title?: string;
  description?: string;
}

export interface CardMetaSlots {
  description?: () => VNode[];
  title?: () => VNode[];
  avatar?: () => VNode[];
}

export interface CardGridProps {
  hoverable?: boolean;
}

export interface CardGridSlots {
  default?: () => VNode[];
}
