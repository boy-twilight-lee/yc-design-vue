<template>
  <div class="test">
    <yc-button
      @click="
        $modal.success({
          title: '提示',
          content: '测试',
        })
      "
    >
      测试
    </yc-button>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { Modal } from '@arco-design/web-vue';
</script>

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
    .yc-upload-wrapper,
    .arco-upload-wrapper {
      width: 400px;
    }
  }
}
</style>
