import { TargetContainer } from '../_shared/type';
export interface AnchorProps {
    boundary?: AnchorBoundary;
    lineLess?: boolean;
    scrollContainer?: TargetContainer;
    changeHash?: boolean;
    smooth?: boolean;
}
export interface AnchorSlots {
    default(): void;
}
export interface AnchorLinkProps {
    title?: string;
    href?: string;
}
export interface AnchorLinkSlots {
    default(): void;
    sublist(): void;
}
export type AnchorBoundary = 'start' | 'end' | 'center' | 'nearest' | number;
