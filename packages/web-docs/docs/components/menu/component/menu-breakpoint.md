### 响应式收缩

设置 `breakpoint` 可触发响应式收缩。

<div class="Cell-demo vp-raw">
  <div class="menu-demo">
    <yc-menu
      :style="{ width: '200px', height: '100%' }"
      :default-open-keys="['0']"
      :default-selected-keys="'0_2'"
      show-collapse-button
      breakpoint="xl"
      @collapse="onCollapse">
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
        <yc-sub-menu
          path="2_2"
          title="Navigation 4">
          <yc-menu-item path="2_2_0">Menu 1</yc-menu-item>
          <yc-menu-item path="2_2_1">Menu 2</yc-menu-item>
        </yc-sub-menu>
      </yc-sub-menu>
    </yc-menu>
  </div>
</div>

<script setup>
import { ref } from 'vue';
import { Message } from 'yc-design-vue';

const onCollapse = (val, type) => {
  const content = type === 'responsive' ? '触发响应式收缩' : '点击触发收缩';
  Message.info({
    content,
    duration: 2000,
  });
};
</script>

<style scoped>
.menu-demo {
  box-sizing: border-box;
  width: 100%;
  height: 600px;
  padding: 40px;
  background-color: var(--color-neutral-2);
}
</style>

<details>
<summary>
 <button class="code-btn"  >
    <icon-code />
 </button>
</summary>

```vue
<template>
  <div class="menu-demo">
    <yc-menu
      :style="{ width: '200px', height: '100%' }"
      :default-open-keys="['0']"
      :default-selected-keys="'0_2'"
      show-collapse-button
      breakpoint="xl"
      @collapse="onCollapse">
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
        <yc-sub-menu
          path="2_2"
          title="Navigation 4">
          <yc-menu-item path="2_2_0">Menu 1</yc-menu-item>
          <yc-menu-item path="2_2_1">Menu 2</yc-menu-item>
        </yc-sub-menu>
      </yc-sub-menu>
    </yc-menu>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Message } from 'yc-design-vue';

const onCollapse = (val, type) => {
  const content = type === 'responsive' ? '触发响应式收缩' : '点击触发收缩';
  Message.info({
    content,
    duration: 2000,
  });
};
</script>

<style scoped>
.menu-demo {
  box-sizing: border-box;
  width: 100%;
  height: 600px;
  padding: 40px;
  background-color: var(--color-neutral-2);
}
</style>
```

</details>
