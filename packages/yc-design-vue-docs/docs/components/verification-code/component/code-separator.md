### 自定义分隔符

指定 `separator` 可以自定义渲染分隔符。

<div class="cell-demo vp-raw">
  <yc-verification-code
    style="width: 400px"
    :length="9"
    :separator="(index) => ((index + 1) % 3 || index > 7 ? null : '-')"
    @finish="(value) => Message.info(`Verification code: ${value}`)" />
</div>

<script setup>
import { Message } from 'yc-design-vue';
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
    style="width: 400px"
    :length="9"
    :separator="(index) => ((index + 1) % 3 || index > 7 ? null : '-')"
    @finish="(value) => Message.info(`Verification code: ${value}`)" />
</template>

<script setup>
import { Message } from 'yc-design-vue';
</script>
```

</details>
