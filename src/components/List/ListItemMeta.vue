<template>
  <div class="yc-list-item-meta">
    <div v-if="$slots.avatar" class="yc-list-item-meta-avatar">
      <slot name="avatar" />
    </div>
    <div class="yc-list-item-meta-content">
      <div v-if="$slots.title || title" class="yc-list-item-meta-title">
        <slot name="title">
          {{ title }}
        </slot>
      </div>
      <div
        v-if="$slots.description || description"
        class="yc-list-item-meta-description"
      >
        <slot name="description">
          {{ description }}
        </slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ListItemMetaProps, ListItemMetaSlots } from './type';
defineOptions({
  name: 'ListItemMeta',
});
defineSlots<ListItemMetaSlots>();
withDefaults(defineProps<ListItemMetaProps>(), {
  title: '',
  description: '',
});
</script>

<style lang="less" scoped>
@import './style/list-item-meta.less';
</style>
