import { VNode } from 'vue';

export interface ResultProps {
  status?: Status;
  title?: string;
  subtitle?: string;
}

export interface ResultSlots {
  icon?: () => VNode[];
  title?: () => VNode[];
  subtitle?: () => VNode[];
  default?: () => VNode[];
  extra?: () => VNode[];
}

type Status =
  | 'success'
  | 'warning'
  | 'error'
  | 'info'
  | '403'
  | '404'
  | '500'
  | null;
