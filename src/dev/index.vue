<template>
  <div class="test">
    <yc-input-group style="width: 500px">
      <yc-input></yc-input>
      <yc-input></yc-input>
      <yc-input></yc-input>
    </yc-input-group>
    <yc-color-picker hide-trigger />
    <a-input-group style="width: 500px">
      <a-input error></a-input>
      <a-input error></a-input>
      <a-input error></a-input>
    </a-input-group>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
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
