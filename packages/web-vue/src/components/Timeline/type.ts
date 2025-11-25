import { VNode } from 'vue';
import { Direction, Position } from '@shared/type';

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
  position?: Position;
  isGhost?: boolean;
}

export interface TimelineItemSlots {
  dot?: () => VNode[];
  label?: () => VNode[];
  default?: () => VNode[];
}

export type TimelineMode = Position | 'alternate';

export type TimelineLabelPosition = 'relative' | 'same';

export type TimelineDotType = 'hollow' | 'solid';

export type TimelineLineType = 'solid' | 'dashed' | 'dotted';
