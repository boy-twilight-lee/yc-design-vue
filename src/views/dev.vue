<template>
  <div class="test">
    <yc-dropdown trigger="contextMenu" alignPoint :style="{ display: 'block' }">
      <div
        :style="{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '300px',
          backgroundColor: 'var(--color-fill-2)',
        }"
      >
        <div>Click Me</div>
      </div>
      <template #content>
        <yc-doption>Option 1</yc-doption>
        <yc-doption>Option 2</yc-doption>
        <yc-doption>Option 3</yc-doption>
      </template>
    </yc-dropdown>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
</script>

<style lang="less" scoped>
.test {
  overflow: auto;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
