import { AnchorLinkProps, AnchorLinkSlots } from './type';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Readonly<AnchorLinkSlots> & AnchorLinkSlots;
    refs: {
        linkRef: HTMLAnchorElement;
    };
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<AnchorLinkProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<AnchorLinkProps> & Readonly<{}>, {
    title: string;
    href: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    linkRef: HTMLAnchorElement;
}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
