import { App } from 'vue';
import { default as _Rate } from './index.vue';
export type RateInstance = InstanceType<typeof _Rate>;
export * from './type';
declare const Rate: {
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./type').RateProps> & Readonly<{
        onChange?: ((value: number) => any) | undefined;
        "onUpdate:modelValue"?: ((value: number) => any) | undefined;
        "onHover-change"?: ((value: number) => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
        change: (value: number) => any;
        "update:modelValue": (value: number) => any;
        "hover-change": (value: number) => any;
    }, import('vue').PublicProps, {
        disabled: boolean;
        color: string | Record<number, string>;
        modelValue: number;
        defaultValue: number;
        readonly: boolean;
        count: number;
        allowHalf: boolean;
        grading: boolean;
    }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLDivElement, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('./type').RateProps> & Readonly<{
        onChange?: ((value: number) => any) | undefined;
        "onUpdate:modelValue"?: ((value: number) => any) | undefined;
        "onHover-change"?: ((value: number) => any) | undefined;
    }>, {}, {}, {}, {}, {
        disabled: boolean;
        color: string | Record<number, string>;
        modelValue: number;
        defaultValue: number;
        readonly: boolean;
        count: number;
        allowHalf: boolean;
        grading: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('./type').RateProps> & Readonly<{
    onChange?: ((value: number) => any) | undefined;
    "onUpdate:modelValue"?: ((value: number) => any) | undefined;
    "onHover-change"?: ((value: number) => any) | undefined;
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    change: (value: number) => any;
    "update:modelValue": (value: number) => any;
    "hover-change": (value: number) => any;
}, string, {
    disabled: boolean;
    color: string | Record<number, string>;
    modelValue: number;
    defaultValue: number;
    readonly: boolean;
    count: number;
    allowHalf: boolean;
    grading: boolean;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: Readonly<import('./type').RateSlots> & import('./type').RateSlots;
}) & {
    install: (app: App) => void;
};
declare module 'vue' {
    interface GlobalComponents {
        YcRate: typeof Rate;
    }
}
export default Rate;
