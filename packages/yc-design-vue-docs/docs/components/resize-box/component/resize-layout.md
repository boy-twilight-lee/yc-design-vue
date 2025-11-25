### 在布局中使用

Layout 组件中集成了 `ResizeBox` 组件，可以在 `Layout` 中使用可伸缩的侧边栏。

<div class="cell-demo vp-raw">
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

<style scoped>
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
  min-width: 150px;
  max-width: 500px;
  height: 200px;
}

.layout-demo :deep(.yc-layout-content) {
  background-color: rgb(var(--arcoblue-6));
}
</style>

<script setup>
import { ref } from 'vue';
const width = ref(500);
const height = ref(200);
</script>

<details>
<summary>
 <button class="code-btn"  >
    <icon-code />
 </button>
</summary>

```vue
<template>
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
</template>

<style scoped>
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
  min-width: 150px;
  max-width: 500px;
  height: 200px;
}

.layout-demo :deep(.yc-layout-content) {
  background-color: rgb(var(--arcoblue-6));
}
</style>
```

</details>
