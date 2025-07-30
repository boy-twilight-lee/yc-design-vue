import { CSSProperties } from 'vue';
import { Size } from '../_shared/type';
import { SelectProps } from '../Select';
export interface PaginationProps {
    total: number;
    current?: number;
    defaultCurrent?: number;
    pageSize?: number;
    defaultPageSize?: number;
    disabled?: boolean;
    hideOnSinglePage?: boolean;
    simple?: boolean;
    showTotal?: boolean;
    showMore?: boolean;
    showJumper?: boolean;
    showPageSize?: boolean;
    pageSizeOptions?: number[];
    pageSizeProps?: SelectProps;
    size?: Size;
    pageItemStyle?: CSSProperties;
    activePageItemStyle?: CSSProperties;
    baseSize?: number;
    bufferSize?: number;
    autoAdjust?: boolean;
}
export interface PaginationEmits {
    (e: 'update:current', current: number): void;
    (e: 'update:pageSize', pageSize: number): void;
    (e: 'change', current: number): void;
    (e: 'page-size-change', pageSize: number): void;
}
export interface PaginationSlots {
    total(scope: {
        total: number;
    }): void;
    ['page-item-ellipsis'](): void;
    ['page-item-step'](scope: {
        type: 'previous' | 'next';
    }): void;
    ['page-item'](scope: {
        page: number;
    }): void;
}
