<template>
  <div class="test" id="test">
    <yc-split
      default-size="400px"
      :style="{
        height: '200px',
        width: '100%',
        minWidth: '500px',
        border: '1px solid var(--color-border)',
      }"
    >
      <template #first>
        <yc-typography-paragraph>Left</yc-typography-paragraph>
      </template>
      <template #second>
        <yc-typography-paragraph>RIGHT</yc-typography-paragraph>
      </template>
    </yc-split>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue';
const size = ref(0.5);
</script>

<style lang="less" scoped>
.test {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.trigger-demo-translate {
  padding: 10px;
  width: 200px;
  background-color: var(--color-bg-popup);
  border-radius: 4px;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);
}
</style>
