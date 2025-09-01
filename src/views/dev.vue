<template>
  <div class="test">
    <div>
      <yc-menu
        :defaultOpenKeys="['1']"
        :defaultSelectedKeys="'0_2'"
        style="width: 200px"
      >
        <yc-menu-item path="0_1" disabled>
          <template #icon>
            <IconHome />
          </template>
          Menu 1
        </yc-menu-item>
        <yc-menu-item path="0_2">
          <template #icon>
            <IconCalendar />
          </template>
          Menu 2
        </yc-menu-item>
        <yc-sub-menu path="1">
          <template #icon>
            <IconCalendar />
          </template>
          <template #title>
            <span>Navigation 1</span>
          </template>
          <yc-menu-item path="1_1">Menu 1</yc-menu-item>
          <yc-menu-item path="1_2">Menu 2</yc-menu-item>
          <yc-sub-menu path="2" title="Navigation 2">
            <yc-menu-item path="2_1">Menu 1</yc-menu-item>
            <yc-menu-item path="2_2">Menu 2</yc-menu-item>
          </yc-sub-menu>
          <yc-sub-menu path="3" title="Navigation 3">
            <yc-menu-item path="3_1">Menu 1</yc-menu-item>
            <yc-menu-item path="3_2">Menu 2</yc-menu-item>
            <yc-menu-item path="3_3">Menu 3</yc-menu-item>
          </yc-sub-menu>
        </yc-sub-menu>
        <yc-sub-menu path="4">
          <template #icon>
            <IconCalendar />
          </template>
          <template #title>
            <span>Navigation 4</span>
          </template>
          <yc-menu-item path="4_1">Menu 1</yc-menu-item>
          <yc-menu-item path="4_2">Menu 2</yc-menu-item>
          <yc-menu-item path="4_3">Menu 3</yc-menu-item>
        </yc-sub-menu>
      </yc-menu>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useDark } from '@vueuse/core';
// document.body.setAttribute('arco-theme', 'dark');
const isDark = useDark({
  selector: 'body',
  attribute: 'yc-design-theme',
  valueDark: 'dark',
  valueLight: 'light',
  initialValue: 'light',
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
