### 剩余进度条的颜色

可以通过 `trackColor` 设置剩余进度条的颜色

<div class="cell-demo vp-raw">
  <div :style="{ width: '50%' }">
    <yc-progress
      :percent="0.4"
      trackColor="var(--color-primary-light-1)"
      style="margin-bottom: 20px;" />
    <yc-progress
      :percent="0.4"
      :steps="4"
      trackColor="var(--color-primary-light-1)"
      style="margin-bottom: 20px;" />
    <yc-progress
      :percent="0.4"
      type="circle"
      trackColor="var(--color-primary-light-1)"
      style="margin-bottom: 20px;" />
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
      :percent="0.4"
      trackColor="var(--color-primary-light-1)"
      style="margin-bottom: 20px;" />
    <yc-progress
      :percent="0.4"
      :steps="4"
      trackColor="var(--color-primary-light-1)"
      style="margin-bottom: 20px;" />
    <yc-progress
      :percent="0.4"
      type="circle"
      trackColor="var(--color-primary-light-1)"
      style="margin-bottom: 20px;" />
  </div>
</template>
```

</details>
