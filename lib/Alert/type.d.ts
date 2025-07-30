export interface AlertProps {
    type?: AlertType;
    showIcon?: boolean;
    closable?: boolean;
    title?: string;
    banner?: boolean;
    center?: boolean;
}
export interface AlertEmits {
    (e: 'close', ev: MouseEvent): void;
    (e: 'after-close'): void;
}
export interface AlertSlots {
    default(): void;
    icon(): void;
    title(): void;
    action(): void;
    ['close-element'](): void;
}
export type AlertType = 'warning' | 'success' | 'info' | 'error' | 'normal';
