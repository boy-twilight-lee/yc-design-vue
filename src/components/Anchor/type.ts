import { TargetContainer } from '@shared/type';
import { VNode } from 'vue';

export interface AnchorProps {
  boundary?: AnchorBoundary;
  lineLess?: boolean;
  scrollContainer?: TargetContainer;
  changeHash?: boolean;
  smooth?: boolean;
}

export interface AnchorSlots {
  default?: () => VNode[];
}

export interface AnchorLinkProps {
  title?: string;
  href?: string;
}

export interface AnchorLinkSlots {
  default?: () => VNode[];
  sublist?: () => VNode[];
}

export type AnchorBoundary = 'start' | 'end' | 'center' | 'nearest' | number;
