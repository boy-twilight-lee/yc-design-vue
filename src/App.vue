<template>
  <yc-config-provider locale="en-US">
    <div class="test">
      <yc-calendar />
    </div>
  </yc-config-provider>
</template>

<script setup lang="ts">
import { ref } from 'vue';
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
  }
}
</style>
