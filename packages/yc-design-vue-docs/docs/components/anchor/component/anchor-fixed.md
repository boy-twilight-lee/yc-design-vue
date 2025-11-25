### 固钉位置

使用 `affix` 组件可以让锚点固定在页面之内。

<div class="cell-demo vp-raw">
   <yc-affix :offsetTop="80" style="z-index:1001">
    <yc-anchor :style="{ backgroundColor: 'var(--color-bg-1)' }">
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
  </yc-affix>
</div>

<details>
<summary>
 <button class="code-btn"  >
    <icon-code />
 </button>
</summary>

```vue
<template>
  <yc-affix :offsetTop="80">
    <yc-anchor :style="{ backgroundColor: 'var(--color-bg-1)' }">
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
  </yc-affix>
</template>
```

</details>
