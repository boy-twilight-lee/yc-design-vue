### 基本用法

通知提醒框的基本用法。

<div class="cell-demo vp-raw">
  <yc-space>
    <yc-button
      type="primary"
      @click="$notification.info({
          title: 'Notification',
          content: 'This is a notification!',
        })
      ">
      Open Notification
    </yc-button>
    <yc-button @click="handleNotification"> Open Notification </yc-button>
  </yc-space>
</div>

<script setup>
import { Notification } from 'yc-design-vue';
const handleNotification = () => {
  Notification.info({
    title: 'Notification',
    content: 'This is a notification!',
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
      @click="
        $notification.info({
          title: 'Notification',
          content: 'This is a notification!',
        })
      ">
      Open Notification
    </yc-button>
    <yc-button @click="handleNotification"> Open Notification </yc-button>
  </yc-space>
</template>

<script setup>
import { Notification } from 'yc-design-vue';
const handleNotification = () => {
  Notification.info({
    title: 'Notification',
    content: 'This is a notification!',
  });
};
</script>
```

</details>
