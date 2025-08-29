<template>
  <div class="test"></div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const size = ref('medium');
document.documentElement.setAttribute('yc-design-dark', '');
</script>

<style lang="less" scoped>
.test {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  @is-dark: html[yc-design-dark];
  background-color: if(@is-dark, black, #fff);
}
</style>
