import { AffixProps, AffixSlots } from './type';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Readonly<AffixSlots> & AffixSlots;
    refs: {
        wrapperRef: HTMLDivElement;
        affixRef: HTMLDivElement;
    };
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<AffixProps, {
    updatePosition(): void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    change: (fixed: boolean) => any;
}, string, import('vue').PublicProps, Readonly<AffixProps> & Readonly<{
    onChange?: ((fixed: boolean) => any) | undefined;
}>, {
    offsetTop: number;
    target: import('..').TargetContainer;
    offsetBottom: number;
    targetContainer: import('..').TargetContainer;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    wrapperRef: HTMLDivElement;
    affixRef: HTMLDivElement;
}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
