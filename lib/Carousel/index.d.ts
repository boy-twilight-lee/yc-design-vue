import { App } from 'vue';
import { default as _Carousel } from './Carousel.vue';
import { default as _CarouselItem } from './CarouselItem.vue';
export type CarouselInstance = InstanceType<typeof _Carousel>;
export type CarouselItemInstance = InstanceType<typeof _CarouselItem>;
export * from './type';
declare const Carousel: {
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./type').CarouselProps> & Readonly<{
        onChange?: ((index: number, preIndex: number, isManual: boolean) => any) | undefined;
        "onUpdate:current"?: ((index: number) => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
        change: (index: number, preIndex: number, isManual: boolean) => any;
        "update:current": (index: number) => any;
    }, import('vue').PublicProps, {
        trigger: import('./type').IndicatorTrigger;
        showArrow: import('./type').CarouselShowArrow;
        arrowClass: import('../_shared/type').ClassName;
        animationName: import('./type').CarouselAnimationName;
        direction: import('..').Direction;
        transitionTimingFunction: string;
        moveSpeed: number;
        current: number;
        defaultCurrent: number;
        autoPlay: import('./type').AutoPlay;
        indicatorType: import('./type').IndicatorType;
        indicatorPosition: import('./type').IndicatorPosition;
        indicatorClass: import('../_shared/type').ClassName;
    }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLDivElement, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('./type').CarouselProps> & Readonly<{
        onChange?: ((index: number, preIndex: number, isManual: boolean) => any) | undefined;
        "onUpdate:current"?: ((index: number) => any) | undefined;
    }>, {}, {}, {}, {}, {
        trigger: import('./type').IndicatorTrigger;
        showArrow: import('./type').CarouselShowArrow;
        arrowClass: import('../_shared/type').ClassName;
        animationName: import('./type').CarouselAnimationName;
        direction: import('..').Direction;
        transitionTimingFunction: string;
        moveSpeed: number;
        current: number;
        defaultCurrent: number;
        autoPlay: import('./type').AutoPlay;
        indicatorType: import('./type').IndicatorType;
        indicatorPosition: import('./type').IndicatorPosition;
        indicatorClass: import('../_shared/type').ClassName;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('./type').CarouselProps> & Readonly<{
    onChange?: ((index: number, preIndex: number, isManual: boolean) => any) | undefined;
    "onUpdate:current"?: ((index: number) => any) | undefined;
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    change: (index: number, preIndex: number, isManual: boolean) => any;
    "update:current": (index: number) => any;
}, string, {
    trigger: import('./type').IndicatorTrigger;
    showArrow: import('./type').CarouselShowArrow;
    arrowClass: import('../_shared/type').ClassName;
    animationName: import('./type').CarouselAnimationName;
    direction: import('..').Direction;
    transitionTimingFunction: string;
    moveSpeed: number;
    current: number;
    defaultCurrent: number;
    autoPlay: import('./type').AutoPlay;
    indicatorType: import('./type').IndicatorType;
    indicatorPosition: import('./type').IndicatorPosition;
    indicatorClass: import('../_shared/type').ClassName;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: Readonly<import('./type').CarouselSlots> & import('./type').CarouselSlots;
}) & {
    item: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {}, true, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLDivElement, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, {}>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: Readonly<import('./type').CarouselItemSlots> & import('./type').CarouselItemSlots;
    });
    install: (app: App) => void;
};
export { _CarouselItem as CarouselItem };
declare module 'vue' {
    interface GlobalComponents {
        YcCarousel: typeof Carousel;
        YcCarouselItem: typeof _CarouselItem;
    }
}
export default Carousel;
