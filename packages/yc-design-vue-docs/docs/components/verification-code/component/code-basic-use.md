### 基本使用

验证码输入框的基本用法。

<div class="cell-demo vp-raw">
  <yc-verification-code
    v-model="value"
    style="width: 300px"
    @finish="onFinish" />
</div>

<script setup>
import { ref } from 'vue';
import { Message } from 'yc-design-vue';
const value = ref('654321');
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
    v-model="value"
    style="width: 300px"
    @finish="onFinish" />
</template>

<script setup>
import { ref } from 'vue';
import { Message } from 'yc-design-vue';
const value = ref('654321');
const onFinish = (value) => Message.info(`Verification code: ${value}`);
</script>
```

</details>
