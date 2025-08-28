<template>
  <article class="yc-typography">
    <slot />
  </article>
</template>

<script lang="ts" setup>
defineOptions({
  name: 'Typography',
});
</script>

<style lang="less">
@import './style/typography.less';
</style>
