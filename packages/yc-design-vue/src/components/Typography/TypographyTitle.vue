<template>
  <typography-base :tag="tag" v-bind="$attrs">
    <slot />
    <template v-if="$slots['copy-icon']" #copy-icon="scope">
      <slot name="copy-icon" v-bind="scope" />
    </template>
    <template v-if="$slots['copy-tooltip']" #copy-tooltip="scope">
      <slot name="copy-tooltip" v-bind="scope" />
    </template>
  </typography-base>
</template>

<script lang="ts" setup>
import { computed, toRefs } from 'vue';
import { TypographyTitleProps, TypographyBaseSlots } from './type';
import TypographyBase from './TypographyBase.vue';
defineOptions({
  name: 'TypographyTitle',
});
const $slots = defineSlots<TypographyBaseSlots>();
const props = withDefaults(defineProps<TypographyTitleProps>(), {
  heading: 1,
});
const { heading } = toRefs(props);
// 元素标签
const tag = computed(() => {
  return [1, 2, 3, 4, 5, 6].includes(heading.value)
    ? `h${heading.value}`
    : 'h1';
});
</script>

<style lang="less">
@import './style/typography-title.less';
</style>
