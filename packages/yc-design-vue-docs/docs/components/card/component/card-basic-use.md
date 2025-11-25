### 基本用法

常规的内容容器，可承载文字、列表、图片、段落，常用于模块划分和内容概览。

<div class="cell-demo vp-raw">
  <div :style="{ display: 'flex' }">
    <yc-card
      :style="{ width: '360px' }"
      title="Arco Card">
      <template #extra>
        <yc-link>More</yc-link>
      </template>
      ByteDance's core product, Toutiao ("Headlines"), is a content platform in
      China and around the world. Toutiao started out as a news recommendation
      engine and gradually evolved into a platform delivering content in various
      formats.
    </yc-card>
  </div>
</div>

<details>
<summary>
 <button class="code-btn"  >
    <icon-code />
 </button>
</summary>

```vue
<template>
  <div :style="{ display: 'flex' }">
    <yc-card
      :style="{ width: '360px' }"
      title="Arco Card">
      <template #extra>
        <yc-link>More</yc-link>
      </template>
      ByteDance's core product, Toutiao ("Headlines"), is a content platform in
      China and around the world. Toutiao started out as a news recommendation
      engine and gradually evolved into a platform delivering content in various
      formats.
    </yc-card>
  </div>
</template>
```

</details>
