import { OverflowListProps, OverflowListSlots } from './type';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Readonly<OverflowListSlots> & OverflowListSlots;
    refs: {
        listRef: HTMLDivElement;
        overflowRef: HTMLDivElement;
    };
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<OverflowListProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    change: (value: number) => any;
}, string, import('vue').PublicProps, Readonly<OverflowListProps> & Readonly<{
    onChange?: ((value: number) => any) | undefined;
}>, {
    margin: number;
    min: number;
    from: import('./type').OverflowListFrom;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    listRef: HTMLDivElement;
    overflowRef: HTMLDivElement;
}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
