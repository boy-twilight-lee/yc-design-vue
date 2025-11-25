### 点状步骤条

通过设置 `type="dot"` ， 可以使用点状的步骤条。此模式没有 `small` 尺寸。

<div class="cell-demo vp-raw">
  <yc-steps type="dot">
    <yc-step>Succeeded</yc-step>
    <yc-step>Processing</yc-step>
    <yc-step>Pending</yc-step>
  </yc-steps>
</div>

<details>
<summary>
 <button class="code-btn"  >
    <icon-code />
 </button>
</summary>

```vue
<template>
  <yc-steps type="dot">
    <yc-step>Succeeded</yc-step>
    <yc-step>Processing</yc-step>
    <yc-step>Pending</yc-step>
  </yc-steps>
</template>
```

</details>
