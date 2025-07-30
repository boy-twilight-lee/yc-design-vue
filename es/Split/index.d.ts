import { App } from 'vue';
import { default as _Split } from './index.vue';
export type SplitInstance = InstanceType<typeof _Split>;
export * from './type';
declare const Split: {
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./type').SplitProps> & Readonly<{
        "onMoving-start"?: (() => any) | undefined;
        onMoving?: (() => any) | undefined;
        "onMoving-end"?: (() => any) | undefined;
        "onUpdate:size"?: ((value: number) => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
        "moving-start": () => any;
        moving: () => any;
        "moving-end": () => any;
        "update:size": (value: number) => any;
    }, import('vue').PublicProps, {
        size: number | string;
        disabled: boolean;
        component: string;
        direction: import('..').Direction;
        max: number;
        min: number;
        defaultSize: number | string;
    }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {
        splitRef: unknown;
        triggerRef: HTMLDivElement;
    }, any, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('./type').SplitProps> & Readonly<{
        "onMoving-start"?: (() => any) | undefined;
        onMoving?: (() => any) | undefined;
        "onMoving-end"?: (() => any) | undefined;
        "onUpdate:size"?: ((value: number) => any) | undefined;
    }>, {}, {}, {}, {}, {
        size: number | string;
        disabled: boolean;
        component: string;
        direction: import('..').Direction;
        max: number;
        min: number;
        defaultSize: number | string;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('./type').SplitProps> & Readonly<{
    "onMoving-start"?: (() => any) | undefined;
    onMoving?: (() => any) | undefined;
    "onMoving-end"?: (() => any) | undefined;
    "onUpdate:size"?: ((value: number) => any) | undefined;
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    "moving-start": () => any;
    moving: () => any;
    "moving-end": () => any;
    "update:size": (value: number) => any;
}, string, {
    size: number | string;
    disabled: boolean;
    component: string;
    direction: import('..').Direction;
    max: number;
    min: number;
    defaultSize: number | string;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: Readonly<import('./type').SplitSlots> & import('./type').SplitSlots;
}) & {
    install: (app: App) => void;
};
declare module 'vue' {
    interface GlobalComponents {
        YcSplit: typeof Split;
    }
}
export default Split;
