### 状态点

设置 `status`，可以得到不同的状态点。`normal - 正常` 、 `processing - 进行中` 、`success - 成功` 、 `warning - 提醒` 、 `danger - 危险`。

<div class="cell-demo vp-raw">
  <yc-space size="large" direction="vertical">
    <yc-space size="large">
      <yc-badge status="normal" />
      <yc-badge status="processing" />
      <yc-badge status="success" />
      <yc-badge status="warning" />
      <yc-badge status="danger" />
    </yc-space>
    <yc-space size="large">
      <yc-badge status="normal" text="Normal" />
      <yc-badge status="processing" text="Processing" />
      <yc-badge status="success" text="Success" />
      <yc-badge status="warning" text="Warning" />
      <yc-badge status="danger" text="Danger" />
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
  <yc-space
    size="large"
    direction="vertical">
    <yc-space size="large">
      <yc-badge status="normal" />
      <yc-badge status="processing" />
      <yc-badge status="success" />
      <yc-badge status="warning" />
      <yc-badge status="danger" />
    </yc-space>
    <yc-space size="large">
      <yc-badge
        status="normal"
        text="Normal" />
      <yc-badge
        status="processing"
        text="Processing" />
      <yc-badge
        status="success"
        text="Success" />
      <yc-badge
        status="warning"
        text="Warning" />
      <yc-badge
        status="danger"
        text="Danger" />
    </yc-space>
  </yc-space>
</template>
```

</details>
