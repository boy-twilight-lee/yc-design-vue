### 密码输入框

用于输入密码。

<div class="cell-demo vp-raw">
  <yc-space
    direction="vertical"
    size="large">
    <yc-switch v-model="visibility" />
    <yc-input-password
      v-model:visibility="visibility"
      placeholder="Please enter something"
      :style="{ width: '320px' }"
      :defaultVisibility="false"
      allow-clear />
  </yc-space>
</div>

<script setup>
import { ref } from 'vue';
const visibility = ref(true);
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
    <yc-switch v-model="visibility" />
    <yc-input-password
      v-model:visibility="visibility"
      placeholder="Please enter something"
      :style="{ width: '320px' }"
      :defaultVisibility="false"
      allow-clear />
  </yc-space>
</template>

<script setup>
import { ref } from 'vue';
const visibility = ref(false);
</script>
```

</details>
