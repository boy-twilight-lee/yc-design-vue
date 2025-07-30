import { CalendarProps, CalendarSlots, CalendarMode } from './type';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Readonly<CalendarSlots> & CalendarSlots;
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<CalendarProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    change: (value: Date) => any;
    "update:modelValue": (value: Date) => any;
    "update:mode": (mode: CalendarMode) => any;
    "panel-change": (value: Date) => any;
}, string, import('vue').PublicProps, Readonly<CalendarProps> & Readonly<{
    onChange?: ((value: Date) => any) | undefined;
    "onUpdate:modelValue"?: ((value: Date) => any) | undefined;
    "onUpdate:mode"?: ((mode: CalendarMode) => any) | undefined;
    "onPanel-change"?: ((value: Date) => any) | undefined;
}>, {
    mode: CalendarMode;
    modelValue: Date;
    defaultValue: Date;
    defaultMode: CalendarMode;
    modes: CalendarMode[];
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
