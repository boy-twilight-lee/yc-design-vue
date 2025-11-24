<template>
  <header class="yc-layout-header">
    <slot />
  </header>
</template>

<script lang="ts" setup>
import { LayoutHeaderSlots } from './type';
defineOptions({
  name: 'LayoutHeader',
});
defineSlots<LayoutHeaderSlots>();
</script>

<style lang="less">
@import './style/layout.less';
</style>
