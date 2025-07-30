import { App } from 'vue';
import { default as _Transfer } from './Transfer.vue';
export type TransferInstance = InstanceType<typeof _Transfer>;
export * from './type';
declare const Transfer: {
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./type').TransferProps> & Readonly<{
        onChange?: ((value: import('./type').TransferItemValue[]) => any) | undefined;
        onSelect?: ((value: import('./type').TransferItemValue[]) => any) | undefined;
        onSearch?: ((value: string, type: "source" | "target") => any) | undefined;
        "onUpdate:modelValue"?: ((value: import('./type').TransferItemValue[]) => any) | undefined;
        "onUpdate:selected"?: ((value: import('./type').TransferItemValue[]) => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
        change: (value: import('./type').TransferItemValue[]) => any;
        select: (value: import('./type').TransferItemValue[]) => any;
        search: (value: string, type: "source" | "target") => any;
        "update:modelValue": (value: import('./type').TransferItemValue[]) => any;
        "update:selected": (value: import('./type').TransferItemValue[]) => any;
    }, import('vue').PublicProps, {
        disabled: boolean;
        data: import('./type').TransferItem[];
        title: string[];
        modelValue: string[];
        defaultValue: string[];
        simple: boolean;
        selected: string[];
        defaultSelected: string[];
        oneWay: boolean;
        sourceInputSearchProps: import('..').InputProps;
        targetInputSearchProps: import('..').InputProps;
        showSearch: boolean;
        showSelectAll: boolean;
    }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLDivElement, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('./type').TransferProps> & Readonly<{
        onChange?: ((value: import('./type').TransferItemValue[]) => any) | undefined;
        onSelect?: ((value: import('./type').TransferItemValue[]) => any) | undefined;
        onSearch?: ((value: string, type: "source" | "target") => any) | undefined;
        "onUpdate:modelValue"?: ((value: import('./type').TransferItemValue[]) => any) | undefined;
        "onUpdate:selected"?: ((value: import('./type').TransferItemValue[]) => any) | undefined;
    }>, {}, {}, {}, {}, {
        disabled: boolean;
        data: import('./type').TransferItem[];
        title: string[];
        modelValue: string[];
        defaultValue: string[];
        simple: boolean;
        selected: string[];
        defaultSelected: string[];
        oneWay: boolean;
        sourceInputSearchProps: import('..').InputProps;
        targetInputSearchProps: import('..').InputProps;
        showSearch: boolean;
        showSelectAll: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('./type').TransferProps> & Readonly<{
    onChange?: ((value: import('./type').TransferItemValue[]) => any) | undefined;
    onSelect?: ((value: import('./type').TransferItemValue[]) => any) | undefined;
    onSearch?: ((value: string, type: "source" | "target") => any) | undefined;
    "onUpdate:modelValue"?: ((value: import('./type').TransferItemValue[]) => any) | undefined;
    "onUpdate:selected"?: ((value: import('./type').TransferItemValue[]) => any) | undefined;
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    change: (value: import('./type').TransferItemValue[]) => any;
    select: (value: import('./type').TransferItemValue[]) => any;
    search: (value: string, type: "source" | "target") => any;
    "update:modelValue": (value: import('./type').TransferItemValue[]) => any;
    "update:selected": (value: import('./type').TransferItemValue[]) => any;
}, string, {
    disabled: boolean;
    data: import('./type').TransferItem[];
    title: string[];
    modelValue: string[];
    defaultValue: string[];
    simple: boolean;
    selected: string[];
    defaultSelected: string[];
    oneWay: boolean;
    sourceInputSearchProps: import('..').InputProps;
    targetInputSearchProps: import('..').InputProps;
    showSearch: boolean;
    showSelectAll: boolean;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: Readonly<import('./type').TransferSlots> & import('./type').TransferSlots;
}) & {
    install: (app: App) => void;
};
declare module 'vue' {
    interface GlobalComponents {
        YcTransfer: typeof Transfer;
    }
}
export default Transfer;
