import { Direction } from '@shared/type';
import { VNode } from 'vue';

export interface TimelineProps {
  reverse?: boolean;
  direction?: Direction;
  mode?: TimelineMode;
  pending?: boolean | string;
  labelPosition?: TimelineLabelPosition;
}

export interface TimelineSlots {
  dot?: () => VNode[];
  default?: () => VNode[];
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
  dot?: () => VNode[];
  label?: () => VNode[];
  default?: () => VNode[];
}

export type TimelineMode = 'left' | 'right' | 'top' | 'bottom' | 'alternate';
export type TimelineLabelPosition = 'relative' | 'same';
export type TimelineDotType = 'hollow' | 'solid';
export type TimelineLineType = 'solid' | 'dashed' | 'dotted';
export type TimelinePositon = 'left' | 'right' | 'top' | 'bottom';
