<template>
  <slot />
</template>

<script lang="ts" setup>
import { DescriptionsItemProps, DescriptionsItemSlots } from './type';
defineOptions({
  name: 'DescriptionsItem',
});
defineSlots<DescriptionsItemSlots>();
withDefaults(defineProps<DescriptionsItemProps>(), {
  span: 1,
  label: '',
});
</script>
