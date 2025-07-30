import { App } from 'vue';
import { default as _Pagination } from './Pagination.vue';
export type PaginationInstance = InstanceType<typeof _Pagination>;
export * from './type';
declare const Pagination: {
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./type').PaginationProps> & Readonly<{
        onChange?: ((current: number) => any) | undefined;
        "onUpdate:current"?: ((current: number) => any) | undefined;
        "onUpdate:pageSize"?: ((pageSize: number) => any) | undefined;
        "onPage-size-change"?: ((pageSize: number) => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
        change: (current: number) => any;
        "update:current": (current: number) => any;
        "update:pageSize": (pageSize: number) => any;
        "page-size-change": (pageSize: number) => any;
    }, import('vue').PublicProps, {
        size: import('..').Size;
        disabled: boolean;
        current: number;
        defaultCurrent: number;
        simple: boolean;
        pageSize: number;
        defaultPageSize: number;
        pageSizeOptions: number[];
        pageItemStyle: import('vue').CSSProperties;
        activePageItemStyle: import('vue').CSSProperties;
        baseSize: number;
        bufferSize: number;
        autoAdjust: boolean;
        hideOnSinglePage: boolean;
        showTotal: boolean;
        showMore: boolean;
        showJumper: boolean;
        showPageSize: boolean;
        pageSizeProps: import('..').SelectProps;
    }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('./type').PaginationProps> & Readonly<{
        onChange?: ((current: number) => any) | undefined;
        "onUpdate:current"?: ((current: number) => any) | undefined;
        "onUpdate:pageSize"?: ((pageSize: number) => any) | undefined;
        "onPage-size-change"?: ((pageSize: number) => any) | undefined;
    }>, {}, {}, {}, {}, {
        size: import('..').Size;
        disabled: boolean;
        current: number;
        defaultCurrent: number;
        simple: boolean;
        pageSize: number;
        defaultPageSize: number;
        pageSizeOptions: number[];
        pageItemStyle: import('vue').CSSProperties;
        activePageItemStyle: import('vue').CSSProperties;
        baseSize: number;
        bufferSize: number;
        autoAdjust: boolean;
        hideOnSinglePage: boolean;
        showTotal: boolean;
        showMore: boolean;
        showJumper: boolean;
        showPageSize: boolean;
        pageSizeProps: import('..').SelectProps;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('./type').PaginationProps> & Readonly<{
    onChange?: ((current: number) => any) | undefined;
    "onUpdate:current"?: ((current: number) => any) | undefined;
    "onUpdate:pageSize"?: ((pageSize: number) => any) | undefined;
    "onPage-size-change"?: ((pageSize: number) => any) | undefined;
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    change: (current: number) => any;
    "update:current": (current: number) => any;
    "update:pageSize": (pageSize: number) => any;
    "page-size-change": (pageSize: number) => any;
}, string, {
    size: import('..').Size;
    disabled: boolean;
    current: number;
    defaultCurrent: number;
    simple: boolean;
    pageSize: number;
    defaultPageSize: number;
    pageSizeOptions: number[];
    pageItemStyle: import('vue').CSSProperties;
    activePageItemStyle: import('vue').CSSProperties;
    baseSize: number;
    bufferSize: number;
    autoAdjust: boolean;
    hideOnSinglePage: boolean;
    showTotal: boolean;
    showMore: boolean;
    showJumper: boolean;
    showPageSize: boolean;
    pageSizeProps: import('..').SelectProps;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: Readonly<import('./type').PaginationSlots> & import('./type').PaginationSlots;
}) & {
    install: (app: App) => void;
};
declare module 'vue' {
    interface GlobalComponents {
        YcPagination: typeof Pagination;
    }
}
export default Pagination;
