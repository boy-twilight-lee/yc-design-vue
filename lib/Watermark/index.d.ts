import { App } from 'vue';
import { default as _Watermark } from './index.vue';
export type WatermarkInstance = InstanceType<typeof _Watermark>;
export * from './type';
declare const Watermark: {
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./type').WatermarkProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {
        zIndex: number;
        width: number;
        height: number;
        repeat: boolean;
        content: string | string[];
        alpha: number;
        rotate: number;
        image: string;
        offset: number[];
        gap: number[];
        font: import('./type').WatermarkFont;
        grayscale: boolean;
        staggered: boolean;
        antiTamper: boolean;
    }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {
        containerRef: HTMLDivElement;
    }, HTMLDivElement, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('./type').WatermarkProps> & Readonly<{}>, {}, {}, {}, {}, {
        zIndex: number;
        width: number;
        height: number;
        repeat: boolean;
        content: string | string[];
        alpha: number;
        rotate: number;
        image: string;
        offset: number[];
        gap: number[];
        font: import('./type').WatermarkFont;
        grayscale: boolean;
        staggered: boolean;
        antiTamper: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('./type').WatermarkProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
    zIndex: number;
    width: number;
    height: number;
    repeat: boolean;
    content: string | string[];
    alpha: number;
    rotate: number;
    image: string;
    offset: number[];
    gap: number[];
    font: import('./type').WatermarkFont;
    grayscale: boolean;
    staggered: boolean;
    antiTamper: boolean;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: Readonly<import('./type').WatermarkSlots> & import('./type').WatermarkSlots;
}) & {
    install: (app: App) => void;
};
declare module 'vue' {
    interface GlobalComponents {
        YcWatermark: typeof Watermark;
    }
}
export default Watermark;
