import { Ref } from 'vue';
import { CarouselAnimationName, CarouselEmits, CarouselShowArrow } from '../type';
import { ClassName, Direction, Props } from '../../_shared/type';
type CarouselContext = {
    length: Ref<number>;
    computedCurrent: Ref<number>;
    transitionTimingFunction: Ref<string>;
    animationName: Ref<CarouselAnimationName>;
    moveType: Ref<MoveType>;
    preIndex: Ref<number>;
    moveSpeed: Ref<number>;
    direction: Ref<Direction>;
    showArrow: Ref<CarouselShowArrow>;
    arrowClass: Ref<ClassName>;
    getValidIndex: (val: number) => number;
};
type MoveType = 'positive' | 'negative';
declare const _default: () => {
    provide: (props: Props, emits: CarouselEmits) => {
        carouselItems: import('vue').ComputedRef<import('../../_shared/type').ObjectData[]>;
        computedCurrent: import('vue').WritableComputedRef<any, number>;
        length: import('vue').ComputedRef<number>;
        autoPlay: Ref<import('..').AutoPlay, import('..').AutoPlay>;
        slideTo: (targetIndex: number) => Promise<void>;
    };
    inject: () => CarouselContext;
};
export default _default;
