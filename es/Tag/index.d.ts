import { App } from 'vue';
import { default as _Tag } from './index.vue';
export type TagInstance = InstanceType<typeof _Tag>;
export * from './type';
declare const Tag: {
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./type').TagProps> & Readonly<{
        onClose?: ((ev: MouseEvent, value?: string | undefined) => any) | undefined;
        "onUpdate:visible"?: ((value: boolean) => any) | undefined;
        "onUpdate:checked"?: ((value: boolean) => any) | undefined;
        onCheck?: ((value: boolean, ev: MouseEvent) => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
        close: (ev: MouseEvent, value?: string | undefined) => any;
        "update:visible": (value: boolean) => any;
        "update:checked": (value: boolean) => any;
        check: (value: boolean, ev: MouseEvent) => any;
    }, import('vue').PublicProps, {
        size: import('./type').TagSize;
        loading: boolean;
        visible: boolean;
        color: string;
        nowrap: boolean;
        bordered: boolean;
        defaultVisible: boolean;
        closable: boolean;
        checkable: boolean;
        checked: boolean;
        defaultChecked: boolean;
    }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('./type').TagProps> & Readonly<{
        onClose?: ((ev: MouseEvent, value?: string | undefined) => any) | undefined;
        "onUpdate:visible"?: ((value: boolean) => any) | undefined;
        "onUpdate:checked"?: ((value: boolean) => any) | undefined;
        onCheck?: ((value: boolean, ev: MouseEvent) => any) | undefined;
    }>, {}, {}, {}, {}, {
        size: import('./type').TagSize;
        loading: boolean;
        visible: boolean;
        color: string;
        nowrap: boolean;
        bordered: boolean;
        defaultVisible: boolean;
        closable: boolean;
        checkable: boolean;
        checked: boolean;
        defaultChecked: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('./type').TagProps> & Readonly<{
    onClose?: ((ev: MouseEvent, value?: string | undefined) => any) | undefined;
    "onUpdate:visible"?: ((value: boolean) => any) | undefined;
    "onUpdate:checked"?: ((value: boolean) => any) | undefined;
    onCheck?: ((value: boolean, ev: MouseEvent) => any) | undefined;
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    close: (ev: MouseEvent, value?: string | undefined) => any;
    "update:visible": (value: boolean) => any;
    "update:checked": (value: boolean) => any;
    check: (value: boolean, ev: MouseEvent) => any;
}, string, {
    size: import('./type').TagSize;
    loading: boolean;
    visible: boolean;
    color: string;
    nowrap: boolean;
    bordered: boolean;
    defaultVisible: boolean;
    closable: boolean;
    checkable: boolean;
    checked: boolean;
    defaultChecked: boolean;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: Readonly<import('./type').TagSlots> & import('./type').TagSlots;
}) & {
    install: (app: App) => void;
};
declare module 'vue' {
    interface GlobalComponents {
        YcTag: typeof Tag;
    }
}
export default Tag;
