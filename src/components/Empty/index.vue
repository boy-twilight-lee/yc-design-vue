<template>
  <div class="yc-empty">
    <div class="yc-empty-image">
      <slot name="image">
        <img v-if="imgSrc" :src="imgSrc" alt="图片加载失败" />
        <icon-empty />
      </slot>
    </div>
    <div v-if="description" class="yc-empty-description">
      <slot>
        {{ description }}
      </slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { EmptyProps, EmptySlots } from './type';
import { IconEmpty } from '@shared/icons';
defineOptions({
  name: 'Empty',
});
defineSlots<EmptySlots>();
withDefaults(defineProps<EmptyProps>(), {
  description: '暂无数据',
  imgSrc: '',
});
</script>

<style lang="less">
@import './style/empty.less';
</style>
