import { App } from 'vue';
import { default as _Alert } from './index.vue';
export type AlertInstance = InstanceType<typeof _Alert>;
export * from './type';
declare const Alert: {
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./type').AlertProps> & Readonly<{
        onClose?: ((ev: MouseEvent) => any) | undefined;
        "onAfter-close"?: (() => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
        close: (ev: MouseEvent) => any;
        "after-close": () => any;
    }, import('vue').PublicProps, {
        center: boolean;
        type: import('./type').AlertType;
        title: string;
        closable: boolean;
        showIcon: boolean;
        banner: boolean;
    }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('./type').AlertProps> & Readonly<{
        onClose?: ((ev: MouseEvent) => any) | undefined;
        "onAfter-close"?: (() => any) | undefined;
    }>, {}, {}, {}, {}, {
        center: boolean;
        type: import('./type').AlertType;
        title: string;
        closable: boolean;
        showIcon: boolean;
        banner: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('./type').AlertProps> & Readonly<{
    onClose?: ((ev: MouseEvent) => any) | undefined;
    "onAfter-close"?: (() => any) | undefined;
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    close: (ev: MouseEvent) => any;
    "after-close": () => any;
}, string, {
    center: boolean;
    type: import('./type').AlertType;
    title: string;
    closable: boolean;
    showIcon: boolean;
    banner: boolean;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: Readonly<import('./type').AlertSlots> & import('./type').AlertSlots;
}) & {
    install: (app: App) => void;
};
declare module 'vue' {
    interface GlobalComponents {
        YcAlert: typeof Alert;
    }
}
export default Alert;
