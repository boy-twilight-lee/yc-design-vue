import { App } from 'vue';
import { default as _InputNumber } from './InputNumber.vue';
export type InputNumberInstance = InstanceType<typeof _InputNumber>;
export * from './type';
declare const InputNumber: {
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./type').InputNumberProps> & Readonly<{
        onChange?: ((value: import('./type').InputNumberValue, ev: Event) => any) | undefined;
        onFocus?: ((ev: FocusEvent) => any) | undefined;
        onClear?: ((ev: MouseEvent) => any) | undefined;
        onBlur?: ((ev: FocusEvent) => any) | undefined;
        onInput?: ((value: import('./type').InputNumberValue, ev: Event) => any) | undefined;
        onKeydown?: ((ev: KeyboardEvent) => any) | undefined;
        "onUpdate:modelValue"?: ((value: import('./type').InputNumberValue) => any) | undefined;
        onPressEnter?: ((ev: KeyboardEvent) => any) | undefined;
    }>, {
        focus(): void;
        blur(): void;
    }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
        change: (value: import('./type').InputNumberValue, ev: Event) => any;
        focus: (ev: FocusEvent) => any;
        clear: (ev: MouseEvent) => any;
        blur: (ev: FocusEvent) => any;
        input: (value: import('./type').InputNumberValue, ev: Event) => any;
        keydown: (ev: KeyboardEvent) => any;
        "update:modelValue": (value: import('./type').InputNumberValue) => any;
        pressEnter: (ev: KeyboardEvent) => any;
    }, import('vue').PublicProps, {
        size: import('..').Size;
        disabled: boolean;
        error: boolean;
        mode: import('./type').InputNumberMode;
        step: number;
        modelValue: import('./type').InputNumberValue;
        defaultValue: import('./type').InputNumberValue;
        placeholder: string;
        allowClear: boolean;
        readonly: boolean;
        inputAttrs: import('../_shared/type').ObjectData;
        max: number;
        min: number;
        precision: number;
        hideButton: boolean;
        modelEvent: import('./type').ModelEvent;
    }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {
        inputRef: ({
            $: import('vue').ComponentInternalInstance;
            $data: {};
            $props: {
                readonly [x: `on${Capitalize<any>}`]: ((...args: any) => any) | undefined;
                readonly modelValue?: string | undefined;
                readonly defaultValue?: string | undefined;
                readonly size?: import('..').Size | undefined;
                readonly allowClear?: boolean | undefined;
                readonly disabled?: boolean | undefined;
                readonly readonly?: boolean | undefined;
                readonly error?: boolean | undefined;
                readonly placeholder?: string | undefined;
                readonly maxLength?: import('..').MaxLength | undefined;
                readonly wordLength?: import('..').WordLength | undefined;
                readonly wordSlice?: import('..').WordSlice | undefined;
                readonly showWordLimit?: boolean | undefined;
                readonly inputAttrs?: import('../_shared/type').ObjectData | undefined;
                readonly isPassword?: boolean | undefined;
                readonly visibility?: boolean | undefined;
                readonly defaultVisibility?: boolean | undefined;
                readonly invisibleButton?: boolean | undefined;
                readonly showInput?: boolean | undefined;
            } & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps;
            $attrs: {
                [x: string]: unknown;
            };
            $refs: {
                [x: string]: unknown;
            } & {
                inputRef: HTMLInputElement;
            };
            $slots: Readonly<{
                [name: string]: import('vue').Slot<any> | undefined;
            }>;
            $root: import('vue').ComponentPublicInstance | null;
            $parent: import('vue').ComponentPublicInstance | null;
            $host: Element | null;
            $emit: (event: string, ...args: any[]) => void;
            $el: HTMLDivElement;
            $options: import('vue').ComponentOptionsBase<Readonly<import('..').InputProps> & Readonly<{
                [x: `on${Capitalize<any>}`]: ((...args: any) => any) | undefined;
            }>, {
                focus(): void;
                blur(): void;
                getInputRef(): HTMLInputElement;
            }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
                [x: string]: any;
            } & {
                [x: string]: any;
            }, string, {
                size: import('..').Size;
                disabled: boolean;
                error: boolean;
                visibility: boolean;
                modelValue: string;
                defaultValue: string;
                placeholder: string;
                maxLength: import('..').MaxLength;
                showWordLimit: boolean;
                allowClear: boolean;
                readonly: boolean;
                wordLength: import('..').WordLength;
                wordSlice: import('..').WordSlice;
                inputAttrs: import('../_shared/type').ObjectData;
                isPassword: boolean;
                defaultVisibility: boolean;
                invisibleButton: boolean;
                showInput: boolean;
            }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & {
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
        } & Readonly<{
            size: import('..').Size;
            disabled: boolean;
            error: boolean;
            visibility: boolean;
            modelValue: string;
            defaultValue: string;
            placeholder: string;
            maxLength: import('..').MaxLength;
            showWordLimit: boolean;
            allowClear: boolean;
            readonly: boolean;
            wordLength: import('..').WordLength;
            wordSlice: import('..').WordSlice;
            inputAttrs: import('../_shared/type').ObjectData;
            isPassword: boolean;
            defaultVisibility: boolean;
            invisibleButton: boolean;
            showInput: boolean;
        }> & Omit<Readonly<import('..').InputProps> & Readonly<{
            [x: `on${Capitalize<any>}`]: ((...args: any) => any) | undefined;
        }>, "focus" | "blur" | "getInputRef" | ("size" | "disabled" | "error" | "visibility" | "modelValue" | "defaultValue" | "placeholder" | "maxLength" | "showWordLimit" | "allowClear" | "readonly" | "wordLength" | "wordSlice" | "inputAttrs" | "isPassword" | "defaultVisibility" | "invisibleButton" | "showInput")> & import('vue').ShallowUnwrapRef<{
            focus(): void;
            blur(): void;
            getInputRef(): HTMLInputElement;
        }> & {} & import('vue').ComponentCustomProperties & {} & {
            $slots: Readonly<import('..').InputSlots> & import('..').InputSlots;
        }) | null;
    }, HTMLDivElement, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('./type').InputNumberProps> & Readonly<{
        onChange?: ((value: import('./type').InputNumberValue, ev: Event) => any) | undefined;
        onFocus?: ((ev: FocusEvent) => any) | undefined;
        onClear?: ((ev: MouseEvent) => any) | undefined;
        onBlur?: ((ev: FocusEvent) => any) | undefined;
        onInput?: ((value: import('./type').InputNumberValue, ev: Event) => any) | undefined;
        onKeydown?: ((ev: KeyboardEvent) => any) | undefined;
        "onUpdate:modelValue"?: ((value: import('./type').InputNumberValue) => any) | undefined;
        onPressEnter?: ((ev: KeyboardEvent) => any) | undefined;
    }>, {
        focus(): void;
        blur(): void;
    }, {}, {}, {}, {
        size: import('..').Size;
        disabled: boolean;
        error: boolean;
        mode: import('./type').InputNumberMode;
        step: number;
        modelValue: import('./type').InputNumberValue;
        defaultValue: import('./type').InputNumberValue;
        placeholder: string;
        allowClear: boolean;
        readonly: boolean;
        inputAttrs: import('../_shared/type').ObjectData;
        max: number;
        min: number;
        precision: number;
        hideButton: boolean;
        modelEvent: import('./type').ModelEvent;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('./type').InputNumberProps> & Readonly<{
    onChange?: ((value: import('./type').InputNumberValue, ev: Event) => any) | undefined;
    onFocus?: ((ev: FocusEvent) => any) | undefined;
    onClear?: ((ev: MouseEvent) => any) | undefined;
    onBlur?: ((ev: FocusEvent) => any) | undefined;
    onInput?: ((value: import('./type').InputNumberValue, ev: Event) => any) | undefined;
    onKeydown?: ((ev: KeyboardEvent) => any) | undefined;
    "onUpdate:modelValue"?: ((value: import('./type').InputNumberValue) => any) | undefined;
    onPressEnter?: ((ev: KeyboardEvent) => any) | undefined;
}>, {
    focus(): void;
    blur(): void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    change: (value: import('./type').InputNumberValue, ev: Event) => any;
    focus: (ev: FocusEvent) => any;
    clear: (ev: MouseEvent) => any;
    blur: (ev: FocusEvent) => any;
    input: (value: import('./type').InputNumberValue, ev: Event) => any;
    keydown: (ev: KeyboardEvent) => any;
    "update:modelValue": (value: import('./type').InputNumberValue) => any;
    pressEnter: (ev: KeyboardEvent) => any;
}, string, {
    size: import('..').Size;
    disabled: boolean;
    error: boolean;
    mode: import('./type').InputNumberMode;
    step: number;
    modelValue: import('./type').InputNumberValue;
    defaultValue: import('./type').InputNumberValue;
    placeholder: string;
    allowClear: boolean;
    readonly: boolean;
    inputAttrs: import('../_shared/type').ObjectData;
    max: number;
    min: number;
    precision: number;
    hideButton: boolean;
    modelEvent: import('./type').ModelEvent;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: Readonly<import('./type').InputNumberSlots> & import('./type').InputNumberSlots;
}) & {
    install: (app: App) => void;
};
declare module 'vue' {
    interface GlobalComponents {
        YcInputNumber: typeof InputNumber;
    }
}
export default InputNumber;
