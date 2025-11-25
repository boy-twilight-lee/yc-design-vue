### 错误状态

当加载图片失败的时候显示的内容。

<div class="cell-demo vp-raw">
  <yc-space :size="20">
    <yc-image
      width="400"
      height="300"
      src="some-error.png" />
    <yc-image
      width="400"
      height="300"
      src="some-error.png"
      alt="This is a picture of humans eating ice cream. The humans on the screen are very happy just now. The ice cream is green, it seems to be flavored with matcha. The gender of the human is unknown. It has very long hair and the human hair is brown." />
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
  <yc-space :size="20">
    <yc-image
      width="400"
      height="300"
      src="some-error.png" />
    <yc-image
      width="400"
      height="300"
      src="some-error.png"
      alt="This is a picture of humans eating ice cream. The humans on the screen are very happy just now. The ice cream is green, it seems to be flavored with matcha. The gender of the human is unknown. It has very long hair and the human hair is brown." />
  </yc-space>
</template>
```

</details>
