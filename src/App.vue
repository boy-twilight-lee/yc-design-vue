<template>
  <div class="test">
    <yc-color-picker></yc-color-picker>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const collapsed = ref(false);
const toggleCollapse = () => {
  collapsed.value = !collapsed.value;
};
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
  }
}
</style>
