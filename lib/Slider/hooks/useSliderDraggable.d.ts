import { Ref } from 'vue';
import { Direction } from '../../_shared/type';
export interface RangeData {
    minLeft: number;
    maxLeft: number;
    minTop: number;
    maxTop: number;
}
export interface PositionData {
    left: number;
    right: number;
    top: number;
    bottom: number;
    transform?: string;
}
declare const _default: (params: {
    computedValue: Ref<number>;
    trackRef: Ref<HTMLDivElement | undefined>;
    triggerRef: Ref<HTMLDivElement | undefined>;
    max: Ref<number>;
    min: Ref<number>;
    step: Ref<number>;
    disabled: Ref<boolean>;
    direction: Ref<Direction>;
    normalizeValue: (value: number) => number;
    denormalizeValue: (value: number) => number;
}) => {
    isDragging: import('vue').ComputedRef<boolean>;
    position: {
        left: number;
        right: number;
        top: number;
        bottom: number;
        transform?: string | undefined;
    };
};
export default _default;
