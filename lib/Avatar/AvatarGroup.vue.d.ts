import { AvatarGroupProps, AvatarGroupSlots } from './type';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Readonly<AvatarGroupSlots> & AvatarGroupSlots;
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<AvatarGroupProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<AvatarGroupProps> & Readonly<{}>, {
    size: number;
    shape: import('./type').AvatarShape;
    autoFixFontSize: boolean;
    maxCount: number;
    zIndexAscend: boolean;
    maxStyle: import('vue').CSSProperties;
    maxPopoverTriggerProps: import('..').TriggerProps;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
