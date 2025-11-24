import { CSSProperties, VNode } from 'vue';

export interface StatisticProps {
  title?: string;
  value?: StatisticValue;
  format?: string;
  extra?: string;
  start?: boolean;
  easeing?: string;
  precision?: number;
  separator?: string;
  showGroupSeparator?: boolean;
  animation?: boolean;
  animationDuration?: number;
  valueFrom?: number;
  placeholder?: string;
  valueStyle?: CSSProperties;
  // 是否是倒计时
  isCountdown?: boolean;
}

export interface StatisticEmits {
  (e: 'finish'): void;
}

export interface StatisticSlots {
  title?: () => VNode[];
  prefix?: () => VNode[];
  suffix?: () => VNode[];
  extra?: () => VNode[];
  value?: () => VNode[];
}

export interface CountdownProps {
  title?: string;
  value?: number;
  now?: number;
  format?: string;
  start?: boolean;
  easeing?: string;
  valueStyle?: CSSProperties;
}

export interface CountDownEmits {
  (e: 'finish'): void;
}

export interface CountdownSlots {
  title?: () => VNode[];
}

export type StatisticValue = number | Date;
