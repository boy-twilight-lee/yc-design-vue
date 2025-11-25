### 自定义分隔符

通过 `separator` 属性或插槽自定义分隔符。面包屑子项也可通过 `separator` 属性或插槽自定义分隔符，且优先级高于父项。

<div class="cell-demo vp-raw">
  <yc-space direction="vertical">
    <yc-breadcrumb>
      <template #separator>
        <icon-right />
      </template>
      <yc-breadcrumb-item>Home</yc-breadcrumb-item>
      <yc-breadcrumb-item>Channel</yc-breadcrumb-item>
      <yc-breadcrumb-item>News</yc-breadcrumb-item>
    </yc-breadcrumb>
    <yc-breadcrumb separator="~">
      <yc-breadcrumb-item>Home</yc-breadcrumb-item>
      <yc-breadcrumb-item>Channel</yc-breadcrumb-item>
      <yc-breadcrumb-item>News</yc-breadcrumb-item>
    </yc-breadcrumb>
    <yc-breadcrumb>
      <template #separator>
        <icon-right />
      </template>
      <yc-breadcrumb-item separator="->">Home</yc-breadcrumb-item>
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
      <template #separator>
        <icon-right />
      </template>
      <yc-breadcrumb-item>Home</yc-breadcrumb-item>
      <yc-breadcrumb-item>Channel</yc-breadcrumb-item>
      <yc-breadcrumb-item>News</yc-breadcrumb-item>
    </yc-breadcrumb>
    <yc-breadcrumb separator="~">
      <yc-breadcrumb-item>Home</yc-breadcrumb-item>
      <yc-breadcrumb-item>Channel</yc-breadcrumb-item>
      <yc-breadcrumb-item>News</yc-breadcrumb-item>
    </yc-breadcrumb>
    <yc-breadcrumb>
      <template #separator>
        <icon-right />
      </template>
      <yc-breadcrumb-item separator="->">Home</yc-breadcrumb-item>
      <yc-breadcrumb-item>Channel</yc-breadcrumb-item>
      <yc-breadcrumb-item>News</yc-breadcrumb-item>
    </yc-breadcrumb>
  </yc-space>
</template>
```

</details>
