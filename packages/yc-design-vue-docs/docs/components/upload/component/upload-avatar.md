### 用户头像上传

点击上传用户头像，可使用 `beforeUpload` 限制用户上传的图片格式和大小。

<div class="cell-demo vp-raw">
  <yc-space
    direction="vertical"
    :style="{ width: '100%' }">
    <yc-upload :limit="1" list-type="picture-card"  tip="upload"/>
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
    <yc-upload
      :limit="1"
      typlist-typee="picture-card"
      tip="upload" />
  </yc-space>
</template>
```

</details>
