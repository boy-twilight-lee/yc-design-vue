<template>
  <div class="test">
    <a-button loading>测试</a-button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
// document.body.setAttribute('arco-theme', 'dark');
// const isDark = useDark({
//   selector: 'body',
//   attribute: 'a-design-theme',
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

<style scoped>
.card-demo {
  width: 100%;
}
.card-demo .arco-card-header {
  border: none;
}
.card-demo .a-card-header {
  border: none;
}
</style>
