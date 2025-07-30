import { App } from 'vue';
import { default as _Scrollbar } from './Scrollbar.vue';
export type ScrollbarInstance = InstanceType<typeof _Scrollbar>;
export * from './type';
declare const Scrollbar: {
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./type').ScrollbarProps> & Readonly<{
        onScroll?: ((left: number, top: number, ev: Event) => any) | undefined;
    }>, {
        scrollTo(options: ScrollOptions): void;
        scrollLeft(left: number): void;
        scrollTop(top: number): void;
        getScrollRef(): HTMLDivElement;
    }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
        scroll: (left: number, top: number, ev: Event) => any;
    }, import('vue').PublicProps, {
        scrollbar: boolean;
        type: import('./type').TackType;
        outerClass: import('../_shared/type').ClassName;
        outerStyle: import('vue').CSSProperties;
    }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {
        scrollRef: HTMLDivElement;
        contentRef: HTMLDivElement;
    }, any, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('./type').ScrollbarProps> & Readonly<{
        onScroll?: ((left: number, top: number, ev: Event) => any) | undefined;
    }>, {
        scrollTo(options: ScrollOptions): void;
        scrollLeft(left: number): void;
        scrollTop(top: number): void;
        getScrollRef(): HTMLDivElement;
    }, {}, {}, {}, {
        scrollbar: boolean;
        type: import('./type').TackType;
        outerClass: import('../_shared/type').ClassName;
        outerStyle: import('vue').CSSProperties;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('./type').ScrollbarProps> & Readonly<{
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
    type: import('./type').TackType;
    outerClass: import('../_shared/type').ClassName;
    outerStyle: import('vue').CSSProperties;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: Readonly<import('./type').ScrollbarSlots> & import('./type').ScrollbarSlots;
}) & {
    install: (app: App) => void;
};
declare module 'vue' {
    interface GlobalComponents {
        YcScrollbar: typeof Scrollbar;
    }
}
export default Scrollbar;
