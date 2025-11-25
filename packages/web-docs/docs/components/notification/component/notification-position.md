### 全局提示的位置

通知提醒框有 4 种不同的弹出位置，分别为：`左上角`、 `右上角 (默认)`、 `左下角`、 `右下角`、 。

<div class="cell-demo vp-raw">
  <yc-space>
    <yc-button
      type="primary"
      @click="handleNotification">
      Top Right
    </yc-button>
    <yc-button
      type="primary"
      @click="handleNotificationTopLeft">
      Top Left
    </yc-button>
    <yc-button
      type="primary"
      @click="handleNotificationBottomRight">
      Bottom Right
    </yc-button>
    <yc-button
      type="primary"
      @click="handleNotificationBottomLeft">
      Bottom Left
    </yc-button>
  </yc-space>
</div>

<script setup>
import { Notification } from 'yc-design-vue';
const handleNotification = () => {
  Notification.info({
    title: 'Title',
    content: 'This is a Notification!',
  });
};

const handleNotificationTopLeft = () => {
  Notification.info({
    title: 'Title',
    content: 'This is a Notification!',
    position: 'topLeft',
  });
};

const handleNotificationBottomRight = () => {
  Notification.info({
    title: 'Title',
    content: 'This is a Notification!',
    position: 'bottomRight',
  });
};

const handleNotificationBottomLeft = () => {
  Notification.info({
    title: 'Title',
    content: 'This is a Notification!',
    position: 'bottomLeft',
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
      Top Right
    </yc-button>
    <yc-button
      type="primary"
      @click="handleNotificationTopLeft">
      Top Left
    </yc-button>
    <yc-button
      type="primary"
      @click="handleNotificationBottomRight">
      Bottom Right
    </yc-button>
    <yc-button
      type="primary"
      @click="handleNotificationBottomLeft">
      Bottom Left
    </yc-button>
  </yc-space>
</template>

<script setup>
import { Notification } from 'yc-design-vue';
const handleNotification = () => {
  Notification.info({
    title: 'Title',
    content: 'This is a Notification!',
  });
};

const handleNotificationTopLeft = () => {
  Notification.info({
    title: 'Title',
    content: 'This is a Notification!',
    position: 'topLeft',
  });
};

const handleNotificationBottomRight = () => {
  Notification.info({
    title: 'Title',
    content: 'This is a Notification!',
    position: 'bottomRight',
  });
};

const handleNotificationBottomLeft = () => {
  Notification.info({
    title: 'Title',
    content: 'This is a Notification!',
    position: 'bottomLeft',
  });
};
</script>
```

</details>
