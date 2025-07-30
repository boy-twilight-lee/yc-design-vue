export interface OverflowListProps {
    min?: number;
    margin?: number;
    from?: OverflowListFrom;
}
export interface OverflowListEmits {
    (e: 'change', value: number): void;
}
export interface OverflowListSlots {
    default(): void;
    overflow(): void;
}
export type OverflowListFrom = 'start' | 'end';
