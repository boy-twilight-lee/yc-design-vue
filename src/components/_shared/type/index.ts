import { RenderFunction } from 'vue';

export type Size = 'mini' | 'small' | 'medium' | 'large';

export type Direction = 'vertical' | 'horizontal';

export type Theme = 'light' | 'dark';

export type Shape = 'square' | 'round' | 'circle';

export type ObjectFit = 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';

export type BreakpointName = 'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs';

export type ResponsiveValue<T = number | string> = {
  xs?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  xxl?: T;
};

export type TargetContainer = string | HTMLElement;

export type PopupContainer = string | HTMLElement;

export type PopupMaxHeight = boolean | number;

export type EventTrigger = 'click' | 'hover';

export type PopupPosition =
  | 'top'
  | 'tl'
  | 'tr'
  | 'bottom'
  | 'bl'
  | 'br'
  | 'left'
  | 'lt'
  | 'lb'
  | 'right'
  | 'rt'
  | 'rb';

export type ClassName =
  | string
  | Record<string, boolean>
  | (string | Record<string, boolean>)[];

export type RenderContent = string | ObjectType[] | RenderFunction;

export type ObjectType = Record<string, any>;

export type FilterOption<T> = (inputValue: string, option: T) => boolean;

export type Format<T> = (value: T) => string;

export type FallBack<K, R> = (value: K) => R;

export type Required<T> = {
  [P in keyof T]-?: T[P] extends object ? Required<T[P]> : T[P];
};
