import { Ref } from 'vue';
import { FormatTooltip, SliderEmits, SliderValue } from '../type';
import { Direction, Props } from '../../_shared/type';
type SliderContext = {
    startValue: Ref<number>;
    endValue: Ref<number>;
    tempStartValue: Ref<number>;
    tempEndValue: Ref<number>;
    range: Ref<boolean>;
    min: Ref<number>;
    max: Ref<number>;
    step: Ref<number>;
    direction: Ref<Direction>;
    showTooltip: Ref<boolean>;
    disabled: Ref<boolean>;
    trackRef: Ref<HTMLDivElement | undefined>;
    formatTooltip?: FormatTooltip;
    normalizeValue: (value: number) => number;
    denormalizeValue: (value: number) => number;
};
declare const _default: () => {
    inject: () => SliderContext;
    provide: (props: Props, emits: SliderEmits, trackRef: Ref<HTMLDivElement | undefined>) => {
        range: Ref<boolean, boolean>;
        direction: Ref<Direction, Direction>;
        startValue: import('vue').WritableComputedRef<any, any>;
        endValue: import('vue').WritableComputedRef<any, any>;
        tempStartValue: Ref<number, number>;
        tempEndValue: Ref<number, number>;
        computedValue: import('vue').WritableComputedRef<any, SliderValue>;
        ticks: import('vue').ComputedRef<{
            label: number;
            value: number;
        }[]>;
        marks: import('vue').ComputedRef<{
            value: number;
            label: string;
        }[]>;
        min: Ref<number, number>;
        max: Ref<number, number>;
        normalizeValue: (value: number) => number;
    };
};
export default _default;
