import { TimePickerProps, TimePickerSlots } from './type';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Readonly<TimePickerSlots> & TimePickerSlots;
    refs: {
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
    };
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<TimePickerProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    change: (timeString: string | (string | undefined)[] | undefined, time: Date | (Date | undefined)[] | undefined) => any;
    "update:popupVisible": (value: boolean) => any;
    "popup-visible-change": (value: boolean) => any;
    clear: () => any;
    select: (timeString: string | (string | undefined)[] | undefined, time: Date | (Date | undefined)[] | undefined) => any;
    "update:modelValue": (value: import('./type').TimePickerValue) => any;
}, string, import('vue').PublicProps, Readonly<TimePickerProps> & Readonly<{
    onChange?: ((timeString: string | (string | undefined)[] | undefined, time: Date | (Date | undefined)[] | undefined) => any) | undefined;
    "onUpdate:popupVisible"?: ((value: boolean) => any) | undefined;
    "onPopup-visible-change"?: ((value: boolean) => any) | undefined;
    onClear?: (() => any) | undefined;
    onSelect?: ((timeString: string | (string | undefined)[] | undefined, time: Date | (Date | undefined)[] | undefined) => any) | undefined;
    "onUpdate:modelValue"?: ((value: import('./type').TimePickerValue) => any) | undefined;
}>, {
    size: import('..').Size;
    popupVisible: boolean;
    defaultPopupVisible: boolean;
    disabled: boolean;
    position: import('./type').TimePickerPosition;
    unmountOnClose: boolean;
    popupContainer: import('..').PopupContainer;
    error: boolean;
    type: import('./type').TimePickerType;
    triggerProps: import('../Trigger').TriggerProps;
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
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
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
}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
