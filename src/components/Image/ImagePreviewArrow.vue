<template>
  <div :class="[`yc-image-preview-arrow-${type}`]">
    <icon-arrow-right :rotate="type == 'left' ? 180 : 0" />
  </div>
</template>

<script lang="ts" setup>
import { IconArrowRight } from '@shared/icons';
defineProps<{
  type: 'left' | 'right';
}>();
</script>

<style lang="less" scoped>
@import './style/image-preview.less';
</style>
