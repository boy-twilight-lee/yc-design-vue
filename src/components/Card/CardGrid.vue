<template>
  <div
    :class="[
      'yc-card-grid',
      {
        'yc-card-grid-hoverable': hoverable,
      },
    ]"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { CardGridProps, CardGridSlots } from './type';
defineOptions({
  name: 'CardGrid',
});
defineSlots<CardGridSlots>();
withDefaults(defineProps<CardGridProps>(), {
  hoverable: false,
});
</script>

<style lang="less" scoped>
@import './style/card-grid.less';
</style>
