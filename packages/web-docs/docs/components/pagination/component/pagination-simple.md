### 简洁模式

通过设置 `simple` 属性开启简洁模式。

<div class="cell-demo vp-raw">
  <yc-pagination
    :total="200"
    simple />
</div>

<script setup>
import { ref } from 'vue';
const size = ref('medium');
</script>

<details>
<summary>
 <button class="code-btn"  >
    <icon-code />
 </button>
</summary>

```vue
<template>
  <yc-pagination
    :total="200"
    simple />
</template>
```

</details>
