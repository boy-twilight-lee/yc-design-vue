### 消息类型

全局提示有 6 种不同的类型，分别为：`info`、`success`、`warning`、`error`、`normal`、`loading`。

<div class="cell-demo vp-raw">
  <div>
    <yc-space>
      <yc-button @click="$message.info('This is an info message!')"
        >Info Message</yc-button
      >
      <yc-button
        @click="$message.success('This is a success message!')"
        status="success"
        >Success Message
      </yc-button>
      <yc-button
        @click="$message.warning('This is a warning message!')"
        status="warning"
        >Warning Message
      </yc-button>
      <yc-button
        @click="$message.error('This is an error message!')"
        status="danger"
        >Error Message</yc-button
      >
    </yc-space>
  </div>
  <div style="margin-top: 20px">
    <yc-space>
      <yc-button @click="$message.normal('This is a normal message!')"
        >Normal Message</yc-button
      >
      <yc-button
        @click="
            $message.normal({
              content: 'This is a normal message!',
              icon: renderIcon,
            })
        "
        >Normal Message With Icon
      </yc-button>
      <yc-button
        @click="$message.loading('This is a loading message!')"
        status="primary"
        >Loading Message
      </yc-button>
    </yc-space>
  </div>
</div>

<script setup>
import { h } from 'vue';
import { IconExclamationCircleFill } from '@arco-design/web-vue/es/icon';
const renderIcon = h(IconExclamationCircleFill);
</script>

<details>
<summary>
 <button class="code-btn"  >
    <icon-code />
 </button>
</summary>

```vue
<template>
  <div>
    <yc-space>
      <yc-button @click="$message.info('This is an info message!')"
        >Info Message</yc-button
      >
      <yc-button
        @click="$message.success('This is a success message!')"
        status="success"
        >Success Message
      </yc-button>
      <yc-button
        @click="$message.warning('This is a warning message!')"
        status="warning"
        >Warning Message
      </yc-button>
      <yc-button
        @click="$message.error('This is an error message!')"
        status="danger"
        >Error Message</yc-button
      >
    </yc-space>
  </div>
  <div style="margin-top: 20px">
    <yc-space>
      <yc-button @click="$message.normal('This is a normal message!')"
        >Normal Message</yc-button
      >
      <yc-button
        @click="
          $message.normal({
            content: 'This is a normal message!',
            icon: renderIcon,
          })
        "
        >Normal Message With Icon
      </yc-button>
      <yc-button
        @click="$message.loading('This is a loading message!')"
        status="primary"
        >Loading Message
      </yc-button>
    </yc-space>
  </div>
</template>

<script setup>
import { h } from 'vue';
import { IconExclamationCircleFill } from '/es/icon';
const renderIcon = h(IconExclamationCircleFill);
</script>
```

</details>
