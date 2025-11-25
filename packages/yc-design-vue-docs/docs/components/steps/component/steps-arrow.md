### 箭头步骤条

通过设置 `type="arrow"`，可以使用箭头类型的步骤条。注意：仅支持水平步骤条。

<div class="cell-demo vp-raw">
  <yc-steps
    type="arrow"
    :current="2">
    <yc-step description="This is a description">Succeeded</yc-step>
    <yc-step description="This is a description">Processing</yc-step>
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
    type="arrow"
    :current="2">
    <yc-step description="This is a description">Succeeded</yc-step>
    <yc-step description="This is a description">Processing</yc-step>
    <yc-step description="This is a description">Pending</yc-step>
  </yc-steps>
</template>
```

</details>
