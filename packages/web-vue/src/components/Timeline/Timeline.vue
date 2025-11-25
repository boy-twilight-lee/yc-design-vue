<template>
  <div
    role="list"
    :class="[
      'yc-timeline',
      `yc-timeline-direction-${direction}`,
      `yc-timeline-${mode}`,
      {
        'yc-timeline-reverse': reverse,
      },
    ]"
  >
    <component
      v-for="(node, i) in timelineItems"
      :key="i"
      :is="node"
      :mode="getPoistion(i)"
    />
  </div>
</template>

<script lang="ts" setup>
import { TimelineProps, TimelineSlots } from './type';
import useContext from './hooks/useContext';

defineOptions({
  name: 'Timeline',
});
defineSlots<TimelineSlots>();
const props = withDefaults(defineProps<TimelineProps>(), {
  reverse: false,
  direction: 'vertical',
  mode: (props) => {
    return props.direction == 'horizontal' ? 'top' : 'left';
  },
  pending: false,
  labelPosition: 'same',
});
// 注入数据
const { direction, mode, timelineItems } = useContext().provide(props);
// 获取position
const getPoistion = (i: number) => {
  if (mode.value != 'alternate') {
    return mode.value;
  }
  if (direction.value == 'horizontal') {
    return i % 2 == 0 ? 'top' : 'bottom';
  } else {
    return i % 2 == 0 ? 'left' : 'right';
  }
};
</script>

<style lang="less">
@import './style/timeline.less';
</style>
