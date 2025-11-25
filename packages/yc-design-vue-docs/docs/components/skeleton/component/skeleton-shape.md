### 图形骨架屏

图形骨架屏分为 `square` - 正方形（默认）、 `circle` - 圆形两种形状，并提供 `small`、`medium`、`large` 三种尺寸。

<div class="cell-demo vp-raw">
   <yc-skeleton>
    <yc-space size="large" >
      <yc-skeleton-shape size="small" />
      <yc-skeleton-shape />
      <yc-skeleton-shape size="large" />
      <yc-skeleton-shape
        shape="circle"
        size="small" />
      <yc-skeleton-shape shape="circle" />
      <yc-skeleton-shape
        shape="circle"
        size="large" />
    </yc-space>
  </yc-skeleton>
</div>

<details>
<summary>
 <button class="code-btn"  >
    <icon-code />
 </button>
</summary>

```vue
<template>
  <yc-skeleton>
    <yc-space size="large">
      <yc-skeleton-shape size="small" />
      <yc-skeleton-shape />
      <yc-skeleton-shape size="large" />
      <yc-skeleton-shape
        shape="circle"
        size="small" />
      <yc-skeleton-shape shape="circle" />
      <yc-skeleton-shape
        shape="circle"
        size="large" />
    </yc-space>
  </yc-skeleton>
</template>
```

</details>
