export interface GridProps {
    cols?: number | ResponsiveValue;
    rowGap?: number | ResponsiveValue;
    colGap?: number | ResponsiveValue;
    collapsed?: boolean;
    collapsedRows?: number;
}
export interface GridSlots {
    default(): void;
}
export interface GridItemProps {
    span?: number | ResponsiveValue;
    offset?: number | ResponsiveValue;
    suffix?: boolean;
}
export interface GridItemSlots {
    default(scope: {
        overflow: boolean;
    }): void;
}
export interface GridRowProps {
    gutter?: Gutter | [Gutter, Gutter];
    justify?: GridRowJustify;
    align?: GridRowAlign;
    div?: boolean;
    wrap?: boolean;
}
export interface GridRowSlots {
    default(): void;
}
export interface GridColProps {
    span?: number | ResponsiveValue;
    offset?: number | ResponsiveValue;
    order?: number | ResponsiveValue;
    flex?: GridColFlex | ResponsiveValue;
}
export interface GridColSlots {
    default(): void;
}
export type ResponsiveValue<T = number | string> = {
    xs?: T;
    sm?: T;
    md?: T;
    lg?: T;
    xl?: T;
    xxl?: T;
};
export type GridRowJustify = 'start' | 'center' | 'end' | 'space-around' | 'space-between';
export type GridRowAlign = 'start' | 'center' | 'end' | 'stretch';
export type BreakpointName = 'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs';
export type GridColFlex = number | string | 'initial' | 'auto' | 'none';
export type Gutter = number | ResponsiveValue;
