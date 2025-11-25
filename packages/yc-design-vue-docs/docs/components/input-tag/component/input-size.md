### 输入框尺寸

输入框分为 `mini`、`small`、`medium`、`large` 四种尺寸。

<div class="cell-demo vp-raw">
  <yc-space
    direction="vertical"
    size="large">
    <yc-radio-group
      type="button"
      v-model="size">
      <yc-radio value="mini">mini</yc-radio>
      <yc-radio value="small">small</yc-radio>
      <yc-radio value="medium">medium</yc-radio>
      <yc-radio value="large">large</yc-radio>
    </yc-radio-group>
    <yc-input-tag
      :default-value="['one']"
      :style="{ width: '320px' }"
      placeholder="Please enter something"
      :size="size"
      allow-clear />
  </yc-space>
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
  <yc-space
    direction="vertical"
    size="large">
    <yc-radio-group
      type="button"
      v-model="size">
      <yc-radio value="mini">mini</yc-radio>
      <yc-radio value="small">small</yc-radio>
      <yc-radio value="medium">medium</yc-radio>
      <yc-radio value="large">large</yc-radio>
    </yc-radio-group>
    <yc-input-tag
      :default-value="['one']"
      :style="{ width: '320px' }"
      placeholder="Please enter something"
      :size="size"
      allow-clear />
  </yc-space>
</template>

<script setup>
import { ref } from 'vue';
const size = ref('medium');
</script>
```

</details>
