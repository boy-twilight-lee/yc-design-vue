import { App } from 'vue';
import { default as _Textarea } from './index.vue';
export type TextareaInstance = InstanceType<typeof _Textarea>;
export * from './type';
declare const Textarea: {
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./type').TextareaProps> & Readonly<{
        onChange?: ((value: string, ev: Event) => any) | undefined;
        onFocus?: ((ev: FocusEvent) => any) | undefined;
        onClear?: ((ev: MouseEvent) => any) | undefined;
        onBlur?: ((ev: FocusEvent) => any) | undefined;
        onInput?: ((value: string, ev: Event) => any) | undefined;
        onKeydown?: ((ev: KeyboardEvent) => any) | undefined;
        "onUpdate:modelValue"?: ((value: string) => any) | undefined;
    }>, {
        focus(): void;
        blur(): void;
        getInputRef(): HTMLTextAreaElement;
        getMirrorRef(): HTMLDivElement;
    }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
        change: (value: string, ev: Event) => any;
        focus: (ev: FocusEvent) => any;
        clear: (ev: MouseEvent) => any;
        blur: (ev: FocusEvent) => any;
        input: (value: string, ev: Event) => any;
        keydown: (ev: KeyboardEvent) => any;
        "update:modelValue": (value: string) => any;
    }, import('vue').PublicProps, {
        disabled: boolean;
        error: import('./type').AutoSize;
        modelValue: string;
        defaultValue: string;
        placeholder: string;
        maxLength: import('..').MaxLength;
        showWordLimit: boolean;
        allowClear: boolean;
        readonly: boolean;
        autoSize: import('./type').AutoSize;
        wordLength: import('..').WordLength;
        wordSlice: import('..').WordSlice;
        enterPrevent: boolean;
        showMirror: boolean;
    }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {
        mirrorRef: HTMLDivElement;
        inputRef: HTMLTextAreaElement;
    }, HTMLDivElement, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('./type').TextareaProps> & Readonly<{
        onChange?: ((value: string, ev: Event) => any) | undefined;
        onFocus?: ((ev: FocusEvent) => any) | undefined;
        onClear?: ((ev: MouseEvent) => any) | undefined;
        onBlur?: ((ev: FocusEvent) => any) | undefined;
        onInput?: ((value: string, ev: Event) => any) | undefined;
        onKeydown?: ((ev: KeyboardEvent) => any) | undefined;
        "onUpdate:modelValue"?: ((value: string) => any) | undefined;
    }>, {
        focus(): void;
        blur(): void;
        getInputRef(): HTMLTextAreaElement;
        getMirrorRef(): HTMLDivElement;
    }, {}, {}, {}, {
        disabled: boolean;
        error: import('./type').AutoSize;
        modelValue: string;
        defaultValue: string;
        placeholder: string;
        maxLength: import('..').MaxLength;
        showWordLimit: boolean;
        allowClear: boolean;
        readonly: boolean;
        autoSize: import('./type').AutoSize;
        wordLength: import('..').WordLength;
        wordSlice: import('..').WordSlice;
        enterPrevent: boolean;
        showMirror: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('./type').TextareaProps> & Readonly<{
    onChange?: ((value: string, ev: Event) => any) | undefined;
    onFocus?: ((ev: FocusEvent) => any) | undefined;
    onClear?: ((ev: MouseEvent) => any) | undefined;
    onBlur?: ((ev: FocusEvent) => any) | undefined;
    onInput?: ((value: string, ev: Event) => any) | undefined;
    onKeydown?: ((ev: KeyboardEvent) => any) | undefined;
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
}>, {
    focus(): void;
    blur(): void;
    getInputRef(): HTMLTextAreaElement;
    getMirrorRef(): HTMLDivElement;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    change: (value: string, ev: Event) => any;
    focus: (ev: FocusEvent) => any;
    clear: (ev: MouseEvent) => any;
    blur: (ev: FocusEvent) => any;
    input: (value: string, ev: Event) => any;
    keydown: (ev: KeyboardEvent) => any;
    "update:modelValue": (value: string) => any;
}, string, {
    disabled: boolean;
    error: import('./type').AutoSize;
    modelValue: string;
    defaultValue: string;
    placeholder: string;
    maxLength: import('..').MaxLength;
    showWordLimit: boolean;
    allowClear: boolean;
    readonly: boolean;
    autoSize: import('./type').AutoSize;
    wordLength: import('..').WordLength;
    wordSlice: import('..').WordSlice;
    enterPrevent: boolean;
    showMirror: boolean;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & {
    install: (app: App) => void;
};
declare module 'vue' {
    interface GlobalComponents {
        YcTextarea: typeof Textarea;
    }
}
export default Textarea;
