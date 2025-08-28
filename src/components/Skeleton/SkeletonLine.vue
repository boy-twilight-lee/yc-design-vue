<template>
  <div
    class="yc-skeleton-line"
    :style="{
      gap,
    }"
  >
    <div
      class="yc-skeleton-line-row"
      v-for="i in rows"
      :key="i"
      :style="{
        height: valueToPx(lineHeight),
        width: widths[i] ? valueToPx(widths[i]) : '100%',
      }"
    ></div>
  </div>
</template>

<script lang="ts" setup>
import { toRefs, computed } from 'vue';
import { SkeletonLineProps } from './type';
import { valueToPx } from '@shared/utils';
defineOptions({
  name: 'SkeletonLine',
});
const props = withDefaults(defineProps<SkeletonLineProps>(), {
  rows: 1,
  widths: () => [],
  lineHeight: 20,
  lineSpacing: 15,
});
const { lineSpacing } = toRefs(props);
// gap
const gap = computed(() => valueToPx(lineSpacing.value));
</script>

<style lang="less" scoped>
@import './style/skeleton.less';
</style>
