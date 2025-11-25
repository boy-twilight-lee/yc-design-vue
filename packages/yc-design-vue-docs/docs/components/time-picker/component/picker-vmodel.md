### 双向绑定

支持 `v-model` 进行数据的双向绑定。

<div class="cell-demo vp-raw">
  <yc-time-picker
    style="width: 194px"
    v-model="value" />
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
  <yc-time-picker
    style="width: 194px"
    v-model="value" />
</template>
<script setup>
import { ref } from 'vue';
const value = ref('');
</script>
```

</details>
