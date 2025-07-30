import { App } from 'vue';
import { default as _ConfigProvider } from './index.vue';
export type ConfigProviderInstance = InstanceType<typeof _ConfigProvider>;
export * from './type';
declare const ConfigProvider: {
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./type').ConfigProviderProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {
        size: import('..').Size;
        popupContainer: import('..').PopupContainer;
        updateAtScroll: boolean;
        scrollToClose: boolean;
        zIndex: number;
        exchangeTime: boolean;
    }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('./type').ConfigProviderProps> & Readonly<{}>, {}, {}, {}, {}, {
        size: import('..').Size;
        popupContainer: import('..').PopupContainer;
        updateAtScroll: boolean;
        scrollToClose: boolean;
        zIndex: number;
        exchangeTime: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('./type').ConfigProviderProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
    size: import('..').Size;
    popupContainer: import('..').PopupContainer;
    updateAtScroll: boolean;
    scrollToClose: boolean;
    zIndex: number;
    exchangeTime: boolean;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: Readonly<import('./type').ConfigconfigSlots> & import('./type').ConfigconfigSlots;
}) & {
    install: (app: App) => void;
};
declare module 'vue' {
    interface GlobalComponents {
        YcConfigProvider: typeof ConfigProvider;
    }
}
export default ConfigProvider;
