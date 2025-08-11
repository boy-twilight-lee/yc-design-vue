import { VNode } from 'vue';

export interface SpinProps {
  size?: number;
  loading?: boolean;
  dot?: boolean;
  tip?: string;
  hideIcon?: boolean;
  // 是否阻止焦点
  isSizeInherit?: boolean;
}

export interface SpinSlots {
  default?: () => VNode[];
  icon?: () => VNode[];
  tip?: () => VNode[];
}
