### 基本用法

输入框的基本用法。

<div class="cell-demo vp-raw">
  <yc-space
    direction="vertical"
    size="large">
    <yc-input-number
      v-model="value"
      :style="{ width: '320px' }"
      placeholder="Please Enter"
      class="input-demo"
      :min="10"
      :max="100" />
    <yc-input-number
      :style="{ width: '320px' }"
      placeholder="Please Enter"
      class="input-demo"
      :min="10"
      :max="100" />
    <yc-input-number
      :style="{ width: '320px' }"
      placeholder="Please Enter"
      :default-value="500"
      class="input-demo"
      disabled />
  </yc-space>
</div>

<script setup>
import { ref } from 'vue';
const value = ref(15);
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
    <yc-input-number
      v-model="value"
      :style="{ width: '320px' }"
      placeholder="Please Enter"
      class="input-demo"
      :min="10"
      :max="100" />
    <yc-input-number
      :style="{ width: '320px' }"
      placeholder="Please Enter"
      class="input-demo"
      :min="10"
      :max="100" />
    <yc-input-number
      :style="{ width: '320px' }"
      placeholder="Please Enter"
      :default-value="500"
      class="input-demo"
      disabled />
  </yc-space>
</template>

<script setup>
import { ref } from 'vue';
const value = ref(15);
</script>
```

</details>
