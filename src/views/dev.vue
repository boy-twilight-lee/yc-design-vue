<template>
  <div class="test" id="test">
    <div class="layout-demo">
      <yc-layout>
        <yc-layout-header>Header</yc-layout-header>
        <yc-layout>
          <yc-layout-sider :resize-directions="['right']">
            Sider
          </yc-layout-sider>
          <yc-layout-content>Content</yc-layout-content>
        </yc-layout>
        <yc-layout-footer>Footer</yc-layout-footer>
      </yc-layout>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue';
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
  color: #fff;
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
  background-color: rgb(148, 191, 255);
  min-width: 150px;
  // max-width: 500px;
  height: 200px;
}

.layout-demo :deep(.yc-layout-content) {
  background-color: rgb(22, 93, 255);
}
</style>
