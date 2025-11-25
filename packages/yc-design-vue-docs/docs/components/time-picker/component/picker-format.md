### 定制格式

通过设置 `format`，可以定制需要显示的时、分、秒。

<div class="cell-demo vp-raw">
  <yc-time-picker
    format="HH:mm"
    :defaultValue="defaultValue"
    style="width: 130px;" />
</div>

<script setup>
import { ref } from 'vue';
const defaultValue = ref('09:24');
</script>

<details>
<summary>
 <button class="code-btn"  >
    <icon-code />
 </button>
</summary>

```vue
<template>
  <yc-time-picker
    format="HH:mm"
    :defaultValue="defaultValue"
    style="width: 130px;" />
</template>

<script setup>
import { ref } from 'vue';
const defaultValue = ref('09:24');
</script>
```

</details>
