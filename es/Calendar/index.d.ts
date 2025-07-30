import { App } from 'vue';
import { default as _Calendar } from './Calendar.vue';
export type CalendarInstance = InstanceType<typeof _Calendar>;
export * from './type';
declare const Calendar: {
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./type').CalendarProps> & Readonly<{
        onChange?: ((value: Date) => any) | undefined;
        "onUpdate:modelValue"?: ((value: Date) => any) | undefined;
        "onUpdate:mode"?: ((mode: import('./type').CalendarMode) => any) | undefined;
        "onPanel-change"?: ((value: Date) => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
        change: (value: Date) => any;
        "update:modelValue": (value: Date) => any;
        "update:mode": (mode: import('./type').CalendarMode) => any;
        "panel-change": (value: Date) => any;
    }, import('vue').PublicProps, {
        mode: import('./type').CalendarMode;
        modelValue: Date;
        defaultValue: Date;
        defaultMode: import('./type').CalendarMode;
        modes: import('./type').CalendarMode[];
    }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLDivElement, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('./type').CalendarProps> & Readonly<{
        onChange?: ((value: Date) => any) | undefined;
        "onUpdate:modelValue"?: ((value: Date) => any) | undefined;
        "onUpdate:mode"?: ((mode: import('./type').CalendarMode) => any) | undefined;
        "onPanel-change"?: ((value: Date) => any) | undefined;
    }>, {}, {}, {}, {}, {
        mode: import('./type').CalendarMode;
        modelValue: Date;
        defaultValue: Date;
        defaultMode: import('./type').CalendarMode;
        modes: import('./type').CalendarMode[];
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('./type').CalendarProps> & Readonly<{
    onChange?: ((value: Date) => any) | undefined;
    "onUpdate:modelValue"?: ((value: Date) => any) | undefined;
    "onUpdate:mode"?: ((mode: import('./type').CalendarMode) => any) | undefined;
    "onPanel-change"?: ((value: Date) => any) | undefined;
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    change: (value: Date) => any;
    "update:modelValue": (value: Date) => any;
    "update:mode": (mode: import('./type').CalendarMode) => any;
    "panel-change": (value: Date) => any;
}, string, {
    mode: import('./type').CalendarMode;
    modelValue: Date;
    defaultValue: Date;
    defaultMode: import('./type').CalendarMode;
    modes: import('./type').CalendarMode[];
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: Readonly<import('./type').CalendarSlots> & import('./type').CalendarSlots;
}) & {
    install: (app: App) => void;
};
declare module 'vue' {
    interface GlobalComponents {
        YcCalendar: typeof Calendar;
    }
}
export default Calendar;
