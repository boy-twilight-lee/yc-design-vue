### 响应式的 Grid 布局

Grid 组件的响应式配置格式为 `{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5, xxl: 6 }`。

<div class="cell-demo vp-raw">
  <yc-grid :cols="{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5, xxl: 6 }" :colGap="12" :rowGap="16" class="grid-demo-grid">
    <yc-grid-item class="demo-item">item</yc-grid-item>
    <yc-grid-item class="demo-item">item</yc-grid-item>
    <yc-grid-item class="demo-item">item</yc-grid-item>
    <yc-grid-item class="demo-item">item</yc-grid-item>
    <yc-grid-item class="demo-item">item</yc-grid-item>
    <yc-grid-item class="demo-item">item</yc-grid-item>
    <yc-grid-item class="demo-item" :span="{ xl: 4, xxl: 6 }" suffix>
      suffix
    </yc-grid-item>
  </yc-grid>
</div>

<style scoped>
.grid-demo-grid .demo-item,
.grid-demo-grid .demo-suffix {
  height: 48px;
  line-height: 48px;
  color: var(--color-white);
  text-align: center;
}
.grid-demo-grid .demo-item:nth-child(2n) {
  background-color: rgba(var(--arcoblue-6), 0.9);
}
.grid-demo-grid .demo-item:nth-child(2n + 1) {
  background-color: var(--color-primary-light-4);
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
  <yc-grid
    :cols="{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5, xxl: 6 }"
    :colGap="12"
    :rowGap="16"
    class="grid-demo-grid">
    <yc-grid-item class="demo-item">item</yc-grid-item>
    <yc-grid-item class="demo-item">item</yc-grid-item>
    <yc-grid-item class="demo-item">item</yc-grid-item>
    <yc-grid-item class="demo-item">item</yc-grid-item>
    <yc-grid-item class="demo-item">item</yc-grid-item>
    <yc-grid-item class="demo-item">item</yc-grid-item>
    <yc-grid-item
      class="demo-item"
      :span="{ xl: 4, xxl: 6 }"
      suffix>
      suffix
    </yc-grid-item>
  </yc-grid>
</template>

<style scoped>
.grid-demo-grid .demo-item,
.grid-demo-grid .demo-suffix {
  height: 48px;
  line-height: 48px;
  color: var(--color-white);
  text-align: center;
}
.grid-demo-grid .demo-item:nth-child(2n) {
  background-color: rgba(var(--arcoblue-6), 0.9);
}
.grid-demo-grid .demo-item:nth-child(2n + 1) {
  background-color: var(--color-primary-light-4);
}
</style>
```

</details>
