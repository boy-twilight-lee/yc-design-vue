### 上传前校验

`beforeUpload` 会在每一个文件上传之前执行。如果返回 `false` 或者 `Promise.reject`， 那么将会取消当前文件的上传。

<div class="cell-demo vp-raw">
  <yc-space
    direction="vertical"
    :style="{ width: '100%' }">
    <yc-upload
      :on-before-upload="beforeUpload" />
  </yc-space>
</div>

<script setup>
import { Modal } from 'yc-design-vue';
const beforeUpload = (file) => {
  return new Promise((resolve, reject) => {
    Modal.confirm({
      title: 'beforeUpload',
      content: `确认上传 ${file.name}`,
      onOk: () => resolve(true),
      onCancel: () => reject('cancel'),
    });
  });
};
</script>

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
    <yc-upload :on-before-upload="beforeUpload" />
  </yc-space>
</template>

<script setup>
import { Modal } from 'yc-design-vue';
const beforeUpload = (file) => {
  return new Promise((resolve, reject) => {
    Modal.confirm({
      title: 'beforeUpload',
      content: `确认上传 ${file.name}`,
      onOk: () => resolve(true),
      onCancel: () => reject('cancel'),
    });
  });
};
</script>
```

</details>
