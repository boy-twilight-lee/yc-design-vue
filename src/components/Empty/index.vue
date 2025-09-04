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
import { toRefs, computed } from 'vue';
import { EmptyProps, EmptySlots } from './type';
import { IconEmpty } from '@shared/icons';
import { useI18n } from 'vue-i18n';
defineOptions({
  name: 'Empty',
});
defineSlots<EmptySlots>();
const props = withDefaults(defineProps<EmptyProps>(), {
  description: '',
  imgSrc: '',
});
const { description: _description } = toRefs(props);
// 国际化
const { t } = useI18n();
// 获取渲染的desc
const description = computed(
  () => _description.value || t('empty.description')
);
</script>

<style lang="less">
@import './style/empty.less';
</style>
