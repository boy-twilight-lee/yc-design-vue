### 按钮下拉框

可以使用 `<dropdown-button>` 组件用来展示右边是额外相关功能菜单的按钮。

<div class="cell-demo vp-raw">
  <yc-space size="large">
    <yc-dropdown-button>
      Publish
      <template #content>
        <yc-doption>Save now</yc-doption>
        <yc-doption>Save and Publish</yc-doption>
      </template>
    </yc-dropdown-button>
    <yc-dropdown-button disabled>
      Disabled
      <template #content>
        <yc-doption>Save now</yc-doption>
        <yc-doption>Save and Publish</yc-doption>
      </template>
    </yc-dropdown-button>
    <yc-dropdown-button>
      Publish
      <template #icon>
        <icon-down />
      </template>
      <template #content>
        <yc-doption>Save now</yc-doption>
        <yc-doption>Save and Publish</yc-doption>
      </template>
    </yc-dropdown-button>
  </yc-space>
</div>

<details>
<summary>
 <button class="code-btn"  >
    <icon-code />
 </button>
</summary>

```vue
<template>
  <yc-space size="large">
    <yc-dropdown-button>
      Publish
      <template #content>
        <yc-doption>Save now</yc-doption>
        <yc-doption>Save and Publish</yc-doption>
      </template>
    </yc-dropdown-button>
    <yc-dropdown-button disabled>
      Disabled
      <template #content>
        <yc-doption>Save now</yc-doption>
        <yc-doption>Save and Publish</yc-doption>
      </template>
    </yc-dropdown-button>
    <yc-dropdown-button>
      Publish
      <template #icon>
        <icon-down />
      </template>
      <template #content>
        <yc-doption>Save now</yc-doption>
        <yc-doption>Save and Publish</yc-doption>
      </template>
    </yc-dropdown-button>
  </yc-space>
</template>

<style>
.arco-dropdown-open .arco-icon-down {
  transform: rotate(180deg);
}
</style>
```

</details>
