<template>
  <div class="test">
    <yc-layout class="layout-demo">
      <yc-layout-sider
        theme="dark"
        breakpoint="lg"
        :width="220"
        collapsible
        :collapsed="collapsed"
        @collapse="onCollapse"
      >
        <div class="logo" />
        <yc-menu
          :defaultOpenKeys="['1']"
          :defaultSelectedKeys="'0_2'"
          @menuItemClick="onClickMenuItem"
        >
          <yc-menu-item path="0_1" disabled>
            <IconHome />
            Menu 1
          </yc-menu-item>
          <yc-menu-item path="0_2">
            <IconCalendar />
            Menu 2
          </yc-menu-item>
          <yc-sub-menu path="1">
            <template #title>
              <span><IconCalendar />Navigation 1</span>
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
            <template #title>
              <span><IconCalendar />Navigation 4</span>
            </template>
            <yc-menu-item path="4_1">Menu 1</yc-menu-item>
            <yc-menu-item path="4_2">Menu 2</yc-menu-item>
            <yc-menu-item path="4_3">Menu 3</yc-menu-item>
          </yc-sub-menu>
        </yc-menu>
      </yc-layout-sider>
      <yc-layout>
        <yc-layout-header>
          <yc-menu :openKeys="['1']" :selectedKeys="'0_2'" mode="horizontal">
            <yc-menu-item path="0_1" disabled>
              <IconHome />
              Menu 1
            </yc-menu-item>
            <yc-menu-item path="0_2">
              <IconCalendar />
              Menu 2
            </yc-menu-item>
            <yc-sub-menu path="1">
              <template #title>
                <span><IconCalendar />Navigation 1</span>
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
              <template #title>
                <span><IconCalendar />Navigation 4</span>
              </template>
              <yc-menu-item path="4_1">Menu 1</yc-menu-item>
              <yc-menu-item path="4_2">Menu 2</yc-menu-item>
              <yc-menu-item path="4_3">Menu 3</yc-menu-item>
            </yc-sub-menu>
          </yc-menu>
        </yc-layout-header>
        <yc-layout style="padding: 0 24px">
          <yc-breadcrumb :style="{ margin: '16px 0' }">
            <yc-breadcrumb-item>Home</yc-breadcrumb-item>
            <yc-breadcrumb-item>List</yc-breadcrumb-item>
            <yc-breadcrumb-item>App</yc-breadcrumb-item>
          </yc-breadcrumb>
          <yc-layout-content>Content</yc-layout-content>
          <yc-layout-footer>Footer</yc-layout-footer>
        </yc-layout>
      </yc-layout>
    </yc-layout>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { Message } from '@arco-design/web-vue';
// document.documentElement.setAttribute('a-design-dark', '');
// document.body.setAttribute('arco-theme', 'dark');
const collapsed = ref(false);
const onCollapse = (val, type) => {
  const content = type === 'responsive' ? '触发响应式收缩' : '点击触发收缩';
  Message.info({
    content,
    duration: 2000,
  });
  collapsed.value = val;
};
const onClickMenuItem = (key) => {
  Message.info({ content: `You select ${key}`, showIcon: true });
};
</script>

<style lang="less" scoped>
.test {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // background-color: #17171a;
  gap: 10px;
}
</style>

<style scoped>
.layout-demo {
  height: 500px;
  background: var(--color-fill-2);
  border: 1px solid var(--color-border);
}
.layout-demo :deep(.arco-layout-sider) .logo {
  height: 32px;
  margin: 12px 8px;
  background: rgba(255, 255, 255, 0.2);
}
.layout-demo :deep(.arco-layout-sider-light) .logo {
  background: var(--color-fill-2);
}
.layout-demo :deep(.arco-layout-header) {
  height: 64px;
  line-height: 64px;
  background: var(--color-bg-3);
}
.layout-demo :deep(.arco-layout-footer) {
  height: 48px;
  color: var(--color-text-2);
  font-weight: 400;
  font-size: 14px;
  line-height: 48px;
}
.layout-demo :deep(.arco-layout-content) {
  color: var(--color-text-2);
  font-weight: 400;
  font-size: 14px;
  background: var(--color-bg-3);
}
.layout-demo :deep(.arco-layout-footer),
.layout-demo :deep(.arco-layout-content) {
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: var(--color-white);
  font-size: 16px;
  font-stretch: condensed;
  text-align: center;
}
</style>
