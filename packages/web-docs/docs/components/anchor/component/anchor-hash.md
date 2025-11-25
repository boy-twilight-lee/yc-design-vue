### 是否改变hash

可以设置点击锚点而不改变浏览器历史。

<div class="cell-demo vp-raw">
  <yc-anchor :change-hash="false">
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
  <yc-anchor :change-hash="false">
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
