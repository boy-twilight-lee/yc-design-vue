### 范围选择

通过设置 `range` 可开启范围选择，此时 `modelValue` 为数组。

<div class="cell-demo vp-raw">
  <yc-slider
    v-model="value"
    :style="{ width: '300px' }"
    range />
</div>

<script setup>
import { ref } from 'vue';
const value = ref([5, 10]);
</script>

<details>
<summary>
 <button class="code-btn"  >
    <icon-code />
 </button>
</summary>

```vue
<template>
  <yc-slider
    v-model="value"
    :style="{ width: '300px' }"
    range />
</template>

<script setup>
import { ref } from 'vue';
const value = ref([5, 10]);
</script>
```

</details>
