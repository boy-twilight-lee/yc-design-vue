import { VNode } from 'vue';

export interface CommentProps {
  author?: string;
  avatar?: string;
  content?: string;
  datetime?: string;
  align?: CommentAlign;
}

export interface CommentSlots {
  avatar?: () => VNode[];
  author?: () => VNode[];
  datetime?: () => VNode[];
  content?: () => VNode[];
  actions?: () => VNode[];
  default?: () => VNode[][];
}

export type CommentAlign =
  | 'left'
  | 'right'
  | { datetime?: 'left' | 'right'; actions?: 'left' | 'right' };
