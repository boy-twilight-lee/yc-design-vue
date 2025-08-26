<template>
  <yc-timeline-item is-ghost>
    <template #dot>
      <slot name="dot">
        <yc-spin :size="12" />
      </slot>
    </template>
    <span v-if="isString(pending)">{{ pending }}</span>
  </yc-timeline-item>
</template>

<script lang="ts" setup>
import YcTimelineItem from './TimelineItem.vue';
import { isString } from '@shared/utils';
import YcSpin from '@/components/Spin';
withDefaults(
  defineProps<{
    pending: boolean | string;
  }>(),
  {
    pending: '',
  }
);
</script>

<style lang="less" scoped></style>
