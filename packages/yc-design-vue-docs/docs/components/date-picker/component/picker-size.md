### 尺寸

设置 `size` 可以使用四种尺寸（`mini` `small` `medium` `large`）的输入框。高度分别对应 `24px`、`28px`、`32px`、`36px`。

<div class="cell-demo vp-raw">
  <div style="margin-bottom: 20px;">
    <yc-radio-group
      v-model="size"
      type="button">
      <yc-radio value="mini">mini</yc-radio>
      <yc-radio value="small">small</yc-radio>
      <yc-radio value="medium">medium</yc-radio>
      <yc-radio value="large">large</yc-radio>
    </yc-radio-group>
  </div>
  <yc-date-picker
    :size="size"
    style="width: 254px;" />
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
  <div style="margin-bottom: 20px;">
    <yc-radio-group
      v-model="size"
      type="button">
      <yc-radio value="mini">mini</yc-radio>
      <yc-radio value="small">small</yc-radio>
      <yc-radio value="medium">medium</yc-radio>
      <yc-radio value="large">large</yc-radio>
    </yc-radio-group>
  </div>
  <yc-date-picker
    :size="size"
    style="width: 254px;" />
</template>

<script setup>
import { ref } from 'vue';
const size = ref('small');
</script>
```

</details>
