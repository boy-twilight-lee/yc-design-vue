import { App } from 'vue';
import { default as _Input } from './Input.vue';
export type InputInstance = InstanceType<typeof _Input>;
export * from './type';
declare const Input: {
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./type').InputProps> & Readonly<{
        [x: `on${Capitalize<any>}`]: ((...args: any) => any) | undefined;
    }>, {
        focus(): void;
        blur(): void;
        getInputRef(): HTMLInputElement;
    }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        [x: string]: any;
    } & {
        [x: string]: any;
    }, import('vue').PublicProps, {
        size: import('..').Size;
        disabled: boolean;
        error: boolean;
        visibility: boolean;
        modelValue: string;
        defaultValue: string;
        placeholder: string;
        maxLength: import('./type').MaxLength;
        showWordLimit: boolean;
        allowClear: boolean;
        readonly: boolean;
        wordLength: import('./type').WordLength;
        wordSlice: import('./type').WordSlice;
        inputAttrs: import('../_shared/type').ObjectData;
        isPassword: boolean;
        defaultVisibility: boolean;
        invisibleButton: boolean;
        showInput: boolean;
    }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {
        inputRef: HTMLInputElement;
    }, HTMLDivElement, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('./type').InputProps> & Readonly<{
        [x: `on${Capitalize<any>}`]: ((...args: any) => any) | undefined;
    }>, {
        focus(): void;
        blur(): void;
        getInputRef(): HTMLInputElement;
    }, {}, {}, {}, {
        size: import('..').Size;
        disabled: boolean;
        error: boolean;
        visibility: boolean;
        modelValue: string;
        defaultValue: string;
        placeholder: string;
        maxLength: import('./type').MaxLength;
        showWordLimit: boolean;
        allowClear: boolean;
        readonly: boolean;
        wordLength: import('./type').WordLength;
        wordSlice: import('./type').WordSlice;
        inputAttrs: import('../_shared/type').ObjectData;
        isPassword: boolean;
        defaultVisibility: boolean;
        invisibleButton: boolean;
        showInput: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('./type').InputProps> & Readonly<{
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
    maxLength: import('./type').MaxLength;
    showWordLimit: boolean;
    allowClear: boolean;
    readonly: boolean;
    wordLength: import('./type').WordLength;
    wordSlice: import('./type').WordSlice;
    inputAttrs: import('../_shared/type').ObjectData;
    isPassword: boolean;
    defaultVisibility: boolean;
    invisibleButton: boolean;
    showInput: boolean;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: Readonly<import('./type').InputSlots> & import('./type').InputSlots;
}) & {
    install: (app: App) => void;
};
declare module 'vue' {
    interface GlobalComponents {
        YcInput: typeof Input;
    }
}
export default Input;
