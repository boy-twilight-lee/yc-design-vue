import { App } from 'vue';
import { default as _Cascader } from './Cascader.vue';
export type CascaderInstance = InstanceType<typeof _Cascader>;
export * from './type';
declare const Cascader: {
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./type').CascaderProps> & Readonly<{
        [x: `on${Capitalize<any>}`]: ((...args: any) => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        [x: string]: any;
    } & {
        [x: string]: any;
    }, import('vue').PublicProps, {
        size: import('..').Size;
        popupVisible: boolean;
        defaultPopupVisible: boolean;
        disabled: boolean;
        popupContainer: import('..').PopupContainer;
        loading: boolean;
        error: boolean;
        multiple: boolean;
        triggerProps: import('..').TriggerProps;
        modelValue: import('./type').CascaderValue;
        defaultValue: import('./type').CascaderValue;
        placeholder: string;
        allowClear: boolean;
        options: import('./type').CascaderOption[];
        formatLabel: (options: import('./type').CascaderOption[]) => string;
        inputValue: string;
        defaultInputValue: string;
        fieldNames: Record<string, string>;
        allowSearch: boolean;
        valueKey: string;
        maxTagCount: number;
        filterOption: (inputValue: string, option: import('./type').CascaderOption) => boolean;
        searchDelay: number;
        tagNowrap: boolean;
        pathMode: boolean;
        expandTrigger: import('./type').ExpandTrigger;
        expandChild: boolean;
        searchOptionOnlyLabel: boolean;
        loadMore: import('./type').LoadMore;
        fallback: import('./type').FallBack;
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
    }, any, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('./type').CascaderProps> & Readonly<{
        [x: `on${Capitalize<any>}`]: ((...args: any) => any) | undefined;
    }>, {}, {}, {}, {}, {
        size: import('..').Size;
        popupVisible: boolean;
        defaultPopupVisible: boolean;
        disabled: boolean;
        popupContainer: import('..').PopupContainer;
        loading: boolean;
        error: boolean;
        multiple: boolean;
        triggerProps: import('..').TriggerProps;
        modelValue: import('./type').CascaderValue;
        defaultValue: import('./type').CascaderValue;
        placeholder: string;
        allowClear: boolean;
        options: import('./type').CascaderOption[];
        formatLabel: (options: import('./type').CascaderOption[]) => string;
        inputValue: string;
        defaultInputValue: string;
        fieldNames: Record<string, string>;
        allowSearch: boolean;
        valueKey: string;
        maxTagCount: number;
        filterOption: (inputValue: string, option: import('./type').CascaderOption) => boolean;
        searchDelay: number;
        tagNowrap: boolean;
        pathMode: boolean;
        expandTrigger: import('./type').ExpandTrigger;
        expandChild: boolean;
        searchOptionOnlyLabel: boolean;
        loadMore: import('./type').LoadMore;
        fallback: import('./type').FallBack;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('./type').CascaderProps> & Readonly<{
    [x: `on${Capitalize<any>}`]: ((...args: any) => any) | undefined;
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    [x: string]: any;
} & {
    [x: string]: any;
}, string, {
    size: import('..').Size;
    popupVisible: boolean;
    defaultPopupVisible: boolean;
    disabled: boolean;
    popupContainer: import('..').PopupContainer;
    loading: boolean;
    error: boolean;
    multiple: boolean;
    triggerProps: import('..').TriggerProps;
    modelValue: import('./type').CascaderValue;
    defaultValue: import('./type').CascaderValue;
    placeholder: string;
    allowClear: boolean;
    options: import('./type').CascaderOption[];
    formatLabel: (options: import('./type').CascaderOption[]) => string;
    inputValue: string;
    defaultInputValue: string;
    fieldNames: Record<string, string>;
    allowSearch: boolean;
    valueKey: string;
    maxTagCount: number;
    filterOption: (inputValue: string, option: import('./type').CascaderOption) => boolean;
    searchDelay: number;
    tagNowrap: boolean;
    pathMode: boolean;
    expandTrigger: import('./type').ExpandTrigger;
    expandChild: boolean;
    searchOptionOnlyLabel: boolean;
    loadMore: import('./type').LoadMore;
    fallback: import('./type').FallBack;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        label?(_: {
            tag: import('../_shared/type').ObjectData;
        }): any;
        label?(_: {
            data: any;
        }): any;
        prefix?(_: {}): any;
        prefix?(_: {}): any;
    };
}) & {
    install: (app: App) => void;
};
declare module 'vue' {
    interface GlobalComponents {
        YcCascader: typeof Cascader;
    }
}
export default Cascader;
