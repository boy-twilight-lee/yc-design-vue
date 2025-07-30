import { App } from 'vue';
import { default as _Progress } from './Progress.vue';
export type ProgressInstance = InstanceType<typeof _Progress>;
export * from './type';
declare const Progress: {
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./type').ProgressProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {
        size: import('..').Size;
        type: import('./type').ProgressType;
        animation: boolean;
        status: import('./type').ProgressStatus;
        showText: boolean;
        percent: number;
        steps: number;
    }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLDivElement, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('./type').ProgressProps> & Readonly<{}>, {}, {}, {}, {}, {
        size: import('..').Size;
        type: import('./type').ProgressType;
        animation: boolean;
        status: import('./type').ProgressStatus;
        showText: boolean;
        percent: number;
        steps: number;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('./type').ProgressProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
    size: import('..').Size;
    type: import('./type').ProgressType;
    animation: boolean;
    status: import('./type').ProgressStatus;
    showText: boolean;
    percent: number;
    steps: number;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        text?(_: {
            percent: number;
        }): any;
        text?(_: {
            percent: number;
        }): any;
        text?(_: {
            percent: number;
        }): any;
    };
}) & {
    install: (app: App) => void;
};
declare module 'vue' {
    interface GlobalComponents {
        YcProgress: typeof Progress;
    }
}
export default Progress;
