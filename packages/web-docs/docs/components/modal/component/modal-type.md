### 消息提示

有 `info`、`success`、`warning`、`error`四种类型的消息提示，仅提供一个确认按钮用于关闭消息提示对话框。
消息默认会默认开启 `simple` 和 `hideCancel`，如果想要取消可以再次设置。

<div class="cell-demo vp-raw">
  <yc-space>
    <yc-button @click="handleClickInfo">Info</yc-button>
    <yc-button
      @click="handleClickSuccess"
      status="success"
      >Success</yc-button
    >
    <yc-button
      @click="handleClickWarning"
      status="warning"
      >Warning</yc-button
    >
    <yc-button
      @click="handleClickError"
      status="danger"
      >Error</yc-button
    >
  </yc-space>
</div>

<script setup>
import { Modal } from 'yc-design-vue';
const handleClickInfo = () => {
  Modal.info({
    title: 'Info Notification',
    content:
      'This is an info description which directly indicates a neutral informative change or action.',
  });
};
const handleClickSuccess = () => {
  Modal.success({
    title: 'Success Notification',
    content: 'This is a success notification',
  });
};
const handleClickWarning = () => {
  Modal.warning({
    title: 'Warning Notification',
    content:
      'This is a warning description which directly indicates a warning that might need attention.',
  });
};
const handleClickError = () => {
  Modal.error({
    title: 'Error Notification',
    content:
      'This is an error description which directly indicates a dangerous or potentially negative action.',
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
  <yc-space>
    <yc-button @click="handleClickInfo">Info</yc-button>
    <yc-button
      @click="handleClickSuccess"
      status="success"
      >Success</yc-button
    >
    <yc-button
      @click="handleClickWarning"
      status="warning"
      >Warning</yc-button
    >
    <yc-button
      @click="handleClickError"
      status="danger"
      >Error</yc-button
    >
  </yc-space>
</template>

<script setup>
import { Modal } from 'yc-design-vue';
const handleClickInfo = () => {
  Modal.info({
    title: 'Info Notification',
    content:
      'This is an info description which directly indicates a neutral informative change or action.',
  });
};
const handleClickSuccess = () => {
  Modal.success({
    title: 'Success Notification',
    content: 'This is a success notification',
  });
};
const handleClickWarning = () => {
  Modal.warning({
    title: 'Warning Notification',
    content:
      'This is a warning description which directly indicates a warning that might need attention.',
  });
};
const handleClickError = () => {
  Modal.error({
    title: 'Error Notification',
    content:
      'This is an error description which directly indicates a dangerous or potentially negative action.',
  });
};
</script>
```

</details>
