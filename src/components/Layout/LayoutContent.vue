<template>
  <main class="yc-layout-content">
    <slot />
  </main>
</template>

<script lang="ts" setup>
import { LayoutContentSlots } from './type';
defineOptions({
  name: 'LayoutContent',
});
defineSlots<LayoutContentSlots>();
</script>

<style lang="less">
@import './style/layout.less';
</style>
