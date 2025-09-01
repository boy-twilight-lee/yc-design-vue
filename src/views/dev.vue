<template>
  <div class="test">
    <a-menu
      :style="{ width: '200px', height: '100%' }"
      :default-open-keys="['0']"
      :default-selected-keys="['0_2']"
      show-collapse-button
      breakpoint="xl"
    >
      <a-sub-menu key="0">
        <template #icon><icon-apps></icon-apps></template>
        <template #title>Navigation 1</template>
        <a-menu-item key="0_0">Menu 1</a-menu-item>
        <a-menu-item key="0_1">Menu 2</a-menu-item>
        <a-menu-item key="0_2">Menu 3</a-menu-item>
        <a-menu-item key="0_3">Menu 4</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="1">
        <template #icon><icon-bug></icon-bug></template>
        <template #title>Navigation 2</template>
        <a-menu-item key="1_0">Menu 1</a-menu-item>
        <a-menu-item key="1_1">Menu 2</a-menu-item>
        <a-menu-item key="1_2">Menu 3</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="2">
        <template #icon><icon-bulb></icon-bulb></template>
        <template #title>Navigation 3</template>
        <a-menu-item key="2_0">Menu 1</a-menu-item>
        <a-menu-item key="2_1">Menu 2</a-menu-item>
        <a-sub-menu key="2_2" title="Navigation 4">
          <a-menu-item key="2_2_0">Menu 1</a-menu-item>
          <a-menu-item key="2_2_1">Menu 2</a-menu-item>
        </a-sub-menu>
      </a-sub-menu>
    </a-menu>
    <yc-menu
      :style="{ width: '200px', height: '100%' }"
      :default-open-keys="['0']"
      default-selected-keys="0-2"
      show-collapse-button
      breakpoint="xl"
    >
      <yc-sub-menu path="0">
        <template #icon><icon-apps></icon-apps></template>
        <template #title>Navigation 1</template>
        <yc-menu-item path="0_0">Menu 1</yc-menu-item>
        <yc-menu-item path="0_1">Menu 2</yc-menu-item>
        <yc-menu-item path="0_2">Menu 3</yc-menu-item>
        <yc-menu-item path="0_3">Menu 4</yc-menu-item>
      </yc-sub-menu>
      <yc-sub-menu path="1">
        <template #icon><icon-bug></icon-bug></template>
        <template #title>Navigation 2</template>
        <yc-menu-item path="1_0">Menu 1</yc-menu-item>
        <yc-menu-item path="1_1">Menu 2</yc-menu-item>
        <yc-menu-item path="1_2">Menu 3</yc-menu-item>
      </yc-sub-menu>
      <yc-sub-menu path="2">
        <template #icon><icon-bulb></icon-bulb></template>
        <template #title>Navigation 3</template>
        <yc-menu-item path="2_0">Menu 1</yc-menu-item>
        <yc-menu-item path="2_1">Menu 2</yc-menu-item>
        <yc-sub-menu path="2_2" title="Navigation 4">
          <yc-menu-item path="2_2_0">Menu 1</yc-menu-item>
          <yc-menu-item path="2_2_1">Menu 2</yc-menu-item>
        </yc-sub-menu>
      </yc-sub-menu>
    </yc-menu>
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

// });
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
.layout-demo :deep(.yc-layout-footer) {
  height: 64px;
  background-color: var(--color-primary-light-4);
}
.layout-demo :deep(.yc-layout-content) {
  background-color: rgb(var(--arcoblue-6));
}
.layout-demo :deep(.yc-layout-sider) {
  width: 206px;
  background-color: var(--color-primary-light-3);
}

.layout-demo :deep(.arco-layout-header),
.layout-demo :deep(.arco-layout-header),
.layout-demo :deep(.arco-layout-footer) {
  height: 64px;
  background-color: var(--color-primary-light-4);
}
.layout-demo :deep(.arco-layout-content) {
  background-color: rgb(var(--arcoblue-6));
}
.layout-demo :deep(.arco-layout-sider) {
  width: 206px;
  background-color: var(--color-primary-light-3);
}
</style>
