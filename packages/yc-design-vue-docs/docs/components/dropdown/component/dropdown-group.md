### 分组选项

通过 `<dgroup>` 组件使用分组选项。

<div class="cell-demo vp-raw">
  <yc-dropdown>
    <yc-button>Click Me</yc-button>
    <template #content>
      <yc-dgroup title="Group 1">
        <yc-doption>Option 1</yc-doption>
        <yc-doption>Option 2</yc-doption>
        <yc-doption>Option 3</yc-doption>
      </yc-dgroup>
      <yc-dgroup title="Group 2">
        <yc-doption>Option 4</yc-doption>
        <yc-doption>Option 5</yc-doption>
        <yc-doption>Option 6</yc-doption>
      </yc-dgroup>
    </template>
  </yc-dropdown>
</div>

<details>
<summary>
 <button class="code-btn"  >
    <icon-code />
 </button>
</summary>

```vue
<template>
  <yc-dropdown>
    <yc-button>Click Me</yc-button>
    <template #content>
      <yc-dgroup title="Group 1">
        <yc-doption>Option 1</yc-doption>
        <yc-doption>Option 2</yc-doption>
        <yc-doption>Option 3</yc-doption>
      </yc-dgroup>
      <yc-dgroup title="Group 2">
        <yc-doption>Option 4</yc-doption>
        <yc-doption>Option 5</yc-doption>
        <yc-doption>Option 6</yc-doption>
      </yc-dgroup>
    </template>
  </yc-dropdown>
</template>
```

</details>
