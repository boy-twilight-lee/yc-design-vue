<template>
  <div class="test">
    <div
      ref="contaienrRef"
      style="
        width: 100%;
        height: 300px;
        background-color: var(--color-fill-2);
        position: relative;
        overflow: hidden;
        line-height: 300px;
        text-align: center;
      "
    >
      <yc-button type="primary" @click="handleClick">Open Drawer</yc-button>
    </div>
    <yc-drawer
      :popup-container="contaienrRef"
      :visible="visible"
      @ok="handleOk"
      @cancel="handleCancel"
    >
      <template #title> Title </template>
      You can customize modal body text by the current situation. This modal
      will be closed immediately once you press the OK button.
    </yc-drawer>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const visible = ref(false);
const contaienrRef = ref();
const handleClick = () => {
  visible.value = true;
};
const handleOk = () => {
  visible.value = false;
};
const handleCancel = () => {
  visible.value = false;
};
</script>

<style lang="less" scoped>
.test {
  overflow: auto;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
</style>
