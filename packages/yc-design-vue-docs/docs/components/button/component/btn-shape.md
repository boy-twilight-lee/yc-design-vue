### 按钮形状

按钮分为 `square` - 长方形（默认）、`circle` - 圆形、`round` - 全圆角三种形状。

<div class="cell-demo vp-raw">
  <yc-space>
    <yc-button type="primary">Square</yc-button>
    <yc-button type="primary" shape="round">Round</yc-button>
    <yc-button type="primary">
      <template #icon>
        <icon-plus />
      </template>
    </yc-button>
    <yc-button type="primary" shape="circle">
      <icon-plus />
    </yc-button>
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
    <yc-button type="primary">Square</yc-button>
    <yc-button
      type="primary"
      shape="round"
      >Round</yc-button
    >
    <yc-button type="primary">
      <template #icon>
        <icon-plus />
      </template>
    </yc-button>
    <yc-button
      type="primary"
      shape="circle">
      <icon-plus />
    </yc-button>
  </yc-space>
</template>
```

</details>
