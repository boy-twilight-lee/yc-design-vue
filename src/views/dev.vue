<template>
  <div class="test">
    <yc-alert />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
</script>

<style lang="less" scoped>
.test {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  .a,
  .b {
    width: 200px;
    height: 200px;
    & {
      background-color: blue;
    }
  }
}
</style>
