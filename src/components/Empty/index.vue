<template>
  <div class="yc-empty">
    <div class="yc-empty-image">
      <slot name="image">
        <img v-if="imgSrc" :src="imgSrc" alt="图片加载失败" />
        <icon-empty />
      </slot>
    </div>
    <div class="yc-empty-description">
      <slot>
        {{ description || t('empty.description') }}
      </slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { EmptyProps, EmptySlots } from './type';
import { useI18n } from '@shared/utils';
import { IconEmpty } from '@shared/icons';
defineOptions({
  name: 'Empty',
});
defineSlots<EmptySlots>();
withDefaults(defineProps<EmptyProps>(), {
  description: '',
  imgSrc: '',
});
// 国际化
const { t } = useI18n();
</script>

<style lang="less">
@import './style/empty.less';
</style>
