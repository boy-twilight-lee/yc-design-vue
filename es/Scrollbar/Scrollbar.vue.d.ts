import { ScrollbarProps, ScrollbarSlots } from './type';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Readonly<ScrollbarSlots> & ScrollbarSlots;
    refs: {
        scrollRef: HTMLDivElement;
        contentRef: HTMLDivElement;
    };
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<ScrollbarProps, {
    scrollTo(options: ScrollOptions): void;
    scrollLeft(left: number): void;
    scrollTop(top: number): void;
    getScrollRef(): HTMLDivElement;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    scroll: (left: number, top: number, ev: Event) => any;
}, string, import('vue').PublicProps, Readonly<ScrollbarProps> & Readonly<{
    onScroll?: ((left: number, top: number, ev: Event) => any) | undefined;
}>, {
    scrollbar: boolean;
    type: import('./type').TackType;
    outerClass: import('../_shared/type').ClassName;
    outerStyle: import('vue').CSSProperties;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    scrollRef: HTMLDivElement;
    contentRef: HTMLDivElement;
}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
