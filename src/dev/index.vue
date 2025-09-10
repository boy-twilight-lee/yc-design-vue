<template>
  <div class="test">
    <yc-space direction="vertical">
      <yc-button type="primary">Primary</yc-button>
      <yc-button>Default</yc-button>
      <yc-button type="dashed">Dashed</yc-button>
      <yc-button type="outline">Outline</yc-button>
      <yc-button type="text">Text</yc-button>
    </yc-space>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Message } from '@/components';
const collapsed = ref(false);
</script>

<style lang="less" scoped></style>

<style lang="less">
#app {
  height: 100vh;
  width: 100vw;
  .test {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
}
</style>
