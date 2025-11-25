import { VNode } from 'vue';
import { ResponsiveValue } from '@shared/type';

export interface GridProps {
  cols?: number | ResponsiveValue;
  rowGap?: number | ResponsiveValue;
  colGap?: number | ResponsiveValue;
  collapsed?: boolean;
  collapsedRows?: number;
}

export interface GridSlots {
  default?: () => VNode[];
}

export interface GridItemProps {
  span?: number | ResponsiveValue;
  offset?: number | ResponsiveValue;
  suffix?: boolean;
}

export interface GridItemSlots {
  default?: (scope: { overflow: boolean }) => void;
}

export interface GridRowProps {
  gutter?: GridRowGutter | [GridRowGutter, GridRowGutter];
  justify?: GridRowJustify;
  align?: GridRowAlign;
  div?: boolean;
  wrap?: boolean;
}

export interface GridRowSlots {
  default?: () => VNode[];
}

export interface GridColProps {
  span?: number | ResponsiveValue;
  offset?: number | ResponsiveValue;
  order?: number | ResponsiveValue;
  flex?: GridColFlex | ResponsiveValue<GridColFlex>;
}

export interface GridColSlots {
  default?: () => VNode[];
}

export type GridRowGutter = number | ResponsiveValue;

export type GridRowJustify =
  | 'start'
  | 'center'
  | 'end'
  | 'space-around'
  | 'space-between';

export type GridRowAlign = 'start' | 'center' | 'end' | 'stretch';

export type GridColFlex = number | string | 'initial' | 'auto' | 'none';
