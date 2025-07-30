import { App } from 'vue';
import { default as _Checkbox } from './Checkbox.vue';
import { default as _CheckboxGroup } from './CheckboxGroup.vue';
export type CheckboxInstance = InstanceType<typeof _Checkbox>;
export type CheckboxGroupInstance = InstanceType<typeof _CheckboxGroup>;
export * from './type';
declare const Checkbox: {
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./type').CheckboxProps> & Readonly<{
        onChange?: ((value: boolean, ev: Event) => any) | undefined;
        "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
        change: (value: boolean, ev: Event) => any;
        "update:modelValue": (value: boolean) => any;
    }, import('vue').PublicProps, {
        disabled: boolean;
        value: import('./type').CheckboxValue;
        defaultChecked: boolean;
        modelValue: boolean;
        indeterminate: boolean;
    }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLLabelElement, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('./type').CheckboxProps> & Readonly<{
        onChange?: ((value: boolean, ev: Event) => any) | undefined;
        "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
    }>, {}, {}, {}, {}, {
        disabled: boolean;
        value: import('./type').CheckboxValue;
        defaultChecked: boolean;
        modelValue: boolean;
        indeterminate: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('./type').CheckboxProps> & Readonly<{
    onChange?: ((value: boolean, ev: Event) => any) | undefined;
    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    change: (value: boolean, ev: Event) => any;
    "update:modelValue": (value: boolean) => any;
}, string, {
    disabled: boolean;
    value: import('./type').CheckboxValue;
    defaultChecked: boolean;
    modelValue: boolean;
    indeterminate: boolean;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: Readonly<import('./type').CheckboxSlots> & import('./type').CheckboxSlots;
}) & {
    group: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./type').CheckboxGroupProps> & Readonly<{
            onChange?: ((value: import('./type').CheckboxValue[]) => any) | undefined;
            "onUpdate:modelValue"?: ((value: import('./type').CheckboxValue[]) => any) | undefined;
        }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
            change: (value: import('./type').CheckboxValue[]) => any;
            "update:modelValue": (value: import('./type').CheckboxValue[]) => any;
        }, import('vue').PublicProps, {
            disabled: boolean;
            direction: import('..').Direction;
            modelValue: import('./type').CheckboxValue[];
            defaultValue: import('./type').CheckboxValue[];
            options: (import('./type').CheckboxOption | import('./type').CheckboxValue)[];
            max: number;
        }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLDivElement, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import('./type').CheckboxGroupProps> & Readonly<{
            onChange?: ((value: import('./type').CheckboxValue[]) => any) | undefined;
            "onUpdate:modelValue"?: ((value: import('./type').CheckboxValue[]) => any) | undefined;
        }>, {}, {}, {}, {}, {
            disabled: boolean;
            direction: import('..').Direction;
            modelValue: import('./type').CheckboxValue[];
            defaultValue: import('./type').CheckboxValue[];
            options: (import('./type').CheckboxOption | import('./type').CheckboxValue)[];
            max: number;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<import('./type').CheckboxGroupProps> & Readonly<{
        onChange?: ((value: import('./type').CheckboxValue[]) => any) | undefined;
        "onUpdate:modelValue"?: ((value: import('./type').CheckboxValue[]) => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
        change: (value: import('./type').CheckboxValue[]) => any;
        "update:modelValue": (value: import('./type').CheckboxValue[]) => any;
    }, string, {
        disabled: boolean;
        direction: import('..').Direction;
        modelValue: import('./type').CheckboxValue[];
        defaultValue: import('./type').CheckboxValue[];
        options: (import('./type').CheckboxOption | import('./type').CheckboxValue)[];
        max: number;
    }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: Readonly<import('./type').CheckboxGroupSlots> & import('./type').CheckboxGroupSlots;
    });
    install: (app: App) => void;
};
export { _CheckboxGroup as CheckboxGroup };
declare module 'vue' {
    interface GlobalComponents {
        YcCheckbox: typeof Checkbox;
        YcCheckboxGroup: typeof _CheckboxGroup;
    }
}
export default Checkbox;
