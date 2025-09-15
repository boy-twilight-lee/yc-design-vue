<template>
  <span class="yc-breadcrumb-item-separator">
    <component v-if="showSeparator" :is="renderSeparator" />
    <icon-separator v-else />
  </span>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { BreadcrumbProps } from './type';
import { IconSeparator } from '@shared/icons';
import { isUndefined } from '@shared/utils';
const props = defineProps<{
  separatorSlots?: () => any;
  separator?: BreadcrumbProps['separator'];
  itemSeparatorSlots?: () => any;
  itemSeparator?: BreadcrumbProps['separator'];
}>();
const showSeparator = computed(() => {
  if (isUndefined(props.itemSeparatorSlots)) {
    return props.separatorSlots || props.separator;
  } else {
    return (
      props.itemSeparatorSlots ||
      props.itemSeparator ||
      props.separatorSlots ||
      props.separator
    );
  }
});
const renderSeparator = () => {
  if (isUndefined(props.itemSeparatorSlots)) {
    return props.separatorSlots?.() || props.separator;
  } else {
    return (
      props.itemSeparatorSlots?.() ||
      props.itemSeparator ||
      props.separatorSlots?.() ||
      props.separator
    );
  }
};
</script>

<style lang="less">
@import './style/breadcrumb-item.less';
</style>
