### 锚点滚动偏移量

可以设置 `boundary` 来定制锚点滚动偏移量。

<div class="cell-demo vp-raw">
  <yc-anchor boundary="center">
    <yc-anchor-link href="#basic">Basic</yc-anchor-link>
    <yc-anchor-link href="#line-less">LineLess Mode</yc-anchor-link>
    <yc-anchor-link href="#affix">
      Affix
      <template #sublist>
        <yc-anchor-link href="#boundary">Scroll Boundary</yc-anchor-link>
        <yc-anchor-link href="#hash">Hash mode</yc-anchor-link>
      </template>
    </yc-anchor-link>
  </yc-anchor>
</div>

<details>
<summary>
 <button class="code-btn"  >
    <icon-code />
 </button>
</summary>

```vue
<template>
  <yc-anchor boundary="center">
    <yc-anchor-link href="#basic">Basic</yc-anchor-link>
    <yc-anchor-link href="#line-less">LineLess Mode</yc-anchor-link>
    <yc-anchor-link href="#affix">
      Affix
      <template #sublist>
        <yc-anchor-link href="#boundary">Scroll Boundary</yc-anchor-link>
        <yc-anchor-link href="#hash">Hash mode</yc-anchor-link>
      </template>
    </yc-anchor-link>
  </yc-anchor>
</template>
```

</details>
