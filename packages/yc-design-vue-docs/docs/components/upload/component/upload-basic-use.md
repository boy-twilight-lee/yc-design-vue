### 基本用法

上传组件的基本用法。

<div class="cell-demo vp-raw">
   <yc-space
    direction="vertical"
    :style="{ width: '100%' }">
    <yc-upload action="/" />
    <yc-upload
      action="/"
      disabled
      style="margin-top: 40px;" />
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
    :style="{ width: '100%' }">
    <yc-upload action="/" />
    <yc-upload
      action="/"
      disabled
      style="margin-top: 40px;" />
  </yc-space>
</template>
```

</details>
