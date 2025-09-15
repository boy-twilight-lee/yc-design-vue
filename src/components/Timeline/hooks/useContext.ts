import {
  ref,
  Ref,
  toRefs,
  computed,
  useSlots,
  provide as _provide,
  inject as _inject,
  h,
} from 'vue';
import {
  TimelineProps as _TimelineProps,
  TimelineLabelPosition,
  TimelineMode,
} from '../type';
import { Direction, Required, ObjectType } from '@shared/type';
import { findComponentsFromVnodes } from '@shared/utils';
import TimelineItem from '../TimelineItem.vue';
import TimelineItemPending from '../TimelineItemPending.vue';

const TIMELINE_CONTEXT_KEY = 'timeline-context';
type TimelineContext = {
  direction: Ref<Direction>;
  mode: Ref<TimelineMode>;
  reverse: Ref<boolean>;
  labelPosition: Ref<TimelineLabelPosition>;
};
type TimelineProps = Required<_TimelineProps>;

export default () => {
  const provide = (props: ObjectType) => {
    const {
      direction,
      labelPosition,
      reverse,
      pending,
      mode: _mode,
    } = toRefs(props as TimelineProps);
    const slots = useSlots();
    // 动态计算mode
    const mode = computed(() => {
      if (direction.value == 'vertical') {
        return ['left', 'right', 'alternate'].includes(_mode.value)
          ? _mode.value
          : 'left';
      } else;
      {
        return ['top', 'bottom', 'alternate'].includes(_mode.value)
          ? _mode.value
          : 'bottom';
      }
    });
    // pendingNodes
    const pendingNodes = computed(() => {
      return h(TimelineItemPending, { pending: pending.value }, slots);
    });
    // timelineitem
    const timelineItems = computed(() => {
      const nodes = findComponentsFromVnodes(
        slots.default?.() || [],
        TimelineItem.name
      );
      return pending.value ? [...nodes, pendingNodes.value] : nodes;
    });
    _provide<TimelineContext>(TIMELINE_CONTEXT_KEY, {
      direction,
      mode,
      labelPosition,
      reverse,
    });
    return {
      direction,
      mode,
      timelineItems,
    };
  };
  const inject = () => {
    return _inject<TimelineContext>(TIMELINE_CONTEXT_KEY, {
      direction: ref('vertical'),
      mode: ref('left'),
      labelPosition: ref('same'),
      reverse: ref(false),
    });
  };
  return {
    provide,
    inject,
  };
};
