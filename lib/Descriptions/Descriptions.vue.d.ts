import { DescriptionsProps, DescriptionsSlots, DescData } from './type';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Readonly<DescriptionsSlots> & DescriptionsSlots;
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<DescriptionsProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<DescriptionsProps> & Readonly<{}>, {
    size: import('..').Size;
    column: import('./type').DescriptionsColumn;
    layout: import('./type').DescriptionsLayout;
    data: DescData[];
    title: string;
    align: import('./type').DescriptionsAlign;
    tableLayout: import('./type').TableLayout;
    bordered: boolean;
    labelStyle: import('vue').CSSProperties;
    valueStyle: import('vue').CSSProperties;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
