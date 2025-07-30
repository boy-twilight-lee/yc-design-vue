import { CSSProperties } from 'vue';
export interface BadgeProps {
    text?: string;
    dot?: boolean;
    dotStyle?: CSSProperties;
    maxCount?: number;
    offset?: number[];
    color?: string;
    status?: BadgeStatus;
    count?: number;
}
export interface BadgeSlots {
    default(): void;
    content(): void;
}
export type BadgeStatus = 'normal' | 'processing' | 'success' | 'warning' | 'danger';
