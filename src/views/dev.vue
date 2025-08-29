<template>
  <div class="test">
    <yc-switch unchecked-text="测试" checked-text="测试1" />
    <a-switch unchecked-text="测试" checked-text="测试1" />
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
  justify-content: center;
  align-items: center;

  gap: 10px;
}
</style>
