### 禁用状态

禁用复选框。

<div class="cell-demo vp-raw">
  <yc-space size="large">
    <yc-checkbox
      value="1"
      disabled
      >Disabled Option 1</yc-checkbox
    >
    <yc-checkbox
      :default-checked="true"
      disabled
      >Disabled Option 2</yc-checkbox
    >
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
    <yc-checkbox
      value="1"
      disabled
      >Disabled Option 1</yc-checkbox
    >
    <yc-checkbox
      :default-checked="true"
      disabled
      >Disabled Option 2</yc-checkbox
    >
  </yc-space>
</template>
```

</details>
