### 触发方式

通过 `trigger` 指定触发方式。

<div class="cell-demo vp-raw">
  <yc-space size="large">
    <yc-dropdown>
      <yc-button>Click Me</yc-button>
      <template #content>
        <yc-doption>Option 1</yc-doption>
        <yc-doption>Option 2</yc-doption>
        <yc-doption>Option 3</yc-doption>
      </template>
    </yc-dropdown>
    <yc-dropdown trigger="hover">
      <yc-button>Hover Me</yc-button>
      <template #content>
        <yc-doption>Option 1</yc-doption>
        <yc-doption>Option 2</yc-doption>
        <yc-doption>Option 3</yc-doption>
      </template>
    </yc-dropdown>
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
    <yc-dropdown>
      <yc-button>Click Me</yc-button>
      <template #content>
        <yc-doption>Option 1</yc-doption>
        <yc-doption>Option 2</yc-doption>
        <yc-doption>Option 3</yc-doption>
      </template>
    </yc-dropdown>
    <yc-dropdown trigger="hover">
      <yc-button>Hover Me</yc-button>
      <template #content>
        <yc-doption>Option 1</yc-doption>
        <yc-doption>Option 2</yc-doption>
        <yc-doption>Option 3</yc-doption>
      </template>
    </yc-dropdown>
  </yc-space>
</template>
```

</details>
