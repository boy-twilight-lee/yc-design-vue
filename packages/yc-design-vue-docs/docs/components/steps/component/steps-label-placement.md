### 标签放置位置

通过设置 `label-placement` 可以改变标签描述文字放置的位置。放置位置分为 `horizontal` - 放置在图标右侧（默认）、`vertical` - 放置在图标下方两种。

<div class="cell-demo vp-raw">
  <yc-steps label-placement="vertical">
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
  <yc-steps label-placement="vertical">
    <yc-step description="This is a description">Succeeded</yc-step>
    <yc-step description="This is a description">Processing</yc-step>
    <yc-step description="This is a description">Pending</yc-step>
  </yc-steps>
</template>
```

</details>
