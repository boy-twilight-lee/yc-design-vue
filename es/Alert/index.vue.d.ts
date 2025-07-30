import { AlertProps, AlertSlots } from './type';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Readonly<AlertSlots> & AlertSlots;
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<AlertProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    close: (ev: MouseEvent) => any;
    "after-close": () => any;
}, string, import('vue').PublicProps, Readonly<AlertProps> & Readonly<{
    onClose?: ((ev: MouseEvent) => any) | undefined;
    "onAfter-close"?: (() => any) | undefined;
}>, {
    center: boolean;
    type: import('./type').AlertType;
    title: string;
    closable: boolean;
    showIcon: boolean;
    banner: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
