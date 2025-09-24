<template>
  <div class="yc-input-group">
    <slot />
  </div>
</template>

<script lang="ts" setup>
defineOptions({
  name: 'InputGroup',
});
</script>

<style lang="less">
@import './style/input-group.less';
</style>
