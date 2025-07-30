import { Direction } from '../_shared/type';
export interface DividerProps {
    direction?: Direction;
    orientation?: Orientation;
    type?: DividerType;
    size?: number;
    margin?: number;
}
export interface DividerSlots {
    default(): void;
}
export type Orientation = 'left' | 'center' | 'right';
export type DividerType = 'solid' | 'dashed' | 'dotted' | 'double';
