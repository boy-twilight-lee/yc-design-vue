### 链接的状态

链接的状态分为 `normal` - 正常（默认）、`success` - 成功、`warning` - 警告、`danger` - 危险四种。

<div class="cell-demo vp-raw">
  <yc-space direction="vertical">
    <yc-space>
      <yc-link href="link">Normal Link</yc-link>
      <yc-link href="link" disabled>Normal Link</yc-link>
    </yc-space>
    <yc-space>
      <yc-link href="link" status="success">Success Link</yc-link>
      <yc-link href="link" status="success" disabled>Success Link</yc-link>
    </yc-space>
    <yc-space>
      <yc-link href="link" status="warning">Warning Link</yc-link>
      <yc-link href="link" status="warning" disabled>Warning Link</yc-link>
    </yc-space>
    <yc-space>
      <yc-link href="link" status="danger">Danger Link</yc-link>
      <yc-link href="link" status="danger" disabled>Danger Link</yc-link>
    </yc-space>
  </yc-space>
</div>

<details>
<summary>
 <button class="code-btn"  >
    <icon-code />
 </button>
</summary>

```vue
<template>
  <yc-space direction="vertical">
    <yc-space>
      <yc-link href="link">Normal Link</yc-link>
      <yc-link
        href="link"
        disabled
        >Normal Link</yc-link
      >
    </yc-space>
    <yc-space>
      <yc-link
        href="link"
        status="success"
        >Success Link</yc-link
      >
      <yc-link
        href="link"
        status="success"
        disabled
        >Success Link</yc-link
      >
    </yc-space>
    <yc-space>
      <yc-link
        href="link"
        status="warning"
        >Warning Link</yc-link
      >
      <yc-link
        href="link"
        status="warning"
        disabled
        >Warning Link</yc-link
      >
    </yc-space>
    <yc-space>
      <yc-link
        href="link"
        status="danger"
        >Danger Link</yc-link
      >
      <yc-link
        href="link"
        status="danger"
        disabled
        >Danger Link</yc-link
      >
    </yc-space>
  </yc-space>
</template>
```

</details>
