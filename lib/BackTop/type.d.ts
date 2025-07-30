import { TargetContainer } from '../_shared/type';
export interface BackTopProps {
    visibleHeight?: number;
    targetContainer?: TargetContainer;
    easeing?: string;
    duration?: number;
}
export interface BackTopSlots {
    default(): void;
}
