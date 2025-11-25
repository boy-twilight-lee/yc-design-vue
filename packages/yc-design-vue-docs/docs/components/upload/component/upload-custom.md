### 自定义上传节点

可以通过插槽 `upload-button` 传入自定义内容作为文件上传的触发节点。

<div class="cell-demo vp-raw">
  <yc-upload action="/">
    <template #upload-button>
      <div
        style="
        background-color: var(--color-fill-2);
        color: var(--color-text-1);
        border: 1px dashed var(--color-fill-4);
        height: 158px;
        width: 380px;
        border-radius: 2;
        line-height: 158px;
        text-align: center;">
        <div>
          Drag the file here or
          <span style="color: #3370FF"> Click to upload</span>
        </div>
      </div>
    </template>
  </yc-upload>
</div>

<details>
<summary>
 <button class="code-btn"  >
    <icon-code />
 </button>
</summary>

```vue
<template>
  <yc-upload action="/">
    <template #upload-button>
      <div
        style="
        background-color: var(--color-fill-2);
        color: var(--color-text-1);
        border: 1px dashed var(--color-fill-4);
        height: 158px;
        width: 380px;
        border-radius: 2;
        line-height: 158px;
        text-align: center;">
        <div>
          Drag the file here or
          <span style="color: #3370FF"> Click to upload</span>
        </div>
      </div>
    </template>
  </yc-upload>
</template>
```

</details>
