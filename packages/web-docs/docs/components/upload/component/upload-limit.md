### 限制上传数量

通过 `limit` 限制上传的最大数量。超出后上传按钮会隐藏.

<div class="cell-demo vp-raw">
  <yc-upload
    multiple
    :limit="3" />
</div>

<details>
<summary>
 <button class="code-btn"  >
    <icon-code />
 </button>
</summary>

```vue
<template>
  <yc-upload
    multiple
    :limit="3" />
</template>
```

</details>
