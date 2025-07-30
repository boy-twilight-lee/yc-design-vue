import { App } from 'vue';
import { default as _Statistic } from './Statistic.vue';
import { default as _Countdown } from './Countdown.vue';
export type StatisticInstance = InstanceType<typeof _Statistic>;
export type CountdownInstance = InstanceType<typeof _Countdown>;
export * from './type';
declare const Statistic: {
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./type').StatisticProps> & Readonly<{
        onFinish?: (() => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
        finish: () => any;
    }, import('vue').PublicProps, {
        value: import('./type').StatisticValue;
        start: boolean;
        separator: string;
        title: string;
        animation: boolean;
        format: string;
        animationDuration: number;
        placeholder: string;
        easeing: string;
        extra: string;
        precision: number;
        valueStyle: import('vue').CSSProperties;
        showGroupSeparator: boolean;
        valueFrom: number;
        isCountdown: boolean;
    }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {
        valueRef: HTMLSpanElement;
    }, HTMLDivElement, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('./type').StatisticProps> & Readonly<{
        onFinish?: (() => any) | undefined;
    }>, {}, {}, {}, {}, {
        value: import('./type').StatisticValue;
        start: boolean;
        separator: string;
        title: string;
        animation: boolean;
        format: string;
        animationDuration: number;
        placeholder: string;
        easeing: string;
        extra: string;
        precision: number;
        valueStyle: import('vue').CSSProperties;
        showGroupSeparator: boolean;
        valueFrom: number;
        isCountdown: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('./type').StatisticProps> & Readonly<{
    onFinish?: (() => any) | undefined;
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    finish: () => any;
}, string, {
    value: import('./type').StatisticValue;
    start: boolean;
    separator: string;
    title: string;
    animation: boolean;
    format: string;
    animationDuration: number;
    placeholder: string;
    easeing: string;
    extra: string;
    precision: number;
    valueStyle: import('vue').CSSProperties;
    showGroupSeparator: boolean;
    valueFrom: number;
    isCountdown: boolean;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: Readonly<import('./type').StatisticSlots> & import('./type').StatisticSlots;
}) & {
    countdown: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./type').CountdownProps> & Readonly<{
            onFinish?: (() => any) | undefined;
        }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
            finish: () => any;
        }, import('vue').PublicProps, {
            value: number;
            start: boolean;
            title: string;
            format: string;
            easeing: string;
            valueStyle: import('vue').CSSProperties;
            now: number;
        }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLDivElement, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import('./type').CountdownProps> & Readonly<{
            onFinish?: (() => any) | undefined;
        }>, {}, {}, {}, {}, {
            value: number;
            start: boolean;
            title: string;
            format: string;
            easeing: string;
            valueStyle: import('vue').CSSProperties;
            now: number;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<import('./type').CountdownProps> & Readonly<{
        onFinish?: (() => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
        finish: () => any;
    }, string, {
        value: number;
        start: boolean;
        title: string;
        format: string;
        easeing: string;
        valueStyle: import('vue').CSSProperties;
        now: number;
    }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: Readonly<import('./type').CountdownSlots> & import('./type').CountdownSlots;
    });
    install: (app: App) => void;
};
export { _Countdown as Countdown };
declare module 'vue' {
    interface GlobalComponents {
        YcStatistic: typeof Statistic;
        YcCountdown: typeof _Countdown;
    }
}
export default Statistic;
