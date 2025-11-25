### 密码模式

指定 `masked = true` 可开启密码模式

<div class="cell-demo vp-raw">
 <yc-verification-code
    defaultValue="123"
    style="width: 300px"
    masked
    @finish="onFinish" />
</div>

<script setup>
import { Message } from 'yc-design-vue';
const onFinish = (value) => Message.info(`Verification code: ${value}`);
</script>

<details>
<summary>
 <button class="code-btn"  >
    <icon-code />
 </button>
</summary>

```vue
<template>
  <yc-verification-code
    defaultValue="123"
    style="width: 300px"
    masked
    @finish="onFinish" />
</template>

<script setup>
import { Message } from 'yc-design-vue';
const onFinish = (value) => Message.info(`Verification code: ${value}`);
</script>
```

</details>
