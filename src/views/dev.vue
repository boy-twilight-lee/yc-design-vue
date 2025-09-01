<template>
  <div class="test"></div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useDark } from '@vueuse/core';
document.body.setAttribute('arco-theme', 'dark');
const isDark = useDark({
  selector: 'body',
  attribute: 'yc-design-theme',
  valueDark: 'dark',
  valueLight: 'light',
});
isDark.value = true;
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
