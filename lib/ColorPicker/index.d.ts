import { App } from 'vue';
import { default as _ColorPicker } from './ColorPicker.vue';
export type ColorPickerInstance = InstanceType<typeof _ColorPicker>;
export * from './type';
declare const ColorPicker: {
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./type').ColorPickerProps> & Readonly<{
        onChange?: ((value: boolean) => any) | undefined;
        "onPopup-visible-change"?: ((value: boolean, color: string) => any) | undefined;
        "onUpdate:modelValue"?: ((value: string) => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
        change: (value: boolean) => any;
        "popup-visible-change": (value: boolean, color: string) => any;
        "update:modelValue": (value: string) => any;
    }, import('vue').PublicProps, {
        size: import('..').Size;
        disabled: boolean;
        triggerProps: import('..').TriggerProps;
        format: import('./type').ColorFormat;
        modelValue: string;
        defaultValue: string;
        disabledAlpha: boolean;
        showHistory: boolean;
        showPreset: boolean;
        historyColors: string[];
        presetColors: string[];
        hideTrigger: boolean;
        showText: boolean;
    }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('./type').ColorPickerProps> & Readonly<{
        onChange?: ((value: boolean) => any) | undefined;
        "onPopup-visible-change"?: ((value: boolean, color: string) => any) | undefined;
        "onUpdate:modelValue"?: ((value: string) => any) | undefined;
    }>, {}, {}, {}, {}, {
        size: import('..').Size;
        disabled: boolean;
        triggerProps: import('..').TriggerProps;
        format: import('./type').ColorFormat;
        modelValue: string;
        defaultValue: string;
        disabledAlpha: boolean;
        showHistory: boolean;
        showPreset: boolean;
        historyColors: string[];
        presetColors: string[];
        hideTrigger: boolean;
        showText: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('./type').ColorPickerProps> & Readonly<{
    onChange?: ((value: boolean) => any) | undefined;
    "onPopup-visible-change"?: ((value: boolean, color: string) => any) | undefined;
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    change: (value: boolean) => any;
    "popup-visible-change": (value: boolean, color: string) => any;
    "update:modelValue": (value: string) => any;
}, string, {
    size: import('..').Size;
    disabled: boolean;
    triggerProps: import('..').TriggerProps;
    format: import('./type').ColorFormat;
    modelValue: string;
    defaultValue: string;
    disabledAlpha: boolean;
    showHistory: boolean;
    showPreset: boolean;
    historyColors: string[];
    presetColors: string[];
    hideTrigger: boolean;
    showText: boolean;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
    };
}) & {
    install: (app: App) => void;
};
declare module 'vue' {
    interface GlobalComponents {
        YcColorPicker: typeof ColorPicker;
    }
}
export default ColorPicker;
