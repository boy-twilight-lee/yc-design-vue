### 更新内容

更新消息内容，通过设置 `duration` 属性可以重置定时器。

<div class="cell-demo vp-raw">
  <yc-button @click="handleClick">Update Info Message</yc-button>
</div>

<script setup>
import { ref } from 'vue';
import { Message } from 'yc-design-vue';
const index = ref(0);
const handleClick = () => {
  Message.info({
    id: 'myInfo',
    content: `This is an info message ${index.value++}`,
    duration: 2000,
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
  <yc-button @click="handleClick">Update Info Message</yc-button>
</template>

<script setup>
import { ref } from 'vue';
import { Message } from 'yc-design-vue';
const index = ref(0);
const handleClick = () => {
  Message.info({
    id: 'myInfo',
    content: `This is an info message ${index.value++}`,
    duration: 2000,
  });
};
</script>
```

</details>
