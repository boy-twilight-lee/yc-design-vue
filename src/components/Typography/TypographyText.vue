<template>
  <typography-base v-bind="$attrs">
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
import TypographyBase from './TypographyBase.vue';
import { TypographyBaseSlots } from './type';
defineOptions({
  name: 'TypographyText',
});
defineSlots<TypographyBaseSlots>();
</script>
