import { DropdownProps } from '../Dropdown';
export interface BreadcrumbProps {
    maxCount?: number;
    routes?: BreadcrumbRoute[];
    separator?: BreadcrumbSeparator;
    customUrl?: CustomUrl;
}
export interface BreadcrumbSlots {
    default(): void;
    ['item-render'](scope: {
        route: BreadcrumbRoute;
        routes: BreadcrumbRoute[];
        paths: string[];
    }): void;
    ['more-icon'](): void;
    separator(): void;
}
export interface BreadcrumbItemProps {
    separator?: BreadcrumbSeparator;
    droplist?: BreadcrumbRoute[];
    dropdownProps?: DropdownProps;
    path?: string;
    showSeparator?: boolean;
}
export interface BreadcrumbItemSlots {
    default(): void;
    droplist(): void;
    separator(): void;
}
export interface BreadcrumbRoute {
    label?: string;
    path?: string;
    index?: number;
    children?: BreadcrumbRoute[];
}
export type CustomUrl = (path: string[]) => string;
export type BreadcrumbSeparator = string | number;
