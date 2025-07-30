import { CollapseItemProps, CollapseItemSlots } from './type';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Readonly<CollapseItemSlots> & CollapseItemSlots;
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<CollapseItemProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<CollapseItemProps> & Readonly<{}>, {
    disabled: boolean;
    header: string;
    path: import('./type').CollapseValue;
    showExpandIcon: boolean;
    destroyOnHide: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
