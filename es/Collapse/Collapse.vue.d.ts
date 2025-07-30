import { CollapseProps, CollapseSlots } from './type';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Readonly<CollapseSlots> & CollapseSlots;
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<CollapseProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    change: (value: import('./type').CollapseValue) => any;
    "update:activekey": (value: import('./type').CollapseValue) => any;
}, string, import('vue').PublicProps, Readonly<CollapseProps> & Readonly<{
    onChange?: ((value: import('./type').CollapseValue) => any) | undefined;
    "onUpdate:activekey"?: ((value: import('./type').CollapseValue) => any) | undefined;
}>, {
    bordered: boolean;
    activeKey: import('./type').CollapseValue[];
    defaultActiveKey: import('./type').CollapseValue[];
    accordion: boolean;
    expandIconPosition: import('./type').ExpandIconPosition;
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
