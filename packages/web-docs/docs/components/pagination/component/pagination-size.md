### 分页尺寸

分页分为 `mini`、`small`、`medium`、`large` 四种尺寸。

<div class="cell-demo vp-raw">
  <yc-space
    direction="vertical"
    size="large">
    <yc-radio-group
      type="button"
      v-model="size">
      <yc-radio value="mini">Mini</yc-radio>
      <yc-radio value="small">Small</yc-radio>
      <yc-radio value="medium">Medium</yc-radio>
      <yc-radio value="large">Large</yc-radio>
    </yc-radio-group>
    <yc-pagination
      :total="50"
      :size="size"
      show-total
      show-jumper
      show-page-size />
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
      <yc-radio value="mini">Mini</yc-radio>
      <yc-radio value="small">Small</yc-radio>
      <yc-radio value="medium">Medium</yc-radio>
      <yc-radio value="large">Large</yc-radio>
    </yc-radio-group>
    <yc-pagination
      :total="50"
      :size="size"
      show-total
      show-jumper
      show-page-size />
  </yc-space>
</template>

<script setup>
import { ref } from 'vue';
const size = ref('medium');
</script>
```

</details>
