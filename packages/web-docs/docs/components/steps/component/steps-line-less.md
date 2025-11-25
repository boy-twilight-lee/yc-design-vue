### 隐藏连接线

通过设置 `line-less` 可以使用无连接线模式。

<div class="cell-demo vp-raw">
  <yc-steps
    :current="2"
    line-less>
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
    :current="2"
    line-less>
    <yc-step description="This is a description">Succeeded</yc-step>
    <yc-step description="This is a description">Processing</yc-step>
    <yc-step description="This is a description">Pending</yc-step>
  </yc-steps>
</template>
```

</details>
