import { GridProps, GridSlots } from './type';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Readonly<GridSlots> & GridSlots;
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<GridProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<GridProps> & Readonly<{}>, {
    cols: number | import('./type').ResponsiveValue;
    rowGap: number | import('./type').ResponsiveValue;
    colGap: number | import('./type').ResponsiveValue;
    collapsed: boolean;
    collapsedRows: number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
