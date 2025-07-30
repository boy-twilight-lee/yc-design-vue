import { App } from 'vue';
import { default as _InputTag } from './index.vue';
export type InputTagInstance = InstanceType<typeof _InputTag>;
export * from './type';
declare const InputTag: {
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./type').InputTagProps> & Readonly<{
        [x: `on${Capitalize<any>}`]: ((...args: any) => any) | undefined;
    }>, {
        focus(): void;
        blur(): void;
    }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        [x: string]: any;
    } & {
        [x: string]: any;
    }, import('vue').PublicProps, {
        size: import('..').Size;
        disabled: boolean;
        error: boolean;
        modelValue: import('./type').InputTagValue;
        defaultValue: import('./type').InputTagValue;
        placeholder: string;
        allowClear: boolean;
        readonly: boolean;
        inputValue: string;
        defaultInputValue: string;
        fieldNames: Record<string, string>;
        allowCreate: boolean;
        maxTagCount: number;
        tagNowrap: boolean;
        retainInputValue: import('./type').InputRetainValue;
        uniqueValue: boolean;
    }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {
        mirrorRef: HTMLDivElement;
        inputRef: HTMLInputElement;
    }, HTMLDivElement, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('./type').InputTagProps> & Readonly<{
        [x: `on${Capitalize<any>}`]: ((...args: any) => any) | undefined;
    }>, {
        focus(): void;
        blur(): void;
    }, {}, {}, {}, {
        size: import('..').Size;
        disabled: boolean;
        error: boolean;
        modelValue: import('./type').InputTagValue;
        defaultValue: import('./type').InputTagValue;
        placeholder: string;
        allowClear: boolean;
        readonly: boolean;
        inputValue: string;
        defaultInputValue: string;
        fieldNames: Record<string, string>;
        allowCreate: boolean;
        maxTagCount: number;
        tagNowrap: boolean;
        retainInputValue: import('./type').InputRetainValue;
        uniqueValue: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('./type').InputTagProps> & Readonly<{
    [x: `on${Capitalize<any>}`]: ((...args: any) => any) | undefined;
}>, {
    focus(): void;
    blur(): void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    [x: string]: any;
} & {
    [x: string]: any;
}, string, {
    size: import('..').Size;
    disabled: boolean;
    error: boolean;
    modelValue: import('./type').InputTagValue;
    defaultValue: import('./type').InputTagValue;
    placeholder: string;
    allowClear: boolean;
    readonly: boolean;
    inputValue: string;
    defaultInputValue: string;
    fieldNames: Record<string, string>;
    allowCreate: boolean;
    maxTagCount: number;
    tagNowrap: boolean;
    retainInputValue: import('./type').InputRetainValue;
    uniqueValue: boolean;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: Readonly<import('./type').InputTagSlots> & import('./type').InputTagSlots;
}) & {
    install: (app: App) => void;
};
declare module 'vue' {
    interface GlobalComponents {
        YcInputTag: typeof InputTag;
    }
}
export default InputTag;
