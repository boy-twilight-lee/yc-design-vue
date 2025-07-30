import { Ref } from 'vue';
import { TimelineLabelPosition, TimelineMode } from '../type';
import { Props, Direction } from '../../_shared/type';
type TimelineContext = {
    direction: Ref<Direction>;
    mode: Ref<TimelineMode>;
    reverse: Ref<boolean>;
    labelPosition: Ref<TimelineLabelPosition>;
};
declare const _default: () => {
    provide: (props: Props) => {
        direction: Ref<Direction, Direction>;
        mode: import('vue').ComputedRef<TimelineMode>;
        timelineItems: import('vue').ComputedRef<import('../../_shared/type').ObjectData[]>;
    };
    inject: () => TimelineContext;
};
export default _default;
