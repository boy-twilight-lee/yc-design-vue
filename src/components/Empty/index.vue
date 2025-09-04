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
import { toRefs } from 'vue';
import { EmptyProps, EmptySlots } from './type';
import { t } from '@shared/locale/i18n';
import { IconEmpty } from '@shared/icons';
defineOptions({
  name: 'Empty',
});
defineSlots<EmptySlots>();
const props = withDefaults(defineProps<EmptyProps>(), {
  description: '',
  imgSrc: '',
});
const { description: _description } = toRefs(props);
</script>

<style lang="less">
@import './style/empty.less';
</style>
