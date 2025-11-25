### 基本用法

单选框的基本用法。

<div class="cell-demo vp-raw">
   <yc-space size="large">
    <yc-radio value="radio">Radio</yc-radio>
    <yc-radio
      value="disabled radio"
      :default-checked="true"
      disabled
      >Disabled Radio</yc-radio
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
    <yc-radio value="radio">Radio</yc-radio>
    <yc-radio
      value="disabled radio"
      :default-checked="true"
      disabled
      >Disabled Radio</yc-radio
    >
  </yc-space>
</template>
```

</details>
