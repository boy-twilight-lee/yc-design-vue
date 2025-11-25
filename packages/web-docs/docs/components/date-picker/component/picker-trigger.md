### 自定义触发元素

自定义触发元素。

<div class="cell-demo vp-raw">
  <yc-space>
    <yc-date-picker
      style="width: 268px;"
      v-model="value">
      <yc-button>{{ value || '请选择日期' }}</yc-button>
    </yc-date-picker>
  </yc-space>
</div>

<script setup>
import { ref } from 'vue';
const value = ref();
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
      style="width: 268px;"
      v-model="value">
      <yc-button>{{ value || '请选择日期' }}</yc-button>
    </yc-date-picker>
  </yc-space>
</template>

<script setup>
import { ref } from 'vue';
const value = ref();
</script>
```

</details>
