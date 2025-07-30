import { CarouselProps, CarouselSlots } from './type';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Readonly<CarouselSlots> & CarouselSlots;
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<CarouselProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    change: (index: number, preIndex: number, isManual: boolean) => any;
    "update:current": (index: number) => any;
}, string, import('vue').PublicProps, Readonly<CarouselProps> & Readonly<{
    onChange?: ((index: number, preIndex: number, isManual: boolean) => any) | undefined;
    "onUpdate:current"?: ((index: number) => any) | undefined;
}>, {
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
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
