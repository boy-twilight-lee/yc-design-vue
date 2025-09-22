<template>
  <typography-base
    v-bind="$attrs"
    :tag="blockquote ? 'blockquote' : 'div'"
    :class="[`yc-typography-spacing-${spacing}`]"
  >
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
import { TypographyParagraphProps, TypographyBaseSlots } from './type';
import TypographyBase from './TypographyBase.vue';

defineOptions({
  name: 'TypographyParagraph',
});
const $slots = defineSlots<TypographyBaseSlots>();
withDefaults(defineProps<TypographyParagraphProps>(), {
  blockquote: false,
  spacing: 'default',
});
</script>

<style lang="less">
@import './style/typography-paragraph.less';
</style>
