import { Ref, Reactive } from 'vue';
import { StepsEmits, StepStatus, StepType } from '../type';
import { Props, Direction } from '../../_shared/type';
declare const _default: () => {
    provide: (props: Props, emits: StepsEmits) => {
        direction: import('vue').ComputedRef<Direction>;
        labelPlacement: import('vue').ComputedRef<Direction>;
        type: Ref<StepType, StepType>;
    };
    inject: (props: Props) => {
        curStep: import('vue').ComputedRef<number>;
        status: import('vue').ComputedRef<any>;
        nextStatus: import('vue').ComputedRef<StepStatus>;
        stepMap: Reactive<Map<string, string>>;
        computedCurrent: Ref<number>;
        lineLess: Ref<boolean>;
        direction: Ref<Direction>;
        labelPlacement: Ref<Direction>;
        statusArr: Ref<Ref<StepStatus>[]>;
        small: Ref<boolean>;
        type: Ref<StepType>;
        changeable: Ref<boolean>;
        emits: StepsEmits;
    };
};
export default _default;
