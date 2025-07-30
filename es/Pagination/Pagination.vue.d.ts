import { PaginationProps, PaginationSlots } from './type';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Readonly<PaginationSlots> & PaginationSlots;
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<PaginationProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    change: (current: number) => any;
    "update:current": (current: number) => any;
    "update:pageSize": (pageSize: number) => any;
    "page-size-change": (pageSize: number) => any;
}, string, import('vue').PublicProps, Readonly<PaginationProps> & Readonly<{
    onChange?: ((current: number) => any) | undefined;
    "onUpdate:current"?: ((current: number) => any) | undefined;
    "onUpdate:pageSize"?: ((pageSize: number) => any) | undefined;
    "onPage-size-change"?: ((pageSize: number) => any) | undefined;
}>, {
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
    pageSizeProps: import('../Select').SelectProps;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
