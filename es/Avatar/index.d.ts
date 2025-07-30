import { App } from 'vue';
import { default as _Avatar } from './Avatar.vue';
import { default as _AvatarGroup } from './AvatarGroup.vue';
export type AvatarInstance = InstanceType<typeof _Avatar>;
export type AvatarGroupInstance = InstanceType<typeof _AvatarGroup>;
export * from './type';
declare const Avatar: {
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./type').AvatarProps> & Readonly<{
        onClick?: ((ev: MouseEvent) => any) | undefined;
        onError?: ((ev: Event) => any) | undefined;
        onLoad?: ((ev: Event) => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
        click: (ev: MouseEvent) => any;
        error: (ev: Event) => any;
        load: (ev: Event) => any;
    }, import('vue').PublicProps, {
        size: number;
        objectFit: import('./type').ObjectFit;
        shape: import('./type').AvatarShape;
        autoFixFontSize: boolean;
        imageUrl: string;
        triggerType: import('./type').AvatarTriggerType;
        triggerIconStyle: import('vue').CSSProperties;
    }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {
        avatarRef: HTMLDivElement;
        textRef: HTMLSpanElement;
    }, HTMLDivElement, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('./type').AvatarProps> & Readonly<{
        onClick?: ((ev: MouseEvent) => any) | undefined;
        onError?: ((ev: Event) => any) | undefined;
        onLoad?: ((ev: Event) => any) | undefined;
    }>, {}, {}, {}, {}, {
        size: number;
        objectFit: import('./type').ObjectFit;
        shape: import('./type').AvatarShape;
        autoFixFontSize: boolean;
        imageUrl: string;
        triggerType: import('./type').AvatarTriggerType;
        triggerIconStyle: import('vue').CSSProperties;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('./type').AvatarProps> & Readonly<{
    onClick?: ((ev: MouseEvent) => any) | undefined;
    onError?: ((ev: Event) => any) | undefined;
    onLoad?: ((ev: Event) => any) | undefined;
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    click: (ev: MouseEvent) => any;
    error: (ev: Event) => any;
    load: (ev: Event) => any;
}, string, {
    size: number;
    objectFit: import('./type').ObjectFit;
    shape: import('./type').AvatarShape;
    autoFixFontSize: boolean;
    imageUrl: string;
    triggerType: import('./type').AvatarTriggerType;
    triggerIconStyle: import('vue').CSSProperties;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: Readonly<import('./type').AvatarSlots> & import('./type').AvatarSlots;
}) & {
    group: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./type').AvatarGroupProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {
            size: number;
            shape: import('./type').AvatarShape;
            autoFixFontSize: boolean;
            maxCount: number;
            zIndexAscend: boolean;
            maxStyle: import('vue').CSSProperties;
            maxPopoverTriggerProps: import('..').TriggerProps;
        }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLDivElement, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import('./type').AvatarGroupProps> & Readonly<{}>, {}, {}, {}, {}, {
            size: number;
            shape: import('./type').AvatarShape;
            autoFixFontSize: boolean;
            maxCount: number;
            zIndexAscend: boolean;
            maxStyle: import('vue').CSSProperties;
            maxPopoverTriggerProps: import('..').TriggerProps;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<import('./type').AvatarGroupProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
        size: number;
        shape: import('./type').AvatarShape;
        autoFixFontSize: boolean;
        maxCount: number;
        zIndexAscend: boolean;
        maxStyle: import('vue').CSSProperties;
        maxPopoverTriggerProps: import('..').TriggerProps;
    }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: Readonly<import('./type').AvatarGroupSlots> & import('./type').AvatarGroupSlots;
    });
    install: (app: App) => void;
};
export { _AvatarGroup as AvatarGroup };
declare module 'vue' {
    interface GlobalComponents {
        YcAvatar: typeof Avatar;
        YcAvatarGroup: typeof _AvatarGroup;
    }
}
export default Avatar;
