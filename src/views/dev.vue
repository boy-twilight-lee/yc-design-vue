<template>
  <div class="test">
    <div class="layout-demo">
      <yc-layout style="height: 400px">
        <yc-layout-header>Header</yc-layout-header>
        <yc-layout>
          <yc-layout-sider>Sider</yc-layout-sider>
          <yc-layout-content>Content</yc-layout-content>
        </yc-layout>
        <yc-layout-footer>Footer</yc-layout-footer>
      </yc-layout>
    </div>
  </div>
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

.layout-demo :deep(.yc-layout-header),
.layout-demo :deep(.yc-layout-footer),
.layout-demo :deep(.yc-layout-sider-children),
.layout-demo :deep(.yc-layout-content) {
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: var(--color-white);
  font-size: 16px;
  font-stretch: condensed;
  text-align: center;
}

.layout-demo :deep(.yc-layout-header),
.layout-demo :deep(.yc-layout-footer) {
  height: 64px;
  background-color: var(--color-primary-light-4);
}

.layout-demo :deep(.yc-layout-sider) {
  width: 206px;
  background-color: var(--color-primary-light-3);
}

.layout-demo :deep(.yc-layout-content) {
  background-color: rgb(var(--arcoblue-6));
}
</style>
