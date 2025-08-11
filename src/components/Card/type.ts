import { CSSProperties, VNode } from 'vue';

export interface CardProps {
  bordered?: boolean;
  loading?: boolean;
  hoverable?: boolean;
  size?: CardSize;
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

export type CardSize = 'medium' | 'small';
