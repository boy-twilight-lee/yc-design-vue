<template>
  <icon-button
    :size="14"
    :class="[
      `yc-tabs-nav-${type ? `${type}-` : ''}button`,
      {
        [`yc-tabs-nav-button-${direction}`]: direction,
      },
    ]"
    v-bind="$attrs"
  >
    <slot v-if="$slots.default" />
  </icon-button>
</template>

<script lang="ts" setup>
import { IconButton } from '@shared/components';
withDefaults(
  defineProps<{
    className?: boolean;
    type?: 'add' | 'close';
    direction?: 'left' | 'up' | 'right' | 'down';
  }>(),
  {
    className: true,
  }
);
</script>

<style lang="less" scoped>
@import './style/tab-button.less';
</style>
