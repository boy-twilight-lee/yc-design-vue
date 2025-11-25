### 对齐

内置 4 种对齐方式，分别为 `start` 、`center` 、`end` 、`baseline`，在水平模式下默认为 `center`。

<div class="cell-demo vp-raw">
  <div>
    <div style="marginBottom: 20px">
      <yc-radio-group v-model="align" type='button'>
        <yc-radio value="start">start</yc-radio>
        <yc-radio value="center">center</yc-radio>
        <yc-radio value="end">end</yc-radio>
        <yc-radio value="baseline">baseline</yc-radio>
      </yc-radio-group>
    </div>
    <yc-space :align="align" style="backgroundColor: var(--color-fill-2);padding: 10px;">
      <yc-typography-text>Space:</yc-typography-text>
      <yc-button type="primary">Item2</yc-button>
      <yc-card title='Card'>
        Card content
      </yc-card>
    </yc-space>
  </div>
</div>

<script setup>
import { ref } from 'vue';
const align = ref('center');
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
    <div style="marginBottom: 20px">
      <yc-radio-group
        v-model="align"
        type="button">
        <yc-radio value="start">start</yc-radio>
        <yc-radio value="center">center</yc-radio>
        <yc-radio value="end">end</yc-radio>
        <yc-radio value="baseline">baseline</yc-radio>
      </yc-radio-group>
    </div>
    <yc-space
      :align="align"
      style="backgroundColor: var(--color-fill-2);padding: 10px;">
      <yc-typography-text>Space:</yc-typography-text>
      <yc-button type="primary">Item2</yc-button>
      <yc-card title="Card"> Card content </yc-card>
    </yc-space>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const align = ref('center');
</script>
```

</details>
