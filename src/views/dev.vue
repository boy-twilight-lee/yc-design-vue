<template>
  <div class="test">
    <yc-select :options="[1, 2, 3]" placeholder="请选择" :bordered="false">
    </yc-select>
    <a-select placeholder="请选择" :bordered="false">
      <template #header> dsads </template>
      <template #footer> dsads </template>
      <a-option disabled> 1 </a-option>
    </a-select>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useDark } from '@vueuse/core';
import { Notification } from '@arco-design/web-vue';
// document.body.setAttribute('arco-theme', 'dark');
// const isDark = useDark({
//   selector: 'body',
//   attribute: 'yc-design-theme',
//   valueDark: 'dark',
//   valueLight: 'light',
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
}
</style>
