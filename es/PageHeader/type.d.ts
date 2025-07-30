export interface PageHeaderProp {
    title?: string;
    subtitle?: string;
    showBack?: boolean;
}
export interface PageHeaderEmits {
    (e: 'back', ev: Event): void;
}
export interface PageHeaderSlots {
    default(): void;
    breadcrumb(): void;
    ['back-icon']: void;
    title(): void;
    subtitle(): void;
    extra(): void;
}
