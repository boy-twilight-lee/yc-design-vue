<template>
  <div class="test">
    <yc-button type="primary">测试</yc-button>
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
}

.grid-demo {
  .yc-col,
  .arco-col {
    height: 48px;
    line-height: 48px;
    color: var(--color-white);
    text-align: center;
    &:nth-child(2n + 1) {
      background-color: var(--color-primary-light-4);
    }
    &:nth-child(2n) {
      background-color: rgba(22, 93, 255, 0.9);
    }
  }
}
</style>
