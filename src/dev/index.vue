<template>
  <div class="test">
    <yc-pagination :total="50" show-jumper />
    <yc-time-picker />
    <div style="height: 300px">
      <yc-slider direction="vertical"> </yc-slider>
    </div>
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
