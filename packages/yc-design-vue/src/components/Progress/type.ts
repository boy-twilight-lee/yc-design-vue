import { Size, Status } from '@shared/type';

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
  status?: Status;
}

export type ProgressType = 'line' | 'circle';

export type ProgressColor = string | Record<string, string>;
