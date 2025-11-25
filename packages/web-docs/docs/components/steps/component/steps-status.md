### 步骤错误

通过设置 `status="error"` 来展示错误状态。

<div class="cell-demo vp-raw">
  <yc-steps
    :current="2"
    status="error">
    <yc-step description="This is a description">Succeeded</yc-step>
    <yc-step description="This is a description">Error</yc-step>
    <yc-step description="This is a description">Pending</yc-step>
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
  <yc-steps
    :current="2"
    status="error">
    <yc-step description="This is a description">Succeeded</yc-step>
    <yc-step description="This is a description">Error</yc-step>
    <yc-step description="This is a description">Pending</yc-step>
  </yc-steps>
</template>
```

</details>
