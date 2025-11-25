### 步骤进度条

通过设置 `steps` 展示步骤进度条。

<div class="cell-demo vp-raw">
  <div :style="{ width: '50%' }">
    <yc-progress
      :steps="3"
      :percent="0.3" />
    <yc-progress
      :steps="5"
      status="warning"
      :percent="1" />
    <yc-progress
      :steps="3"
      size="small"
      :percent="0.3" />
  </div>
</div>

<script setup>
import { ref } from 'vue';
const percent = ref(0.2);
</script>

<details>
<summary>
 <button class="code-btn"  >
    <icon-code />
 </button>
</summary>

```vue
<template>
  <div :style="{ width: '50%' }">
    <yc-progress
      :steps="3"
      :percent="0.3" />
    <yc-progress
      :steps="5"
      status="warning"
      :percent="1" />
    <yc-progress
      :steps="3"
      size="small"
      :percent="0.3" />
  </div>
</template>
```

</details>
