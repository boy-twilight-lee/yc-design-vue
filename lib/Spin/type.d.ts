export interface SpinProps {
    size?: number;
    loading?: boolean;
    dot?: boolean;
    tip?: string;
    hideIcon?: boolean;
    isSizeInherit?: boolean;
}
export interface SpinSlots {
    default(): void;
    icon(): void;
    tip(): void;
}
