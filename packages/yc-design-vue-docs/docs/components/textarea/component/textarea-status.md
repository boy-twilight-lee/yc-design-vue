### 文本域状态

文本域可以设置禁用和错误状态。

<div class="cell-demo vp-raw">
  <yc-space
    direction="vertical"
    size="large"
    style="width: 100%">
    <yc-textarea
      placeholder="Disabled status"
      disabled />
    <yc-textarea
      placeholder="Error status"
      error />
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
  <yc-space
    direction="vertical"
    size="large"
    style="width: 100%">
    <yc-textarea
      placeholder="Disabled status"
      disabled />
    <yc-textarea
      placeholder="Error status"
      error />
  </yc-space>
</template>
```

</details>
