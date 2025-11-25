### 显示省略

通过 `max-count` 来指定面包屑的最多渲染数量，超出的部分将显示为省略号。

<div class="cell-demo vp-raw">
  <yc-space direction="vertical">
    <yc-breadcrumb :max-count="3">
      <yc-breadcrumb-item>Home</yc-breadcrumb-item>
      <yc-breadcrumb-item>Sub Home</yc-breadcrumb-item>
      <yc-breadcrumb-item>All Channel</yc-breadcrumb-item>
      <yc-breadcrumb-item>Channel</yc-breadcrumb-item>
      <yc-breadcrumb-item>News</yc-breadcrumb-item>
      <yc-breadcrumb-item>Post</yc-breadcrumb-item>
    </yc-breadcrumb>
    <yc-breadcrumb :max-count="3">
      <template #more-icon>
        <yc-tooltip content="more routes a/b/c">
          <icon-more />
        </yc-tooltip>
      </template>
      <yc-breadcrumb-item>Home</yc-breadcrumb-item>
      <yc-breadcrumb-item>Sub Home</yc-breadcrumb-item>
      <yc-breadcrumb-item>All Channel</yc-breadcrumb-item>
      <yc-breadcrumb-item>Channel</yc-breadcrumb-item>
      <yc-breadcrumb-item>News</yc-breadcrumb-item>
      <yc-breadcrumb-item>Post</yc-breadcrumb-item>
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
    <yc-breadcrumb :max-count="3">
      <yc-breadcrumb-item>Home</yc-breadcrumb-item>
      <yc-breadcrumb-item>Sub Home</yc-breadcrumb-item>
      <yc-breadcrumb-item>All Channel</yc-breadcrumb-item>
      <yc-breadcrumb-item>Channel</yc-breadcrumb-item>
      <yc-breadcrumb-item>News</yc-breadcrumb-item>
      <yc-breadcrumb-item>Post</yc-breadcrumb-item>
    </yc-breadcrumb>
    <yc-breadcrumb :max-count="3">
      <template #more-icon>
        <yc-tooltip content="more routes a/b/c">
          <icon-more />
        </yc-tooltip>
      </template>
      <yc-breadcrumb-item>Home</yc-breadcrumb-item>
      <yc-breadcrumb-item>Sub Home</yc-breadcrumb-item>
      <yc-breadcrumb-item>All Channel</yc-breadcrumb-item>
      <yc-breadcrumb-item>Channel</yc-breadcrumb-item>
      <yc-breadcrumb-item>News</yc-breadcrumb-item>
      <yc-breadcrumb-item>Post</yc-breadcrumb-item>
    </yc-breadcrumb>
  </yc-space>
</template>
```

</details>
