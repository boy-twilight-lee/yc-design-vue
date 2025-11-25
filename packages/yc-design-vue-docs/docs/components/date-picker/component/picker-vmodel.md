### 双向绑定

通过 `v-model` 实现值的双向绑定

<div class="cell-demo vp-raw">
  <yc-space>
    <yc-date-picker
      v-model="value"
      style="width: 200px;" />
  </yc-space>
</div>

<script setup>
import { ref } from 'vue';
const value = ref(Date.now());
</script>

<details>
<summary>
 <button class="code-btn"  >
    <icon-code />
 </button>
</summary>

```vue
<template>
  <yc-space>
    <yc-date-picker
      v-model="value"
      style="width: 200px;" />
  </yc-space>
</template>

<script setup>
import { ref } from 'vue';
const value = ref(Date.now());
</script>
```

</details>
