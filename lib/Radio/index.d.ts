import { App } from 'vue';
import { default as _Radio } from './Radio.vue';
import { default as _RadioGroup } from './RadioGroup.vue';
export type RadioInstance = InstanceType<typeof _Radio>;
export type RadioGroupInstance = InstanceType<typeof _RadioGroup>;
export * from './type';
declare const Radio: {
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./type').RadioProps> & Readonly<{
        onChange?: ((value: import('./type').RadioValue, ev: Event) => any) | undefined;
        "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
        change: (value: import('./type').RadioValue, ev: Event) => any;
        "update:modelValue": (value: boolean) => any;
    }, import('vue').PublicProps, {
        disabled: boolean;
        value: import('./type').RadioValue;
        type: import('./type').RadioType;
        defaultChecked: boolean;
        modelValue: import('./type').RadioValue;
    }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLLabelElement, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('./type').RadioProps> & Readonly<{
        onChange?: ((value: import('./type').RadioValue, ev: Event) => any) | undefined;
        "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
    }>, {}, {}, {}, {}, {
        disabled: boolean;
        value: import('./type').RadioValue;
        type: import('./type').RadioType;
        defaultChecked: boolean;
        modelValue: import('./type').RadioValue;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('./type').RadioProps> & Readonly<{
    onChange?: ((value: import('./type').RadioValue, ev: Event) => any) | undefined;
    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    change: (value: import('./type').RadioValue, ev: Event) => any;
    "update:modelValue": (value: boolean) => any;
}, string, {
    disabled: boolean;
    value: import('./type').RadioValue;
    type: import('./type').RadioType;
    defaultChecked: boolean;
    modelValue: import('./type').RadioValue;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: Readonly<import('./type').RadioSlots> & import('./type').RadioSlots;
}) & {
    group: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./type').RadioGroupProps> & Readonly<{
            onChange?: ((value: import('./type').RadioValue) => any) | undefined;
            "onUpdate:modelValue"?: ((value: import('./type').RadioValue) => any) | undefined;
        }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
            change: (value: import('./type').RadioValue) => any;
            "update:modelValue": (value: import('./type').RadioValue) => any;
        }, import('vue').PublicProps, {
            size: import('..').Size;
            disabled: boolean;
            type: import('./type').RadioType;
            direction: import('..').Direction;
            modelValue: import('./type').RadioValue;
            defaultValue: import('./type').RadioValue;
            options: import('./type').RadioOption[];
        }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLDivElement, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import('./type').RadioGroupProps> & Readonly<{
            onChange?: ((value: import('./type').RadioValue) => any) | undefined;
            "onUpdate:modelValue"?: ((value: import('./type').RadioValue) => any) | undefined;
        }>, {}, {}, {}, {}, {
            size: import('..').Size;
            disabled: boolean;
            type: import('./type').RadioType;
            direction: import('..').Direction;
            modelValue: import('./type').RadioValue;
            defaultValue: import('./type').RadioValue;
            options: import('./type').RadioOption[];
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<import('./type').RadioGroupProps> & Readonly<{
        onChange?: ((value: import('./type').RadioValue) => any) | undefined;
        "onUpdate:modelValue"?: ((value: import('./type').RadioValue) => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
        change: (value: import('./type').RadioValue) => any;
        "update:modelValue": (value: import('./type').RadioValue) => any;
    }, string, {
        size: import('..').Size;
        disabled: boolean;
        type: import('./type').RadioType;
        direction: import('..').Direction;
        modelValue: import('./type').RadioValue;
        defaultValue: import('./type').RadioValue;
        options: import('./type').RadioOption[];
    }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: Readonly<import('./type').RadioGroupSlots> & import('./type').RadioGroupSlots;
    });
    install: (app: App) => void;
};
export { _RadioGroup as RadioGroup };
declare module 'vue' {
    interface GlobalComponents {
        YcRadio: typeof Radio;
        YcRadioGroup: typeof _RadioGroup;
    }
}
export default Radio;
