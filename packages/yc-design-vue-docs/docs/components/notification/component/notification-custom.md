### 自定义关闭按钮

需要设置 `closable: true`，自定义元素使用 `closeIconElement`，仅图标使用 `closeIcon` (会有 hover 样式)。

<div class="cell-demo vp-raw">
  <yc-space>
    <yc-button
      type="primary"
      @click="handleNotification">
      Open Notification
    </yc-button>
    <yc-button
      type="primary"
      status="danger"
      @click="handleNotification2">
      Open Notification
    </yc-button>
  </yc-space>
</div>

<script setup>
import { h } from 'vue';
import { Notification, Button } from 'yc-design-vue';
import { IconCloseCircle } from '@arco-design/web-vue/es/icon';
const handleNotification = () => {
  Notification.info({
    title: 'Notification',
    content: 'This is a notification!',
    closable: true,
    closeIcon: h(IconCloseCircle),
  });
};
const handleNotification2 = () => {
  Notification.error({
    title: 'Notification',
    content: 'This is a notification!',
    closable: true,
    closeIconElement: h(
      Button,
      { size: 'mini' },
      {
        default: () => 'mini',
      }
    ),
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
    <yc-button
      type="primary"
      @click="handleNotification">
      Open Notification
    </yc-button>
    <yc-button
      type="primary"
      status="danger"
      @click="handleNotification2">
      Open Notification
    </yc-button>
  </yc-space>
</template>

<script setup>
import { h } from 'vue';
import { Notification, Button } from 'yc-design-vue';
import { IconCloseCircle } from '@arco-design/web-vue/es/icon';
const handleNotification = () => {
  Notification.info({
    title: 'Notification',
    content: 'This is a notification!',
    closable: true,
    closeIcon: h(IconCloseCircle),
  });
};
const handleNotification2 = () => {
  Notification.error({
    title: 'Notification',
    content: 'This is a notification!',
    closable: true,
    closeIconElement: h(
      Button,
      { size: 'mini' },
      {
        default: () => 'mini',
      }
    ),
  });
};
</script>
```

</details>
