import { App } from 'vue';
import { default as _Switch } from './index.vue';
export type SwitchInstance = InstanceType<typeof _Switch>;
export * from './type';
declare const Switch: {
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./type').SwitchProps> & Readonly<{
        onChange?: ((value: import('./type').SwitchValue, ev: Event) => any) | undefined;
        onFocus?: ((ev: FocusEvent) => any) | undefined;
        onBlur?: ((ev: FocusEvent) => any) | undefined;
        "onUpdate:modelValue"?: ((value: import('./type').SwitchValue) => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
        change: (value: import('./type').SwitchValue, ev: Event) => any;
        focus: (ev: FocusEvent) => any;
        blur: (ev: FocusEvent) => any;
        "update:modelValue": (value: import('./type').SwitchValue) => any;
    }, import('vue').PublicProps, {
        size: import('./type').SwitchSize;
        disabled: boolean;
        loading: boolean;
        type: import('./type').SwitchType;
        defaultChecked: import('./type').SwitchValue;
        modelValue: import('./type').SwitchValue;
        checkedValue: import('./type').SwitchValue;
        uncheckedValue: import('./type').SwitchValue;
        checkedColor: string;
        uncheckedColor: string;
        checkedText: string;
        uncheckedText: string;
        beforeChange: import('./type').BeforeChange;
    }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLButtonElement, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('./type').SwitchProps> & Readonly<{
        onChange?: ((value: import('./type').SwitchValue, ev: Event) => any) | undefined;
        onFocus?: ((ev: FocusEvent) => any) | undefined;
        onBlur?: ((ev: FocusEvent) => any) | undefined;
        "onUpdate:modelValue"?: ((value: import('./type').SwitchValue) => any) | undefined;
    }>, {}, {}, {}, {}, {
        size: import('./type').SwitchSize;
        disabled: boolean;
        loading: boolean;
        type: import('./type').SwitchType;
        defaultChecked: import('./type').SwitchValue;
        modelValue: import('./type').SwitchValue;
        checkedValue: import('./type').SwitchValue;
        uncheckedValue: import('./type').SwitchValue;
        checkedColor: string;
        uncheckedColor: string;
        checkedText: string;
        uncheckedText: string;
        beforeChange: import('./type').BeforeChange;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('./type').SwitchProps> & Readonly<{
    onChange?: ((value: import('./type').SwitchValue, ev: Event) => any) | undefined;
    onFocus?: ((ev: FocusEvent) => any) | undefined;
    onBlur?: ((ev: FocusEvent) => any) | undefined;
    "onUpdate:modelValue"?: ((value: import('./type').SwitchValue) => any) | undefined;
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    change: (value: import('./type').SwitchValue, ev: Event) => any;
    focus: (ev: FocusEvent) => any;
    blur: (ev: FocusEvent) => any;
    "update:modelValue": (value: import('./type').SwitchValue) => any;
}, string, {
    size: import('./type').SwitchSize;
    disabled: boolean;
    loading: boolean;
    type: import('./type').SwitchType;
    defaultChecked: import('./type').SwitchValue;
    modelValue: import('./type').SwitchValue;
    checkedValue: import('./type').SwitchValue;
    uncheckedValue: import('./type').SwitchValue;
    checkedColor: string;
    uncheckedColor: string;
    checkedText: string;
    uncheckedText: string;
    beforeChange: import('./type').BeforeChange;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: Readonly<import('./type').SwitchSlots> & import('./type').SwitchSlots;
}) & {
    install: (app: App) => void;
};
declare module 'vue' {
    interface GlobalComponents {
        YcSwitch: typeof Switch;
    }
}
export default Switch;
