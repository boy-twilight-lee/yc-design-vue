### 缩起内嵌菜单

通过 `collapsed` 来指定菜单收起。

<div clas="cell-demo vpr-raw">
  <div class="menu-demo">
    <yc-button
      :style="{
        padding: '0 12px',
        height: '30px',
        lineHeight: '30px',
        marginBottom: '4px',
      }"
      type="primary"
      @click="toggleCollapse">
      <icon-menu-unfold v-if="collapsed" />
      <icon-menu-fold v-else />
    </yc-button>
    <yc-menu
      :style="{ width: '200px', borderRadius: '4px' }"
      theme="dark"
      :collapsed="collapsed"
      :default-open-keys="['0']"
      default-selected-keys="0_2">
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

const collapsed = ref(false);
const toggleCollapse = () => {
  collapsed.value = !collapsed.value;
};
</script>

<style scoped>
.menu-demo {
  box-sizing: border-box;
  width: 100%;
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
    <yc-button
      :style="{
        padding: '0 12px',
        height: '30px',
        lineHeight: '30px',
        marginBottom: '4px',
      }"
      type="primary"
      @click="toggleCollapse">
      <icon-menu-unfold v-if="collapsed" />
      <icon-menu-fold v-else />
    </yc-button>
    <yc-menu
      :style="{ width: '200px', borderRadius: '4px' }"
      theme="dark"
      :collapsed="collapsed"
      :default-open-keys="['0']"
      :default-selected-keys="['0_2']">
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

const collapsed = ref(false);
const toggleCollapse = () => {
  collapsed.value = !collapsed.value;
};
</script>

<style scoped>
.menu-demo {
  box-sizing: border-box;
  width: 100%;
  padding: 40px;
  background-color: var(--color-neutral-2);
}
</style>
```

</details>
