<template>
  <div role="listitem" class="yc-list-item">
    <!-- main -->
    <div class="yc-list-item-main">
      <!-- meta -->
      <div v-if="$slots.meta" class="yc-list-item-meta">
        <slot name="meta" />
      </div>
      <!-- content -->
      <div class="yc-list-item-content">
        <slot />
      </div>
      <!-- action -->
      <div
        v-if="$slots.actions && actionLayout == 'vertical'"
        class="yc-list-item-action"
      >
        <slot name="actions" />
      </div>
    </div>
    <!-- action -->
    <div
      v-if="$slots.actions && actionLayout == 'horizontal'"
      class="yc-list-item-action"
    >
      <slot name="actions" />
    </div>
    <!-- extra -->
    <div v-if="$slots.extra" class="list-item-extra">
      <slot name="extra" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ListItemProps, ListItemSlots } from './type';
defineOptions({
  name: 'ListItem',
});
defineSlots<ListItemSlots>();
withDefaults(defineProps<ListItemProps>(), {
  actionLayout: 'horizontal',
});
</script>

<style lang="less" scoped>
@import './style/list-item.less';
</style>
