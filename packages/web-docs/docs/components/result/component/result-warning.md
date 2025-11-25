### 错误状态

展示错误状态。

<div class="cell-demo vp-raw">
  <yc-result
    status="error"
    title="This is title content">
    <template #subtitle> This is subtitle content </template>
    <template #extra>
      <yc-space>
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
    status="error"
    title="This is title content">
    <template #subtitle> This is subtitle content </template>

    <template #extra>
      <yc-space>
        <yc-button type="primary">Back</yc-button>
      </yc-space>
    </template>
  </yc-result>
</template>
```

</details>
