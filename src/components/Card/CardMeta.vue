<template>
  <div class="yc-card-meta">
    <div class="yc-card-meta-content">
      <div
        v-if="$slots.title || title"
        class="yc-card-meta-title text-ellipsis"
      >
        <slot name="title">
          {{ title }}
        </slot>
      </div>
      <div
        v-if="$slots.description || description"
        class="yc-card-meta-description"
      >
        <slot name="description">
          {{ description }}
        </slot>
      </div>
    </div>
    <div class="yc-card-meta-footer">
      <div v-if="$slots.avatar" class="yc-card-meta-avatar">
        <slot name="avatar" />
      </div>
      <div v-if="injectSlots.actions" class="yc-card-actions">
        <div class="yc-card-actions-right text-ellipsis">
          <component :is="getSlotFunction(injectSlots.actions)" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { CardMetaProps, CardMetaSlots } from './type';
import { getSlotFunction } from '@shared/utils/vue-utils';
import useContext from './hooks/useContext';
defineOptions({
  name: 'CardMeta',
});
const $slots = defineSlots<CardMetaSlots>();
withDefaults(defineProps<CardMetaProps>(), {
  title: '',
  description: '',
});
// 接收注入
const { slots: injectSlots } = useContext().inject();
</script>

<style lang="less">
@import './style/card-meta.less';
</style>
