import { CSSProperties } from 'vue';
export interface CardProps {
    bordered?: boolean;
    loading?: boolean;
    hoverable?: boolean;
    size?: CardSize;
    headerStyle?: CSSProperties;
    bodyStyle?: CSSProperties;
    title?: string;
    extra?: string;
}
export interface CardSlots {
    actions(): void;
    cover(): void;
    extra(): void;
    title(): void;
    default(): void;
}
export interface CardMetaProps {
    title?: string;
    description?: string;
}
export interface CardMetaSlots {
    description(): void;
    title(): void;
    avatar(): void;
}
export interface CardGridProps {
    hoverable?: boolean;
}
export interface CardGridSlots {
    default(): void;
}
export type CardSize = 'medium' | 'small';
