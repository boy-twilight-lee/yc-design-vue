### 更新通知内容

通过指定参数 `id`，可以更新已经存在的通知提醒框。

<div class="cell-demo vp-raw">
  <yc-button
    type="primary"
    @click="handleNotification">
    Open Notification
  </yc-button>
</div>

<script setup>
import { Notification } from 'yc-design-vue';
const handleNotification = () => {
  Notification.warning({
    id: 'your_id',
    title: 'Ready to update',
    content: 'Will update after 2 seconds...',
  });
  setTimeout(() => {
    Notification.success({
      id: 'your_id',
      title: 'Success',
      content: 'Update success!',
    });
  }, 2000);
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
  <yc-button
    type="primary"
    @click="handleNotification">
    Open Notification
  </yc-button>
</template>

<script setup>
import { Notification } from 'yc-design-vue';
const handleNotification = () => {
  Notification.warning({
    id: 'your_id',
    title: 'Ready to update',
    content: 'Will update after 2 seconds...',
  });
  setTimeout(() => {
    Notification.success({
      id: 'your_id',
      title: 'Success',
      content: 'Update success!',
    });
  }, 2000);
};
</script>
```

</details>
