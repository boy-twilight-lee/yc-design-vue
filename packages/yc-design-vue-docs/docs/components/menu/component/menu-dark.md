### 深色模式导航

通过 `theme` 指定主题，分为 `light` 和 `dark` 两种。

<div class="cell-demo vp-raw">
  <div class="menu-demo">
    <yc-menu
      mode="horizontal"
      theme="dark"
      default-selected-keys="1">
      <yc-menu-item
        path="0"
        :style="{ padding: 0, marginRight: '38px' }"
        disabled>
        <div
          :style="{
            width: '80px',
            height: '30px',
            background: 'var(--color-fill-3)',
            cursor: 'text',
          }" />
      </yc-menu-item>
      <yc-menu-item path="1">Home</yc-menu-item>
      <yc-menu-item path="2">Solution</yc-menu-item>
      <yc-menu-item path="3">Cloud Service</yc-menu-item>
      <yc-menu-item path="4">Cooperation</yc-menu-item>
    </yc-menu>
  </div>
</div>

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
    <yc-menu
      mode="horizontal"
      theme="dark"
      default-selected-keys="1">
      <yc-menu-item
        path="0"
        :style="{ padding: 0, marginRight: '38px' }"
        disabled>
        <div
          :style="{
            width: '80px',
            height: '30px',
            background: 'var(--color-fill-3)',
            cursor: 'text',
          }" />
      </yc-menu-item>
      <yc-menu-item path="1">Home</yc-menu-item>
      <yc-menu-item path="2">Solution</yc-menu-item>
      <yc-menu-item path="3">Cloud Service</yc-menu-item>
      <yc-menu-item path="4">Cooperation</yc-menu-item>
    </yc-menu>
  </div>
</template>

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
