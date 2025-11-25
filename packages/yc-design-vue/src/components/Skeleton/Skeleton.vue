<template>
  <div
    :class="[
      'yc-skeleton',
      {
        'yc-skeleton-animation': animation,
      },
    ]"
  >
    <slot :name="loading ? 'default' : 'content'" />
  </div>
</template>

<script lang="ts" setup>
import { toRefs } from 'vue';
import { SkeletonProps, SkeletonSlots } from './type';
defineOptions({
  name: 'Skeleton',
});
defineSlots<SkeletonSlots>();
const props = withDefaults(defineProps<SkeletonProps>(), {
  animation: false,
  loading: true,
});
const { animation, loading } = toRefs(props);
</script>
