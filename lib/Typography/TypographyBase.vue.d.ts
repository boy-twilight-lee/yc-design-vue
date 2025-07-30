import { TypographyBaseProps, TypographyBaseSlots } from './type';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Readonly<TypographyBaseSlots> & TypographyBaseSlots;
    refs: {
        contentRef: unknown;
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
                readonly maxLength?: import('../Input').MaxLength | undefined;
                readonly wordLength?: import('../Input').WordLength | undefined;
                readonly wordSlice?: import('../Input').WordSlice | undefined;
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
            $options: import('vue').ComponentOptionsBase<Readonly<import('../Input').InputProps> & Readonly<{
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
                maxLength: import('../Input').MaxLength;
                showWordLimit: boolean;
                allowClear: boolean;
                readonly: boolean;
                wordLength: import('../Input').WordLength;
                wordSlice: import('../Input').WordSlice;
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
            maxLength: import('../Input').MaxLength;
            showWordLimit: boolean;
            allowClear: boolean;
            readonly: boolean;
            wordLength: import('../Input').WordLength;
            wordSlice: import('../Input').WordSlice;
            inputAttrs: import('../_shared/type').ObjectData;
            isPassword: boolean;
            defaultVisibility: boolean;
            invisibleButton: boolean;
            showInput: boolean;
        }> & Omit<Readonly<import('../Input').InputProps> & Readonly<{
            [x: `on${Capitalize<any>}`]: ((...args: any) => any) | undefined;
        }>, "focus" | "blur" | "getInputRef" | ("size" | "disabled" | "error" | "visibility" | "modelValue" | "defaultValue" | "placeholder" | "maxLength" | "showWordLimit" | "allowClear" | "readonly" | "wordLength" | "wordSlice" | "inputAttrs" | "isPassword" | "defaultVisibility" | "invisibleButton" | "showInput")> & import('vue').ShallowUnwrapRef<{
            focus(): void;
            blur(): void;
            getInputRef(): HTMLInputElement;
        }> & {} & import('vue').ComponentCustomProperties & {} & {
            $slots: Readonly<import('../Input').InputSlots> & import('../Input').InputSlots;
        }) | null;
    };
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<TypographyBaseProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    change: (value: string) => any;
    copy: (value: string) => any;
    ellipsis: (isEllipsis: boolean) => any;
    expand: (expanded: boolean) => any;
    "update:editing": (value: boolean) => any;
    "update:editText": (value: boolean) => any;
    "edit-start": () => any;
    "edit-end": () => any;
}, string, import('vue').PublicProps, Readonly<TypographyBaseProps> & Readonly<{
    onChange?: ((value: string) => any) | undefined;
    onCopy?: ((value: string) => any) | undefined;
    onEllipsis?: ((isEllipsis: boolean) => any) | undefined;
    onExpand?: ((expanded: boolean) => any) | undefined;
    "onUpdate:editing"?: ((value: boolean) => any) | undefined;
    "onUpdate:editText"?: ((value: boolean) => any) | undefined;
    "onEdit-start"?: (() => any) | undefined;
    "onEdit-end"?: (() => any) | undefined;
}>, {
    delete: boolean;
    ellipsis: boolean | import('./type').EllipsisConfig;
    bold: boolean;
    underline: boolean;
    type: import('./type').TypographyType;
    code: boolean;
    mark: boolean;
    tag: string;
    editable: boolean;
    editing: boolean;
    defaultEditing: boolean;
    editText: string;
    copyable: boolean;
    copyText: string;
    copyDelay: number;
    editTooltiProps: import('../Tooltip').TooltipProps;
    copyTooltiProps: import('../Tooltip').TooltipProps;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    contentRef: unknown;
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
            readonly maxLength?: import('../Input').MaxLength | undefined;
            readonly wordLength?: import('../Input').WordLength | undefined;
            readonly wordSlice?: import('../Input').WordSlice | undefined;
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
        $options: import('vue').ComponentOptionsBase<Readonly<import('../Input').InputProps> & Readonly<{
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
            maxLength: import('../Input').MaxLength;
            showWordLimit: boolean;
            allowClear: boolean;
            readonly: boolean;
            wordLength: import('../Input').WordLength;
            wordSlice: import('../Input').WordSlice;
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
        maxLength: import('../Input').MaxLength;
        showWordLimit: boolean;
        allowClear: boolean;
        readonly: boolean;
        wordLength: import('../Input').WordLength;
        wordSlice: import('../Input').WordSlice;
        inputAttrs: import('../_shared/type').ObjectData;
        isPassword: boolean;
        defaultVisibility: boolean;
        invisibleButton: boolean;
        showInput: boolean;
    }> & Omit<Readonly<import('../Input').InputProps> & Readonly<{
        [x: `on${Capitalize<any>}`]: ((...args: any) => any) | undefined;
    }>, "focus" | "blur" | "getInputRef" | ("size" | "disabled" | "error" | "visibility" | "modelValue" | "defaultValue" | "placeholder" | "maxLength" | "showWordLimit" | "allowClear" | "readonly" | "wordLength" | "wordSlice" | "inputAttrs" | "isPassword" | "defaultVisibility" | "invisibleButton" | "showInput")> & import('vue').ShallowUnwrapRef<{
        focus(): void;
        blur(): void;
        getInputRef(): HTMLInputElement;
    }> & {} & import('vue').ComponentCustomProperties & {} & {
        $slots: Readonly<import('../Input').InputSlots> & import('../Input').InputSlots;
    }) | null;
}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
