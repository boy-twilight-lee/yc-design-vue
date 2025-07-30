import { App } from 'vue';
import { default as _Spin } from './index.vue';
export type SpinInstance = InstanceType<typeof _Spin>;
export * from './type';
declare const Spin: {
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./type').SpinProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {
        size: number;
        loading: boolean;
        dot: boolean;
        tip: string;
        hideIcon: boolean;
        isSizeInherit: boolean;
    }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLDivElement, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('./type').SpinProps> & Readonly<{}>, {}, {}, {}, {}, {
        size: number;
        loading: boolean;
        dot: boolean;
        tip: string;
        hideIcon: boolean;
        isSizeInherit: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('./type').SpinProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
    size: number;
    loading: boolean;
    dot: boolean;
    tip: string;
    hideIcon: boolean;
    isSizeInherit: boolean;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: Readonly<import('./type').SpinSlots> & import('./type').SpinSlots;
}) & {
    install: (app: App) => void;
};
declare module 'vue' {
    interface GlobalComponents {
        YcSpin: typeof Spin;
    }
}
export default Spin;
