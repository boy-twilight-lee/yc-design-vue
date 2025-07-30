import { App } from 'vue';
import { default as _TimePicker } from './TimePicker.vue';
export type TimePickerInstance = InstanceType<typeof _TimePicker>;
export * from './type';
declare const TimePicker: {
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./type').TimePickerProps> & Readonly<{
        onChange?: ((timeString: string | (string | undefined)[] | undefined, time: Date | (Date | undefined)[] | undefined) => any) | undefined;
        "onUpdate:popupVisible"?: ((value: boolean) => any) | undefined;
        "onPopup-visible-change"?: ((value: boolean) => any) | undefined;
        onClear?: (() => any) | undefined;
        onSelect?: ((timeString: string | (string | undefined)[] | undefined, time: Date | (Date | undefined)[] | undefined) => any) | undefined;
        "onUpdate:modelValue"?: ((value: import('./type').TimePickerValue) => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
        change: (timeString: string | (string | undefined)[] | undefined, time: Date | (Date | undefined)[] | undefined) => any;
        "update:popupVisible": (value: boolean) => any;
        "popup-visible-change": (value: boolean) => any;
        clear: () => any;
        select: (timeString: string | (string | undefined)[] | undefined, time: Date | (Date | undefined)[] | undefined) => any;
        "update:modelValue": (value: import('./type').TimePickerValue) => any;
    }, import('vue').PublicProps, {
        size: import('..').Size;
        popupVisible: boolean;
        defaultPopupVisible: boolean;
        disabled: boolean;
        position: import('./type').TimePickerPosition;
        unmountOnClose: boolean;
        popupContainer: import('..').PopupContainer;
        error: boolean;
        type: import('./type').TimePickerType;
        triggerProps: import('..').TriggerProps;
        format: string;
        disabledHours: import('./type').DisabledHours;
        disabledMinutes: import('./type').DisabledMinutes;
        disabledSeconds: import('./type').DisabledSeconds;
        hideDisabledOptions: boolean;
        modelValue: import('./type').TimePickerValue;
        defaultValue: import('./type').TimePickerValue;
        placeholder: string | string[];
        allowClear: boolean;
        readonly: boolean;
    }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {
        panelRef: ({
            $: import('vue').ComponentInternalInstance;
            $data: {};
            $props: Partial<{}> & Omit<{} & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, never>;
            $attrs: {
                [x: string]: unknown;
            };
            $refs: {
                [x: string]: unknown;
            };
            $slots: Readonly<{
                [name: string]: import('vue').Slot<any> | undefined;
            }>;
            $root: import('vue').ComponentPublicInstance | null;
            $parent: import('vue').ComponentPublicInstance | null;
            $host: Element | null;
            $emit: (event: string, ...args: any[]) => void;
            $el: HTMLDivElement;
            $options: import('vue').ComponentOptionsBase<Readonly<{}> & Readonly<{}>, {
                scroll(value: string): Promise<void>;
            }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & {
                beforeCreate?: (() => void) | (() => void)[];
                created?: (() => void) | (() => void)[];
                beforeMount?: (() => void) | (() => void)[];
                mounted?: (() => void) | (() => void)[];
                beforeUpdate?: (() => void) | (() => void)[];
                updated?: (() => void) | (() => void)[];
                activated?: (() => void) | (() => void)[];
                deactivated?: (() => void) | (() => void)[];
                beforeDestroy?: (() => void) | (() => void)[];
                beforeUnmount?: (() => void) | (() => void)[];
                destroyed?: (() => void) | (() => void)[];
                unmounted?: (() => void) | (() => void)[];
                renderTracked?: ((e: import('vue').DebuggerEvent) => void) | ((e: import('vue').DebuggerEvent) => void)[];
                renderTriggered?: ((e: import('vue').DebuggerEvent) => void) | ((e: import('vue').DebuggerEvent) => void)[];
                errorCaptured?: ((err: unknown, instance: import('vue').ComponentPublicInstance | null, info: string) => boolean | void) | ((err: unknown, instance: import('vue').ComponentPublicInstance | null, info: string) => boolean | void)[];
            };
            $forceUpdate: () => void;
            $nextTick: typeof import('vue').nextTick;
            $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (...args: [R, R, import('@vue/reactivity').OnCleanup]) => any : (...args: [any, any, import('@vue/reactivity').OnCleanup]) => any, options?: import('vue').WatchOptions): import('vue').WatchStopHandle;
        } & Readonly<{}> & Omit<Readonly<{}> & Readonly<{}>, "scroll"> & import('vue').ShallowUnwrapRef<{
            scroll(value: string): Promise<void>;
        }> & {} & import('vue').ComponentCustomProperties & {} & {
            $slots: {
                extra?(_: {}): any;
            };
        }) | null;
    }, any, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('./type').TimePickerProps> & Readonly<{
        onChange?: ((timeString: string | (string | undefined)[] | undefined, time: Date | (Date | undefined)[] | undefined) => any) | undefined;
        "onUpdate:popupVisible"?: ((value: boolean) => any) | undefined;
        "onPopup-visible-change"?: ((value: boolean) => any) | undefined;
        onClear?: (() => any) | undefined;
        onSelect?: ((timeString: string | (string | undefined)[] | undefined, time: Date | (Date | undefined)[] | undefined) => any) | undefined;
        "onUpdate:modelValue"?: ((value: import('./type').TimePickerValue) => any) | undefined;
    }>, {}, {}, {}, {}, {
        size: import('..').Size;
        popupVisible: boolean;
        defaultPopupVisible: boolean;
        disabled: boolean;
        position: import('./type').TimePickerPosition;
        unmountOnClose: boolean;
        popupContainer: import('..').PopupContainer;
        error: boolean;
        type: import('./type').TimePickerType;
        triggerProps: import('..').TriggerProps;
        format: string;
        disabledHours: import('./type').DisabledHours;
        disabledMinutes: import('./type').DisabledMinutes;
        disabledSeconds: import('./type').DisabledSeconds;
        hideDisabledOptions: boolean;
        modelValue: import('./type').TimePickerValue;
        defaultValue: import('./type').TimePickerValue;
        placeholder: string | string[];
        allowClear: boolean;
        readonly: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('./type').TimePickerProps> & Readonly<{
    onChange?: ((timeString: string | (string | undefined)[] | undefined, time: Date | (Date | undefined)[] | undefined) => any) | undefined;
    "onUpdate:popupVisible"?: ((value: boolean) => any) | undefined;
    "onPopup-visible-change"?: ((value: boolean) => any) | undefined;
    onClear?: (() => any) | undefined;
    onSelect?: ((timeString: string | (string | undefined)[] | undefined, time: Date | (Date | undefined)[] | undefined) => any) | undefined;
    "onUpdate:modelValue"?: ((value: import('./type').TimePickerValue) => any) | undefined;
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    change: (timeString: string | (string | undefined)[] | undefined, time: Date | (Date | undefined)[] | undefined) => any;
    "update:popupVisible": (value: boolean) => any;
    "popup-visible-change": (value: boolean) => any;
    clear: () => any;
    select: (timeString: string | (string | undefined)[] | undefined, time: Date | (Date | undefined)[] | undefined) => any;
    "update:modelValue": (value: import('./type').TimePickerValue) => any;
}, string, {
    size: import('..').Size;
    popupVisible: boolean;
    defaultPopupVisible: boolean;
    disabled: boolean;
    position: import('./type').TimePickerPosition;
    unmountOnClose: boolean;
    popupContainer: import('..').PopupContainer;
    error: boolean;
    type: import('./type').TimePickerType;
    triggerProps: import('..').TriggerProps;
    format: string;
    disabledHours: import('./type').DisabledHours;
    disabledMinutes: import('./type').DisabledMinutes;
    disabledSeconds: import('./type').DisabledSeconds;
    hideDisabledOptions: boolean;
    modelValue: import('./type').TimePickerValue;
    defaultValue: import('./type').TimePickerValue;
    placeholder: string | string[];
    allowClear: boolean;
    readonly: boolean;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: Readonly<import('./type').TimePickerSlots> & import('./type').TimePickerSlots;
}) & {
    install: (app: App) => void;
};
declare module 'vue' {
    interface GlobalComponents {
        YcTimePicker: typeof TimePicker;
    }
}
export default TimePicker;
