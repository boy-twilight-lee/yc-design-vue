import { ListProps, ListSlots } from './type';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Readonly<ListSlots> & ListSlots;
    refs: {
        realListRef: ({
            $: import('vue').ComponentInternalInstance;
            $data: {};
            $props: {
                readonly type?: import('../Scrollbar').TackType | undefined;
                readonly outerClass?: import('../_shared/type').ClassName | undefined;
                readonly outerStyle?: import('vue').CSSProperties | undefined;
                readonly scrollbar?: boolean | undefined;
                readonly onScroll?: ((left: number, top: number, ev: Event) => any) | undefined;
            } & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps;
            $attrs: {
                [x: string]: unknown;
            };
            $refs: {
                [x: string]: unknown;
            } & {
                scrollRef: HTMLDivElement;
                contentRef: HTMLDivElement;
            };
            $slots: Readonly<{
                [name: string]: import('vue').Slot<any> | undefined;
            }>;
            $root: import('vue').ComponentPublicInstance | null;
            $parent: import('vue').ComponentPublicInstance | null;
            $host: Element | null;
            $emit: (event: "scroll", left: number, top: number, ev: Event) => void;
            $el: any;
            $options: import('vue').ComponentOptionsBase<Readonly<import('../Scrollbar').ScrollbarProps> & Readonly<{
                onScroll?: ((left: number, top: number, ev: Event) => any) | undefined;
            }>, {
                scrollTo(options: ScrollOptions): void;
                scrollLeft(left: number): void;
                scrollTop(top: number): void;
                getScrollRef(): HTMLDivElement;
            }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
                scroll: (left: number, top: number, ev: Event) => any;
            }, string, {
                scrollbar: boolean;
                type: import('../Scrollbar').TackType;
                outerClass: import('../_shared/type').ClassName;
                outerStyle: import('vue').CSSProperties;
            }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & {
                beforeCreate?: (() => void) | (() => void)[];
                created?: (() => void) | (() => void)[];
                beforeMount?: (() => void) | (() => void)[];
                mounted?: (() => void) | (() => void)[];
                beforeUpdate?: (() => void) | (() => void)[];
                updated?: (() => void) | (() => void)[];
                activated?: (() => void) | (() => void)[];
                deactivated?: (() => void) | (() => void)[];
                beforeDestroy?: (() => void) | (() => void)[];
                beforeUnmount?: (() => void) | (() => void)[];
                destroyed?: (() => void) | (() => void)[];
                unmounted?: (() => void) | (() => void)[];
                renderTracked?: ((e: import('vue').DebuggerEvent) => void) | ((e: import('vue').DebuggerEvent) => void)[];
                renderTriggered?: ((e: import('vue').DebuggerEvent) => void) | ((e: import('vue').DebuggerEvent) => void)[];
                errorCaptured?: ((err: unknown, instance: import('vue').ComponentPublicInstance | null, info: string) => boolean | void) | ((err: unknown, instance: import('vue').ComponentPublicInstance | null, info: string) => boolean | void)[];
            };
            $forceUpdate: () => void;
            $nextTick: typeof import('vue').nextTick;
            $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (...args: [R, R, import('@vue/reactivity').OnCleanup]) => any : (...args: [any, any, import('@vue/reactivity').OnCleanup]) => any, options?: import('vue').WatchOptions): import('vue').WatchStopHandle;
        } & Readonly<{
            scrollbar: boolean;
            type: import('../Scrollbar').TackType;
            outerClass: import('../_shared/type').ClassName;
            outerStyle: import('vue').CSSProperties;
        }> & Omit<Readonly<import('../Scrollbar').ScrollbarProps> & Readonly<{
            onScroll?: ((left: number, top: number, ev: Event) => any) | undefined;
        }>, "scrollTop" | "scrollLeft" | ("scrollbar" | "type" | "outerClass" | "outerStyle") | "scrollTo" | "getScrollRef"> & import('vue').ShallowUnwrapRef<{
            scrollTo(options: ScrollOptions): void;
            scrollLeft(left: number): void;
            scrollTop(top: number): void;
            getScrollRef(): HTMLDivElement;
        }> & {} & import('vue').ComponentCustomProperties & {} & {
            $slots: Readonly<import('../Scrollbar').ScrollbarSlots> & import('../Scrollbar').ScrollbarSlots;
        }) | null;
        virtualListRef: ({
            $: import('vue').ComponentInternalInstance;
            $data: {};
            $props: {
                readonly data: import('../_shared/type').ObjectData[];
                readonly virtualListProps: import('..').VirtualListProps;
            } & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps;
            $attrs: {
                [x: string]: unknown;
            };
            $refs: {
                [x: string]: unknown;
            };
            $slots: Readonly<{
                [name: string]: import('vue').Slot<any> | undefined;
            }>;
            $root: import('vue').ComponentPublicInstance | null;
            $parent: import('vue').ComponentPublicInstance | null;
            $host: Element | null;
            $emit: (event: string, ...args: any[]) => void;
            $el: HTMLDivElement;
            $options: import('vue').ComponentOptionsBase<Readonly<{
                data: import('../_shared/type').ObjectData[];
                virtualListProps: import('..').VirtualListProps;
            }> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & {
                beforeCreate?: (() => void) | (() => void)[];
                created?: (() => void) | (() => void)[];
                beforeMount?: (() => void) | (() => void)[];
                mounted?: (() => void) | (() => void)[];
                beforeUpdate?: (() => void) | (() => void)[];
                updated?: (() => void) | (() => void)[];
                activated?: (() => void) | (() => void)[];
                deactivated?: (() => void) | (() => void)[];
                beforeDestroy?: (() => void) | (() => void)[];
                beforeUnmount?: (() => void) | (() => void)[];
                destroyed?: (() => void) | (() => void)[];
                unmounted?: (() => void) | (() => void)[];
                renderTracked?: ((e: import('vue').DebuggerEvent) => void) | ((e: import('vue').DebuggerEvent) => void)[];
                renderTriggered?: ((e: import('vue').DebuggerEvent) => void) | ((e: import('vue').DebuggerEvent) => void)[];
                errorCaptured?: ((err: unknown, instance: import('vue').ComponentPublicInstance | null, info: string) => boolean | void) | ((err: unknown, instance: import('vue').ComponentPublicInstance | null, info: string) => boolean | void)[];
            };
            $forceUpdate: () => void;
            $nextTick: typeof import('vue').nextTick;
            $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (...args: [R, R, import('@vue/reactivity').OnCleanup]) => any : (...args: [any, any, import('@vue/reactivity').OnCleanup]) => any, options?: import('vue').WatchOptions): import('vue').WatchStopHandle;
        } & Readonly<{}> & Omit<Readonly<{
            data: import('../_shared/type').ObjectData[];
            virtualListProps: import('..').VirtualListProps;
        }> & Readonly<{}>, never> & import('vue').ShallowUnwrapRef<{}> & {} & import('vue').ComponentCustomProperties & {} & {
            $slots: {
                item?(_: {
                    index: number;
                    item: import('../_shared/type').ObjectData;
                }): any;
            };
        }) | null;
    };
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<ListProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    scroll: (ev: Event) => any;
    "page-size-change": (value: number) => any;
    "reach-bottom": (ev: Event) => any;
    "page-change": (value: number) => any;
}, string, import('vue').PublicProps, Readonly<ListProps> & Readonly<{
    onScroll?: ((ev: Event) => any) | undefined;
    "onPage-size-change"?: ((value: number) => any) | undefined;
    "onReach-bottom"?: ((ev: Event) => any) | undefined;
    "onPage-change"?: ((value: number) => any) | undefined;
}>, {
    size: import('./type').ListSize;
    loading: boolean;
    scrollbar: boolean;
    split: boolean;
    data: import('../_shared/type').ObjectData[];
    maxHeight: number | string;
    bordered: boolean;
    virtualListProps: import('..').VirtualListProps;
    hoverable: boolean;
    paginationProps: import('../Pagination').PaginationProps;
    gridProps: import('../Grid').GridProps;
    bottomOffset: number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    realListRef: ({
        $: import('vue').ComponentInternalInstance;
        $data: {};
        $props: {
            readonly type?: import('../Scrollbar').TackType | undefined;
            readonly outerClass?: import('../_shared/type').ClassName | undefined;
            readonly outerStyle?: import('vue').CSSProperties | undefined;
            readonly scrollbar?: boolean | undefined;
            readonly onScroll?: ((left: number, top: number, ev: Event) => any) | undefined;
        } & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        } & {
            scrollRef: HTMLDivElement;
            contentRef: HTMLDivElement;
        };
        $slots: Readonly<{
            [name: string]: import('vue').Slot<any> | undefined;
        }>;
        $root: import('vue').ComponentPublicInstance | null;
        $parent: import('vue').ComponentPublicInstance | null;
        $host: Element | null;
        $emit: (event: "scroll", left: number, top: number, ev: Event) => void;
        $el: any;
        $options: import('vue').ComponentOptionsBase<Readonly<import('../Scrollbar').ScrollbarProps> & Readonly<{
            onScroll?: ((left: number, top: number, ev: Event) => any) | undefined;
        }>, {
            scrollTo(options: ScrollOptions): void;
            scrollLeft(left: number): void;
            scrollTop(top: number): void;
            getScrollRef(): HTMLDivElement;
        }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
            scroll: (left: number, top: number, ev: Event) => any;
        }, string, {
            scrollbar: boolean;
            type: import('../Scrollbar').TackType;
            outerClass: import('../_shared/type').ClassName;
            outerStyle: import('vue').CSSProperties;
        }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & {
            beforeCreate?: (() => void) | (() => void)[];
            created?: (() => void) | (() => void)[];
            beforeMount?: (() => void) | (() => void)[];
            mounted?: (() => void) | (() => void)[];
            beforeUpdate?: (() => void) | (() => void)[];
            updated?: (() => void) | (() => void)[];
            activated?: (() => void) | (() => void)[];
            deactivated?: (() => void) | (() => void)[];
            beforeDestroy?: (() => void) | (() => void)[];
            beforeUnmount?: (() => void) | (() => void)[];
            destroyed?: (() => void) | (() => void)[];
            unmounted?: (() => void) | (() => void)[];
            renderTracked?: ((e: import('vue').DebuggerEvent) => void) | ((e: import('vue').DebuggerEvent) => void)[];
            renderTriggered?: ((e: import('vue').DebuggerEvent) => void) | ((e: import('vue').DebuggerEvent) => void)[];
            errorCaptured?: ((err: unknown, instance: import('vue').ComponentPublicInstance | null, info: string) => boolean | void) | ((err: unknown, instance: import('vue').ComponentPublicInstance | null, info: string) => boolean | void)[];
        };
        $forceUpdate: () => void;
        $nextTick: typeof import('vue').nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (...args: [R, R, import('@vue/reactivity').OnCleanup]) => any : (...args: [any, any, import('@vue/reactivity').OnCleanup]) => any, options?: import('vue').WatchOptions): import('vue').WatchStopHandle;
    } & Readonly<{
        scrollbar: boolean;
        type: import('../Scrollbar').TackType;
        outerClass: import('../_shared/type').ClassName;
        outerStyle: import('vue').CSSProperties;
    }> & Omit<Readonly<import('../Scrollbar').ScrollbarProps> & Readonly<{
        onScroll?: ((left: number, top: number, ev: Event) => any) | undefined;
    }>, "scrollTop" | "scrollLeft" | ("scrollbar" | "type" | "outerClass" | "outerStyle") | "scrollTo" | "getScrollRef"> & import('vue').ShallowUnwrapRef<{
        scrollTo(options: ScrollOptions): void;
        scrollLeft(left: number): void;
        scrollTop(top: number): void;
        getScrollRef(): HTMLDivElement;
    }> & {} & import('vue').ComponentCustomProperties & {} & {
        $slots: Readonly<import('../Scrollbar').ScrollbarSlots> & import('../Scrollbar').ScrollbarSlots;
    }) | null;
    virtualListRef: ({
        $: import('vue').ComponentInternalInstance;
        $data: {};
        $props: {
            readonly data: import('../_shared/type').ObjectData[];
            readonly virtualListProps: import('..').VirtualListProps;
        } & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import('vue').Slot<any> | undefined;
        }>;
        $root: import('vue').ComponentPublicInstance | null;
        $parent: import('vue').ComponentPublicInstance | null;
        $host: Element | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: HTMLDivElement;
        $options: import('vue').ComponentOptionsBase<Readonly<{
            data: import('../_shared/type').ObjectData[];
            virtualListProps: import('..').VirtualListProps;
        }> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & {
            beforeCreate?: (() => void) | (() => void)[];
            created?: (() => void) | (() => void)[];
            beforeMount?: (() => void) | (() => void)[];
            mounted?: (() => void) | (() => void)[];
            beforeUpdate?: (() => void) | (() => void)[];
            updated?: (() => void) | (() => void)[];
            activated?: (() => void) | (() => void)[];
            deactivated?: (() => void) | (() => void)[];
            beforeDestroy?: (() => void) | (() => void)[];
            beforeUnmount?: (() => void) | (() => void)[];
            destroyed?: (() => void) | (() => void)[];
            unmounted?: (() => void) | (() => void)[];
            renderTracked?: ((e: import('vue').DebuggerEvent) => void) | ((e: import('vue').DebuggerEvent) => void)[];
            renderTriggered?: ((e: import('vue').DebuggerEvent) => void) | ((e: import('vue').DebuggerEvent) => void)[];
            errorCaptured?: ((err: unknown, instance: import('vue').ComponentPublicInstance | null, info: string) => boolean | void) | ((err: unknown, instance: import('vue').ComponentPublicInstance | null, info: string) => boolean | void)[];
        };
        $forceUpdate: () => void;
        $nextTick: typeof import('vue').nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (...args: [R, R, import('@vue/reactivity').OnCleanup]) => any : (...args: [any, any, import('@vue/reactivity').OnCleanup]) => any, options?: import('vue').WatchOptions): import('vue').WatchStopHandle;
    } & Readonly<{}> & Omit<Readonly<{
        data: import('../_shared/type').ObjectData[];
        virtualListProps: import('..').VirtualListProps;
    }> & Readonly<{}>, never> & import('vue').ShallowUnwrapRef<{}> & {} & import('vue').ComponentCustomProperties & {} & {
        $slots: {
            item?(_: {
                index: number;
                item: import('../_shared/type').ObjectData;
            }): any;
        };
    }) | null;
}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
