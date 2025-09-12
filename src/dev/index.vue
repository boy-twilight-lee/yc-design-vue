<template>
  <div class="test">
    <yc-resize-box
      v-model:width="width"
      v-model:height="height"
      :directions="['left', 'right', 'top', 'bottom']"
    >
    </yc-resize-box>
    <yc-button @click="width += 50">测试</yc-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const width = ref(500);
const height = ref(500);
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
