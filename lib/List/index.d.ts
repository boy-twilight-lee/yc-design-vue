import { App } from 'vue';
import { default as _List } from './List.vue';
import { default as _ListItem } from './ListItem.vue';
import { default as _ListItemMeta } from './ListItemMeta.vue';
export type ListInstance = InstanceType<typeof _List>;
export type ListItemInstance = InstanceType<typeof _ListItem>;
export type ListItemMetaInstance = InstanceType<typeof _ListItemMeta>;
export * from './type';
declare const List: {
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./type').ListProps> & Readonly<{
        onScroll?: ((ev: Event) => any) | undefined;
        "onPage-size-change"?: ((value: number) => any) | undefined;
        "onReach-bottom"?: ((ev: Event) => any) | undefined;
        "onPage-change"?: ((value: number) => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
        scroll: (ev: Event) => any;
        "page-size-change": (value: number) => any;
        "reach-bottom": (ev: Event) => any;
        "page-change": (value: number) => any;
    }, import('vue').PublicProps, {
        size: import('./type').ListSize;
        loading: boolean;
        scrollbar: boolean;
        split: boolean;
        data: import('../_shared/type').ObjectData[];
        maxHeight: number | string;
        bordered: boolean;
        virtualListProps: import('..').VirtualListProps;
        hoverable: boolean;
        paginationProps: import('..').PaginationProps;
        gridProps: import('..').GridProps;
        bottomOffset: number;
    }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {
        realListRef: ({
            $: import('vue').ComponentInternalInstance;
            $data: {};
            $props: {
                readonly type?: import('..').TackType | undefined;
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
            $options: import('vue').ComponentOptionsBase<Readonly<import('..').ScrollbarProps> & Readonly<{
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
                type: import('..').TackType;
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
            type: import('..').TackType;
            outerClass: import('../_shared/type').ClassName;
            outerStyle: import('vue').CSSProperties;
        }> & Omit<Readonly<import('..').ScrollbarProps> & Readonly<{
            onScroll?: ((left: number, top: number, ev: Event) => any) | undefined;
        }>, "scrollTop" | "scrollLeft" | ("scrollbar" | "type" | "outerClass" | "outerStyle") | "scrollTo" | "getScrollRef"> & import('vue').ShallowUnwrapRef<{
            scrollTo(options: ScrollOptions): void;
            scrollLeft(left: number): void;
            scrollTop(top: number): void;
            getScrollRef(): HTMLDivElement;
        }> & {} & import('vue').ComponentCustomProperties & {} & {
            $slots: Readonly<import('..').ScrollbarSlots> & import('..').ScrollbarSlots;
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
    }, HTMLDivElement, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('./type').ListProps> & Readonly<{
        onScroll?: ((ev: Event) => any) | undefined;
        "onPage-size-change"?: ((value: number) => any) | undefined;
        "onReach-bottom"?: ((ev: Event) => any) | undefined;
        "onPage-change"?: ((value: number) => any) | undefined;
    }>, {}, {}, {}, {}, {
        size: import('./type').ListSize;
        loading: boolean;
        scrollbar: boolean;
        split: boolean;
        data: import('../_shared/type').ObjectData[];
        maxHeight: number | string;
        bordered: boolean;
        virtualListProps: import('..').VirtualListProps;
        hoverable: boolean;
        paginationProps: import('..').PaginationProps;
        gridProps: import('..').GridProps;
        bottomOffset: number;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('./type').ListProps> & Readonly<{
    onScroll?: ((ev: Event) => any) | undefined;
    "onPage-size-change"?: ((value: number) => any) | undefined;
    "onReach-bottom"?: ((ev: Event) => any) | undefined;
    "onPage-change"?: ((value: number) => any) | undefined;
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    scroll: (ev: Event) => any;
    "page-size-change": (value: number) => any;
    "reach-bottom": (ev: Event) => any;
    "page-change": (value: number) => any;
}, string, {
    size: import('./type').ListSize;
    loading: boolean;
    scrollbar: boolean;
    split: boolean;
    data: import('../_shared/type').ObjectData[];
    maxHeight: number | string;
    bordered: boolean;
    virtualListProps: import('..').VirtualListProps;
    hoverable: boolean;
    paginationProps: import('..').PaginationProps;
    gridProps: import('..').GridProps;
    bottomOffset: number;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: Readonly<import('./type').ListSlots> & import('./type').ListSlots;
}) & {
    item: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./type').ListItemProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {
            actionLayout: import('..').Direction;
        }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLDivElement, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import('./type').ListItemProps> & Readonly<{}>, {}, {}, {}, {}, {
            actionLayout: import('..').Direction;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<import('./type').ListItemProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
        actionLayout: import('..').Direction;
    }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: Readonly<import('./type').ListItemSlots> & import('./type').ListItemSlots;
    });
    "item-meta": {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./type').ListItemMetaProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {
            title: string;
            description: string;
        }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLDivElement, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import('./type').ListItemMetaProps> & Readonly<{}>, {}, {}, {}, {}, {
            title: string;
            description: string;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<import('./type').ListItemMetaProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
        title: string;
        description: string;
    }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: Readonly<import('./type').ListItemMetaSlots> & import('./type').ListItemMetaSlots;
    });
    install: (app: App) => void;
};
export { _ListItem as ListItem, _ListItemMeta as ListItemMeta };
declare module 'vue' {
    interface GlobalComponents {
        YcList: typeof List;
        YcListItem: typeof _ListItem;
        YcListItemMeta: typeof _ListItemMeta;
    }
}
export default List;
