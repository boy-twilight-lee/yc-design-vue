export interface LinkProps {
    href?: string;
    icon?: boolean;
    status?: LinkStatus;
    hoverable?: boolean;
    disabled?: boolean;
    loading?: boolean;
}
export interface LinkEmits {
    (e: 'click', event: MouseEvent): void;
    (e: 'dblclick', event: MouseEvent): void;
    (e: 'contextmenu', event: MouseEvent): void;
}
export interface LinkSlots {
    default(): void;
    icon(): void;
}
export type LinkStatus = 'normal' | 'warning' | 'success' | 'danger';
