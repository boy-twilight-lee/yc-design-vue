### 图片水印

通过 `image` 设置图片水印。建议使用 2 倍或 3 倍图（支持Base64）。

<div class="cell-demo vp-raw">
  <yc-watermark
    content="yc-design"
    grayscale
    image="">
    <div style="width: 100%; height: 300px;" />
  </yc-watermark>
</div>

<details>
<summary>
 <button class="code-btn"  >
    <icon-code />
 </button>
</summary>

```vue
<template>
  <yc-watermark
    content="yc-design"
    grayscale
    image="">
    <div style="width: 100%; height: 300px;" />
  </yc-watermark>
</template>
```

</details>
