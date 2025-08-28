<template>
  <div
    role="listitem"
    :class="[
      'yc-timeline-item',
      `yc-timeline-item-${$attrs.mode}`,
      `yc-timeline-item-direction-${direction}`,
      {
        'yc-timeline-item-label-is-relative': labelPosition == 'relative',
        'yc-timeline-item-ghost': isGhost,
        'yc-timeline-item-reverse': reverse,
      },
    ]"
  >
    <div class="yc-timeline-item-dot-wrapper">
      <!-- line -->
      <div
        class="yc-timeline-item-dot-line"
        :style="{
          'border-style': lineType,
        }"
      ></div>
      <!-- dot -->
      <div class="yc-timeline-item-dot-content">
        <div v-if="$slots.dot" class="yc-timeline-item-dot-custom">
          <slot name="dot"> </slot>
        </div>
        <div
          v-else
          :class="['yc-timeline-item-dot', `yc-timeline-item-dot-${dotType}`]"
          :style="{
            backgroundColor: dotColor,
          }"
        ></div>
      </div>
    </div>
    <!-- content -->
    <div class="yc-timeline-item-content-wrapper">
      <div class="yc-timeline-item-content">
        <slot />
      </div>
      <div v-if="labelPosition == 'same'" class="yc-timeline-item-label">
        <slot name="label">
          {{ label }}
        </slot>
      </div>
    </div>
    <div v-if="labelPosition == 'relative'" class="yc-timeline-item-label">
      <slot name="label">
        {{ label }}
      </slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { TimelineItemProps, TimelineItemSlots } from './type';
import useContext from './hooks/useContext';
defineOptions({
  name: 'TimelineItem',
});
defineSlots<TimelineItemSlots>();
withDefaults(defineProps<TimelineItemProps>(), {
  dotColor: '',
  dotType: 'solid',
  lineType: 'solid',
  lineColor: '',
  label: '',
  position: 'top',
  isGhost: false,
});
// 注入数据
const { direction, labelPosition, reverse } = useContext().inject();
</script>

<style lang="less" scoped>
@import './style/timeline-item.less';
</style>
