import { Direction } from '../_shared/type';
export interface TimelineProps {
    reverse?: boolean;
    direction?: Direction;
    mode?: TimelineMode;
    pending?: boolean | string;
    labelPosition?: TimelineLabelPosition;
}
export interface TimelineSlots {
    dot(): void;
    default(): void;
}
export interface TimelineItemProps {
    dotColor?: string;
    dotType?: TimelineDotType;
    lineType?: TimelineLineType;
    lineColor?: string;
    label?: string;
    position?: TimelinePositon;
    isGhost?: boolean;
}
export interface TimelineItemSlots {
    dot(): void;
    label(): void;
    default(): void;
}
export type TimelineMode = 'left' | 'right' | 'top' | 'bottom' | 'alternate';
export type TimelineLabelPosition = 'relative' | 'same';
export type TimelineDotType = 'hollow' | 'solid';
export type TimelineLineType = 'solid' | 'dashed' | 'dotted';
export type TimelinePositon = 'left' | 'right' | 'top' | 'bottom';
