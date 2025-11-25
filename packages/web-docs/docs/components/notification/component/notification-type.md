### 消息类型

通知提醒框的消息类型。

<div class="cell-demo vp-raw">
  <yc-space>
    <yc-button
      type="primary"
      @click="$notification.info('This is an info message!')">
      Info
    </yc-button>
    <yc-button
      type="primary"
      status="success"
      @click="$notification.success('This is a success message!')">
      Success
    </yc-button>
    <yc-button
      type="primary"
      status="warning"
      @click="$notification.warning('This is a warning message!')">
      Warning
    </yc-button>
    <yc-button
      type="primary"
      status="danger"
      @click="$notification.error('This is an error message!')">
      Error
    </yc-button>
    <yc-button
      type="secondary"
      @click="$notification.info({
            content: 'This is an error message!',
            showIcon: false,
          })
      ">
      Normal
    </yc-button>
  </yc-space>
</div>

<script setup></script>

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
      @click="$notification.info('This is an info message!')">
      Info
    </yc-button>
    <yc-button
      type="primary"
      status="success"
      @click="$notification.success('This is a success message!')">
      Success
    </yc-button>
    <yc-button
      type="primary"
      status="warning"
      @click="$notification.warning('This is a warning message!')">
      Warning
    </yc-button>
    <yc-button
      type="primary"
      status="danger"
      @click="$notification.error('This is an error message!')">
      Error
    </yc-button>
    <yc-button
      type="secondary"
      @click="
        $notification.info({
          content: 'This is an error message!',
          showIcon: false,
        })
      ">
      Normal
    </yc-button>
  </yc-space>
</template>

<script setup></script>
```

</details>
