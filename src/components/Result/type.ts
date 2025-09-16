import { VNode } from 'vue';

export interface ResultProps {
  status?: ResultStatus;
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

export type ResultStatus =
  | 'success'
  | 'warning'
  | 'error'
  | 'info'
  | '403'
  | '404'
  | '500'
  | null;
