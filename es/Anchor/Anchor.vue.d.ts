import { AnchorProps, AnchorSlots } from './type';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Readonly<AnchorSlots> & AnchorSlots;
    refs: {
        listRef: HTMLDivElement;
    };
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<AnchorProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<AnchorProps> & Readonly<{}>, {
    smooth: boolean;
    boundary: import('./type').AnchorBoundary;
    changeHash: boolean;
    lineLess: boolean;
    scrollContainer: import('..').TargetContainer;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    listRef: HTMLDivElement;
}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
