### 自定义样式

可以设置 `style` 和 `class` 来定制样式。

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
  Notification.info({
    title: 'Notification',
    content: 'This is a notification!',
    closable: true,
    style: { width: '500px' },
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
  <yc-button
    type="primary"
    @click="handleNotification">
    Open Notification
  </yc-button>
</template>

<script setup>
import { Notification } from 'yc-design-vue';
const handleNotification = () => {
  Notification.info({
    title: 'Notification',
    content: 'This is a notification!',
    closable: true,
    style: { width: '500px' },
  });
};
</script>
```

</details>
