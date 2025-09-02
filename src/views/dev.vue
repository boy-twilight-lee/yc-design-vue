<template>
  <div class="test">
    <a-radio-group model-value="Beijing" type="button">
      <a-radio value="Beijing" disabled>Beijing</a-radio>
      <a-radio value="Shanghai" disabled>Shanghai</a-radio>
      <a-radio value="Guangzhou">Guangzhou</a-radio>
      <a-radio value="Shenzhen">Shenzhen</a-radio>
    </a-radio-group>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useDark } from '@vueuse/core';
// document.body.setAttribute('arco-theme', 'dark');
// const isDark = useDark({
//   selector: 'body',
//   attribute: 'yc-design-theme',
//   valueDark: 'dark',
//   valueLight: 'light',
//   initialValue: 'light',
// });
// isDark.value = true;
</script>

<style lang="less" scoped>
.test {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  // background-color: black;
}
</style>
