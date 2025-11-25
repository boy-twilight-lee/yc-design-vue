### 自适应高度

通过设置 `auto-size`，可以让文本框自适应输入内容。

<div class="cell-demo vp-raw">
   <yc-textarea
    default-value="This is the contents of the textarea. This is the contents of the textarea. This is the contents of the textarea."
    auto-size />
  <yc-textarea
    default-value="This is the contents of the textarea. This is the contents of the textarea. This is the contents of the textarea."
    :auto-size="{
      minRows: 2,
      maxRows: 5,
    }"
    style="margin-top: 20px" />
</div>

<details>
<summary>
 <button class="code-btn"  >
    <icon-code />
 </button>
</summary>

```vue
<template>
  <yc-textarea
    default-value="This is the contents of the textarea. This is the contents of the textarea. This is the contents of the textarea."
    auto-size />
  <yc-textarea
    default-value="This is the contents of the textarea. This is the contents of the textarea. This is the contents of the textarea."
    :auto-size="{
      minRows: 2,
      maxRows: 5,
    }"
    style="margin-top: 20px" />
</template>
```

</details>
