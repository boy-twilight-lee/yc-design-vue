### 自定义开关的值

通过 `checked-value` 和 `unchecked-value` 可以自定义开关的值。

<div class="cell-demo vp-raw">
  <yc-space
    direction="vertical"
    size="large">
    <yc-switch
      v-model="value"
      checked-value="yes"
      unchecked-value="no" />
    <div>Current Value: {{ value }}</div>
  </yc-space>
</div>

<script setup>
import { ref } from 'vue';
const value = ref('');
</script>

<details>
<summary>
 <button class="code-btn"  >
    <icon-code />
 </button>
</summary>

```vue
<template>
  <yc-space
    direction="vertical"
    size="large">
    <yc-switch
      v-model="value"
      checked-value="yes"
      unchecked-value="no" />
    <div>Current Value: {{ value }}</div>
  </yc-space>
</template>

<script setup>
import { ref } from 'vue';
const value = ref('');
</script>
```

</details>
