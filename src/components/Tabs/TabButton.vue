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
.yc-icon-button {
  color: inherit;
  &.yc-tabs-nav-button-left {
    margin: 0 6px 0 10px;
  }
  &.yc-tabs-nav-button-right {
    margin: 0 10px 0 6px;
  }
  &.yc-tabs-nav-button-up {
    margin-bottom: 10px;
  }
  &.yc-tabs-nav-button-down {
    margin-top: 10px;
  }
  &.yc-tabs-tab-close-button {
    user-select: none;
    color: inherit;
  }
  &.yc-tabs-nav-add-button {
    padding: 0 8px;
  }
}
</style>
