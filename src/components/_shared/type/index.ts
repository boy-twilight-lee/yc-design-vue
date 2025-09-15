import { RenderFunction } from 'vue';

export type Size = 'mini' | 'small' | 'medium' | 'large';

export type Direction = 'vertical' | 'horizontal';

export type Theme = 'light' | 'dark';

export type Shape = 'square' | 'round' | 'circle';

export type TargetContainer = string | HTMLElement;

export type PopupContainer = string | HTMLElement;

export type ClassName =
  | string
  | Record<string, boolean>
  | (string | Record<string, boolean>)[];

export type RenderContent = string | ObjectData[] | RenderFunction;

export type ObjectData = Record<string, any>;

export type Required<T> = {
  [P in keyof T]-?: T[P] extends object ? Required<T[P]> : T[P];
};
