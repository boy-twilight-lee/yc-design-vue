import { ColorPickerProps } from './type';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<ColorPickerProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    change: (value: boolean) => any;
    "popup-visible-change": (value: boolean, color: string) => any;
    "update:modelValue": (value: string) => any;
}, string, import('vue').PublicProps, Readonly<ColorPickerProps> & Readonly<{
    onChange?: ((value: boolean) => any) | undefined;
    "onPopup-visible-change"?: ((value: boolean, color: string) => any) | undefined;
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
}>, {
    size: import('..').Size;
    disabled: boolean;
    triggerProps: import('../Trigger').TriggerProps;
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
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
