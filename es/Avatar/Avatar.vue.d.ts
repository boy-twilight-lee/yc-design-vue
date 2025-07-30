import { AvatarProps, AvatarSlots } from './type';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Readonly<AvatarSlots> & AvatarSlots;
    refs: {
        avatarRef: HTMLDivElement;
        textRef: HTMLSpanElement;
    };
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<AvatarProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    click: (ev: MouseEvent) => any;
    error: (ev: Event) => any;
    load: (ev: Event) => any;
}, string, import('vue').PublicProps, Readonly<AvatarProps> & Readonly<{
    onClick?: ((ev: MouseEvent) => any) | undefined;
    onError?: ((ev: Event) => any) | undefined;
    onLoad?: ((ev: Event) => any) | undefined;
}>, {
    size: number;
    objectFit: import('./type').ObjectFit;
    shape: import('./type').AvatarShape;
    autoFixFontSize: boolean;
    imageUrl: string;
    triggerType: import('./type').AvatarTriggerType;
    triggerIconStyle: import('vue').CSSProperties;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    avatarRef: HTMLDivElement;
    textRef: HTMLSpanElement;
}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
