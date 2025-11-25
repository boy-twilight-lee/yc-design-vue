### 显示输入框

当设置 `show-input` 时，将显示输入框。

<div class="cell-demo vp-raw">
  <yc-space
    direction="vertical"
    size="large">
    <yc-slider
      :default-value="10"
      :style="{ width: '300px' }"
      show-input />
    <yc-slider
      :default-value="[10, 20]"
      :style="{ width: '380px' }"
      range
      show-input />
  </yc-space>
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
  <yc-space
    direction="vertical"
    size="large">
    <yc-slider
      :default-value="10"
      :style="{ width: '300px' }"
      show-input />
    <yc-slider
      :default-value="[10, 20]"
      :style="{ width: '380px' }"
      range
      show-input />
  </yc-space>
</template>
```

</details>
