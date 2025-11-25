### 不同大小菜单

通过 `style` 自由指定菜单的宽度和菜单项的高度。

<div class="cell-demo vp-raw">
  <div class="menu-demo">
    <yc-slider
      :style="{ width: '320px', marginBottom: '24px' }"
      v-model="width"
      :step="10"
      :min="160"
      :max="400" />
    <yc-menu
      showCollapseButton
      :default-open-keys="['0']"
      :default-selected-keys="'0_1'"
      :style="{ width: `${width}px`, height: 'calc(100% - 28px)' }">
      <yc-sub-menu path="0">
        <template #icon><IconApps></IconApps></template>
        <template #title>Navigation 1</template>
        <yc-menu-item path="0_0">Menu 1</yc-menu-item>
        <yc-menu-item path="0_1">Menu 2</yc-menu-item>
        <yc-menu-item
          path="0_2"
          disabled>
          Menu 3
        </yc-menu-item>
      </yc-sub-menu>
      <yc-sub-menu path="1">
        <template #icon><IconBug></IconBug></template>
        <template #title>Navigation 2</template>
        <yc-menu-item path="1_0">Menu 1</yc-menu-item>
        <yc-menu-item path="1_1">Menu 2</yc-menu-item>
        <yc-menu-item path="1_2">Menu 3</yc-menu-item>
      </yc-sub-menu>
      <yc-sub-menu path="2">
        <template #icon><IconBulb></IconBulb></template>
        <template #title>Navigation 3</template>
        <yc-menu-item path="2_0">Menu 1</yc-menu-item>
        <yc-menu-item path="2_1">Menu 2</yc-menu-item>
        <yc-menu-item path="2_2">Menu 3</yc-menu-item>
      </yc-sub-menu>
    </yc-menu>
  </div>
</div>

<script setup>
import { ref } from 'vue';
const width = ref(240);
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
    <yc-slider
      :style="{ width: '320px', marginBottom: '24px' }"
      v-model="width"
      :step="10"
      :min="160"
      :max="400" />
    <yc-menu
      showCollapseButton
      :default-open-keys="['0']"
      :default-selected-keys="'0_1'"
      :style="{ width: `${width}px`, height: 'calc(100% - 28px)' }">
      <yc-sub-menu path="0">
        <template #icon><IconApps></IconApps></template>
        <template #title>Navigation 1</template>
        <yc-menu-item path="0_0">Menu 1</yc-menu-item>
        <yc-menu-item path="0_1">Menu 2</yc-menu-item>
        <yc-menu-item
          path="0_2"
          disabled>
          Menu 3
        </yc-menu-item>
      </yc-sub-menu>
      <yc-sub-menu path="1">
        <template #icon><IconBug></IconBug></template>
        <template #title>Navigation 2</template>
        <yc-menu-item path="1_0">Menu 1</yc-menu-item>
        <yc-menu-item path="1_1">Menu 2</yc-menu-item>
        <yc-menu-item path="1_2">Menu 3</yc-menu-item>
      </yc-sub-menu>
      <yc-sub-menu path="2">
        <template #icon><IconBulb></IconBulb></template>
        <template #title>Navigation 3</template>
        <yc-menu-item path="2_0">Menu 1</yc-menu-item>
        <yc-menu-item path="2_1">Menu 2</yc-menu-item>
        <yc-menu-item path="2_2">Menu 3</yc-menu-item>
      </yc-sub-menu>
    </yc-menu>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const width = ref(240);
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
