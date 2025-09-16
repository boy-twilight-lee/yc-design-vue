import { Size } from '@shared/type';

export interface ProgressProps {
  type?: ProgressType;
  size?: Size;
  percent?: number;
  steps?: number;
  animation?: boolean;
  strokeWidth?: number;
  width?: number;
  color?: ProgressColor;
  trackColor?: string;
  showText?: boolean;
  status?: ProgressStatus;
}

export type ProgressType = 'line' | 'circle';

export type ProgressColor = string | Record<string, string>;

export type ProgressStatus = 'success' | 'warning' | 'danger' | 'normal';
