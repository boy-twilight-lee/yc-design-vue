import { Direction, Size } from '../_shared/type';
export interface SpaceProps {
    align?: SpaceAlign;
    direction?: Direction;
    wrap?: boolean;
    fill?: boolean;
    size?: Size | number;
}
export interface SpaceSlots {
    default(): void;
    split(): void;
}
export type SpaceAlign = 'start' | 'end' | 'center' | 'baseline';
