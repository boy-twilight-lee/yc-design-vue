### 基本用法

展示结果状态。

<div class="cell-demo vp-raw">
  <yc-result
    title="This is title content"
    subtitle="This is subtitle content">
    <template #extra>
      <yc-space>
        <yc-button type="secondary">Again</yc-button>
        <yc-button type="primary">Back</yc-button>
      </yc-space>
    </template>
  </yc-result>
</div>

<details>
<summary>
 <button class="code-btn"  >
    <icon-code />
 </button>
</summary>

```vue
<template>
  <yc-result
    title="This is title content"
    subtitle="This is subtitle content">
    <template #extra>
      <yc-space>
        <yc-button type="secondary">Again</yc-button>
        <yc-button type="primary">Back</yc-button>
      </yc-space>
    </template>
  </yc-result>
</template>
```

</details>
