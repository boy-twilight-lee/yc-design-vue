import { LinkProps, LinkSlots } from './type';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Readonly<LinkSlots> & LinkSlots;
    refs: {};
    rootEl: HTMLAnchorElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<LinkProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    click: (event: MouseEvent) => any;
    contextmenu: (event: MouseEvent) => any;
    dblclick: (event: MouseEvent) => any;
}, string, import('vue').PublicProps, Readonly<LinkProps> & Readonly<{
    onClick?: ((event: MouseEvent) => any) | undefined;
    onContextmenu?: ((event: MouseEvent) => any) | undefined;
    onDblclick?: ((event: MouseEvent) => any) | undefined;
}>, {
    disabled: boolean;
    loading: boolean;
    icon: boolean;
    href: string;
    status: import('./type').LinkStatus;
    hoverable: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLAnchorElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
