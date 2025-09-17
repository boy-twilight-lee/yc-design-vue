<template>
  <div
    :class="[
      'yc-skeleton-shape',
      `yc-skeleton-shape-shape-${shape}`,
      `yc-skeleton-shape-size-${size}`,
    ]"
  ></div>
</template>

<script lang="ts" setup>
import { SkeletonShapeProps } from './type';
import { getGlobalConfig } from '@shared/utils/global-config';
defineOptions({
  name: 'SkeletonShape',
});
const props = withDefaults(defineProps<SkeletonShapeProps>(), {
  shape: 'square',
  size: undefined,
});
// 获取全局配置
const { size } = getGlobalConfig(props);
</script>

<style lang="less">
@import './style/skeleton.less';
</style>
