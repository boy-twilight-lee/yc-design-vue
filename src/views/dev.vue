<template>
  <div class="test">
    <yc-modal v-model:visible="visible" title="aa"> 测试 </yc-modal>
    <yc-button @click="visible = true">点击测试</yc-button>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
const visible = ref(false);
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
</style>
