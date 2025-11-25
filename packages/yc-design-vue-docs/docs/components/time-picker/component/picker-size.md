### 尺寸

有四种尺寸可供选择。

<div class="cell-demo vp-raw">
  <div style="marginBottom: 20px">
    <yc-radio-group
      v-model="size"
      type="button">
      <yc-radio value="mini">mini</yc-radio>
      <yc-radio value="small">small</yc-radio>
      <yc-radio value="medium">medium</yc-radio>
      <yc-radio value="large">large</yc-radio>
    </yc-radio-group>
  </div>
  <yc-time-picker
    style="width: 194px;"
    :size="size" />
</div>

<script setup>
import { ref } from 'vue';
const size = ref('small');
</script>

<details>
<summary>
 <button class="code-btn"  >
    <icon-code />
 </button>
</summary>

```vue
<template>
  <div style="marginBottom: 20px">
    <yc-radio-group
      v-model="size"
      type="button">
      <yc-radio value="mini">mini</yc-radio>
      <yc-radio value="small">small</yc-radio>
      <yc-radio value="medium">medium</yc-radio>
      <yc-radio value="large">large</yc-radio>
    </yc-radio-group>
  </div>
  <yc-time-picker
    style="width: 194px;"
    :size="size" />
</template>
<script setup>
import { ref } from 'vue';
const size = ref('small');
</script>
```

</details>
