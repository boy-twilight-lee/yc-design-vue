### 按钮尺寸

按钮分为 `mini`、`small`、`medium`、`large` 四种尺寸。高度分别为：`24px`、`28px`、`32px`、`36px`。推荐（默认）尺寸为 `medium`。可在不同场景及不同业务需求选择适合尺寸。

<div class="cell-demo vp-raw">
  <yc-space>
    <yc-button type="primary" size="mini">Mini</yc-button>
    <yc-button type="primary" size="small">Small</yc-button>
    <yc-button type="primary">Medium</yc-button>
    <yc-button type="primary" size="large">Large</yc-button>
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
  <yc-space>
    <yc-button
      type="primary"
      size="mini"
      >Mini</yc-button
    >
    <yc-button
      type="primary"
      size="small"
      >Small</yc-button
    >
    <yc-button type="primary">Medium</yc-button>
    <yc-button
      type="primary"
      size="large"
      >Large</yc-button
    >
  </yc-space>
</template>
```

</details>
