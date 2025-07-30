import { App } from 'vue';
import { default as _Slider } from './Slider.vue';
export type SliderInstance = InstanceType<typeof _Slider>;
export * from './type';
declare const Slider: {
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./type').SliderProps> & Readonly<{
        onChange?: ((value: number) => any) | undefined;
        "onUpdate:modelValue"?: ((value: number) => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
        change: (value: number) => any;
        "update:modelValue": (value: number) => any;
    }, import('vue').PublicProps, {
        disabled: boolean;
        range: boolean;
        showTooltip: boolean;
        step: number;
        direction: import('..').Direction;
        modelValue: import('./type').SliderValue;
        defaultValue: import('./type').SliderValue;
        showInput: boolean;
        max: number;
        min: number;
        marks: Record<number, string>;
        showTicks: boolean;
        formatTooltip: import('./type').FormatTooltip;
    }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {
        trackRef: HTMLDivElement;
    }, HTMLDivElement, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('./type').SliderProps> & Readonly<{
        onChange?: ((value: number) => any) | undefined;
        "onUpdate:modelValue"?: ((value: number) => any) | undefined;
    }>, {}, {}, {}, {}, {
        disabled: boolean;
        range: boolean;
        showTooltip: boolean;
        step: number;
        direction: import('..').Direction;
        modelValue: import('./type').SliderValue;
        defaultValue: import('./type').SliderValue;
        showInput: boolean;
        max: number;
        min: number;
        marks: Record<number, string>;
        showTicks: boolean;
        formatTooltip: import('./type').FormatTooltip;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('./type').SliderProps> & Readonly<{
    onChange?: ((value: number) => any) | undefined;
    "onUpdate:modelValue"?: ((value: number) => any) | undefined;
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    change: (value: number) => any;
    "update:modelValue": (value: number) => any;
}, string, {
    disabled: boolean;
    range: boolean;
    showTooltip: boolean;
    step: number;
    direction: import('..').Direction;
    modelValue: import('./type').SliderValue;
    defaultValue: import('./type').SliderValue;
    showInput: boolean;
    max: number;
    min: number;
    marks: Record<number, string>;
    showTicks: boolean;
    formatTooltip: import('./type').FormatTooltip;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & {
    install: (app: App) => void;
};
declare module 'vue' {
    interface GlobalComponents {
        YcSlider: typeof Slider;
    }
}
export default Slider;
