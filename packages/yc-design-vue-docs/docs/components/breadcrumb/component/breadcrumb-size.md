### 自定义尺寸

通过指定样式来自定义面包屑的尺寸。

<div class="cell-demo vp-raw">
  <yc-space direction="vertical">
    <yc-breadcrumb>
      <yc-breadcrumb-item>Home</yc-breadcrumb-item>
      <yc-breadcrumb-item>Channel</yc-breadcrumb-item>
      <yc-breadcrumb-item>News</yc-breadcrumb-item>
    </yc-breadcrumb>
    <yc-breadcrumb :style="{ fontSize: `12px` }">
      <yc-breadcrumb-item>Home</yc-breadcrumb-item>
      <yc-breadcrumb-item>Channel</yc-breadcrumb-item>
      <yc-breadcrumb-item>News</yc-breadcrumb-item>
    </yc-breadcrumb>
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
    <yc-breadcrumb>
      <yc-breadcrumb-item>Home</yc-breadcrumb-item>
      <yc-breadcrumb-item>Channel</yc-breadcrumb-item>
      <yc-breadcrumb-item>News</yc-breadcrumb-item>
    </yc-breadcrumb>
    <yc-breadcrumb :style="{ fontSize: `12px` }">
      <yc-breadcrumb-item>Home</yc-breadcrumb-item>
      <yc-breadcrumb-item>Channel</yc-breadcrumb-item>
      <yc-breadcrumb-item>News</yc-breadcrumb-item>
    </yc-breadcrumb>
  </yc-space>
</template>
```

</details>
