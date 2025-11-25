### 基本用法

将一个面板分割成两个可以调整宽度或高度的两部分。用 `direction` 控制分割方向。

<div class="cell-demo vp-raw">
  <div>
    <yc-split
      :style="{
        height: '200px',
        width: '100%',
        minWidth: '500px',
        border: '1px solid var(--color-border)',
      }"
      v-model:size="size"
      min="80px">
      <template #first>
        <yc-typography-paragraph>Left</yc-typography-paragraph>
      </template>
      <template #second>
        <yc-typography-paragraph>Right</yc-typography-paragraph>
      </template>
    </yc-split>
  </div>
</div>

<script setup>
import { ref } from 'vue';
const size = ref(0.5);
</script>

<details>
<summary>
 <button class="code-btn"  >
    <icon-code />
 </button>
</summary>

```vue
<template>
  <div>
    <yc-split
      :style="{
        height: '200px',
        width: '100%',
        minWidth: '500px',
        border: '1px solid var(--color-border)',
      }"
      v-model:size="size"
      min="80px">
      <template #first>
        <yc-typography-paragraph>Left</yc-typography-paragraph>
      </template>
      <template #second>
        <yc-typography-paragraph>Right</yc-typography-paragraph>
      </template>
    </yc-split>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const size = ref(0.5);
</script>
```

</details>
