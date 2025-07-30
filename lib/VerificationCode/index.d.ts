import { App } from 'vue';
import { default as _VerificationCode } from './index.vue';
export type VerificationCodeInstance = InstanceType<typeof _VerificationCode>;
export * from './type';
declare const VerificationCode: {
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./type').VerificationCodeProps> & Readonly<{
        onChange?: ((value: string) => any) | undefined;
        onInput?: ((value: string, ev: Event, i: number) => any) | undefined;
        "onUpdate:modelValue"?: ((value: string) => any) | undefined;
        onFinish?: ((value: string) => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
        change: (value: string) => any;
        input: (value: string, ev: Event, i: number) => any;
        "update:modelValue": (value: string) => any;
        finish: (value: string) => any;
    }, import('vue').PublicProps, {
        size: import('..').Size;
        length: number;
        disabled: boolean;
        error: boolean;
        modelValue: string;
        defaultValue: string;
        readonly: boolean;
    }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLDivElement, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('./type').VerificationCodeProps> & Readonly<{
        onChange?: ((value: string) => any) | undefined;
        onInput?: ((value: string, ev: Event, i: number) => any) | undefined;
        "onUpdate:modelValue"?: ((value: string) => any) | undefined;
        onFinish?: ((value: string) => any) | undefined;
    }>, {}, {}, {}, {}, {
        size: import('..').Size;
        length: number;
        disabled: boolean;
        error: boolean;
        modelValue: string;
        defaultValue: string;
        readonly: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('./type').VerificationCodeProps> & Readonly<{
    onChange?: ((value: string) => any) | undefined;
    onInput?: ((value: string, ev: Event, i: number) => any) | undefined;
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
    onFinish?: ((value: string) => any) | undefined;
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    change: (value: string) => any;
    input: (value: string, ev: Event, i: number) => any;
    "update:modelValue": (value: string) => any;
    finish: (value: string) => any;
}, string, {
    size: import('..').Size;
    length: number;
    disabled: boolean;
    error: boolean;
    modelValue: string;
    defaultValue: string;
    readonly: boolean;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & {
    install: (app: App) => void;
};
declare module 'vue' {
    interface GlobalComponents {
        YcVerificationCode: typeof VerificationCode;
    }
}
export default VerificationCode;
