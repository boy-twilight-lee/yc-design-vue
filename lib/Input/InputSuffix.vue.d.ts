type __VLS_Props = {
    curLength: number;
    maxLength?: number;
    showWordLimit: boolean;
    computedVisibility: boolean;
    isPassword: boolean;
    invisibleButton: boolean;
};
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        suffix?(_: {}): any;
    };
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    clear: (ev: MouseEvent) => any;
    visibilityChange: (value: boolean) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onClear?: ((ev: MouseEvent) => any) | undefined;
    onVisibilityChange?: ((value: boolean) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
