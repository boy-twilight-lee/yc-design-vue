import { OptionProps, OptionSlots } from './type';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Readonly<OptionSlots> & OptionSlots;
    refs: {
        contentRef: HTMLDivElement;
    };
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<OptionProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<OptionProps> & Readonly<{}>, {
    disabled: boolean;
    value: import('./type').SelectValue;
    label: string;
    isFallbackOption: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    contentRef: HTMLDivElement;
}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
