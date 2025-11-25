### HTTP状态码 500

通常表示服务器错误

<div class="cell-demo vp-raw">
  <yc-result
    status="500"
    subtitle="This page isn’t working.">
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
    status="500"
    subtitle="This page isn’t working.">
    <template #extra>
      <yc-space>
        <yc-button type="primary">Back</yc-button>
      </yc-space>
    </template>
  </yc-result>
</template>
```

</details>
