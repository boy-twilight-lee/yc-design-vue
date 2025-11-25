### 基本用法

步骤条的基本用法。

<div class="cell-demo vp-raw">
  <div>
    <yc-steps :current="2">
      <yc-step>Succeeded</yc-step>
      <yc-step>Processing</yc-step>
      <yc-step>Pending</yc-step>
    </yc-steps>
    <yc-divider />
    <div style="line-height: 140px; text-align: center; color: #C9CDD4; ">
      Step 2 Content
    </div>
  </div>
</div>

<details>
<summary>
 <button class="code-btn"  >
    <icon-code />
 </button>
</summary>

```vue
<template>
  <div>
    <yc-steps :current="2">
      <yc-step>Succeeded</yc-step>
      <yc-step>Processing</yc-step>
      <yc-step>Pending</yc-step>
    </yc-steps>
    <yc-divider />
    <div style="line-height: 140px; text-align: center; color: #C9CDD4; ">
      Step 2 Content
    </div>
  </div>
</template>
```

</details>
