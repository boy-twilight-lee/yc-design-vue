### HTTP状态码 403

没有当前页面的访问权限。

<div class="cell-demo vp-raw">
  <yc-result
    status="403"
    subtitle="Access to this resource on the server is denied.">
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
    status="403"
    subtitle="Access to this resource on the server is denied.">
    <template #extra>
      <yc-space>
        <yc-button type="primary">Back</yc-button>
      </yc-space>
    </template>
  </yc-result>
</template>
```

</details>
