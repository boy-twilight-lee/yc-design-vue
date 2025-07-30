import { App } from 'vue';
import { default as _ResizeBox } from './index.vue';
export type ResizeBoxInstance = InstanceType<typeof _ResizeBox>;
export * from './type';
declare const ResizeBox: {
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./type').ResizeBoxProps> & Readonly<{
        "onUpdate:width"?: ((value: number) => any) | undefined;
        "onUpdate:height"?: ((value: number) => any) | undefined;
        "onMoving-start"?: ((ev: MouseEvent) => any) | undefined;
        onMoving?: ((size: {
            width: number;
            height: number;
        }, ev: MouseEvent) => any) | undefined;
        "onMoving-end"?: ((ev: MouseEvent) => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
        "update:width": (value: number) => any;
        "update:height": (value: number) => any;
        "moving-start": (ev: MouseEvent) => any;
        moving: (size: {
            width: number;
            height: number;
        }, ev: MouseEvent) => any;
        "moving-end": (ev: MouseEvent) => any;
    }, import('vue').PublicProps, {
        width: number;
        height: number;
        component: string;
        directions: import('./type').ResizeBoxDirection[];
    }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {
        boxRef: unknown;
    }, any, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('./type').ResizeBoxProps> & Readonly<{
        "onUpdate:width"?: ((value: number) => any) | undefined;
        "onUpdate:height"?: ((value: number) => any) | undefined;
        "onMoving-start"?: ((ev: MouseEvent) => any) | undefined;
        onMoving?: ((size: {
            width: number;
            height: number;
        }, ev: MouseEvent) => any) | undefined;
        "onMoving-end"?: ((ev: MouseEvent) => any) | undefined;
    }>, {}, {}, {}, {}, {
        width: number;
        height: number;
        component: string;
        directions: import('./type').ResizeBoxDirection[];
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('./type').ResizeBoxProps> & Readonly<{
    "onUpdate:width"?: ((value: number) => any) | undefined;
    "onUpdate:height"?: ((value: number) => any) | undefined;
    "onMoving-start"?: ((ev: MouseEvent) => any) | undefined;
    onMoving?: ((size: {
        width: number;
        height: number;
    }, ev: MouseEvent) => any) | undefined;
    "onMoving-end"?: ((ev: MouseEvent) => any) | undefined;
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    "update:width": (value: number) => any;
    "update:height": (value: number) => any;
    "moving-start": (ev: MouseEvent) => any;
    moving: (size: {
        width: number;
        height: number;
    }, ev: MouseEvent) => any;
    "moving-end": (ev: MouseEvent) => any;
}, string, {
    width: number;
    height: number;
    component: string;
    directions: import('./type').ResizeBoxDirection[];
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: Readonly<import('./type').ResizeBoxSlots> & import('./type').ResizeBoxSlots;
}) & {
    install: (app: App) => void;
};
declare module 'vue' {
    interface GlobalComponents {
        YcResizeBox: typeof ResizeBox;
    }
}
export default ResizeBox;
