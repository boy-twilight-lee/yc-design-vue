<template>
  <div class="test">
    <yc-verification-code style="width: 300px" />
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
