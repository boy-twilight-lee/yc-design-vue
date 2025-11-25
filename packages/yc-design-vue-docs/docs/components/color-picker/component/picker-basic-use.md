### 基本使用

基本用法

<div class="cell-demo vp-raw">
  <yc-space>
    <yc-color-picker  v-model="value" />
    <yc-color-picker defaultValue="#165DFF" showText disabledAlpha/>
  </yc-space>
</div>

<script setup>
import { ref } from 'vue';
const value = ref('#165DFF')
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
    <yc-color-picker v-model="value" />
    <yc-color-picker
      defaultValue="#165DFF"
      showText
      disabledAlpha />
  </yc-space>
</template>

<script setup>
import { ref } from 'vue';
const value = ref('#165DFF');
</script>
```

</details>
