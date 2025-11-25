### 自定义图标

设置 `icon` 来自定义图标。

<div class="cell-demo vp-rwa">
  <yc-button @click="handleClick">Info Message</yc-button>
</div>

<script setup>
import { h } from 'vue';
import { Message } from 'yc-design-vue';
import { IconFaceSmileFill } from '@arco-design/web-vue/es/icon';
const handleClick = () => {
  Message.info({
    content: 'This is an info message!',
    icon: () => h(IconFaceSmileFill),
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
  <yc-button @click="handleClick">Info Message</yc-button>
</template>

<script setup>
import { h } from 'vue';
import { Message } from 'yc-design-vue';
import { IconFaceSmileFill } from '@arco-design/web-vue/es/icon';
const handleClick = () => {
  Message.info({
    content: 'This is an info message!',
    icon: () => h(IconFaceSmileFill),
  });
};
</script>
```

</details>
