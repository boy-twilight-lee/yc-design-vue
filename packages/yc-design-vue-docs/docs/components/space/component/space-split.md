### 分隔符

为相邻子元素设置分隔符。

<div class="cell-demo vp-raw">
  <yc-space>
    <template #split>
      <yc-divider direction="vertical" />
    </template>
    <yc-tag v-if="false" color='arcoblue'>Tag</yc-tag>
    <yc-button type="primary">Item1</yc-button>
    <yc-button type="primary">Item2</yc-button>
    <yc-switch defaultChecked />
  </yc-space>
</div>

<script setup>
import { ref, reactive } from 'vue';
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
  <yc-space>
    <template #split>
      <yc-divider direction="vertical" />
    </template>
    <yc-tag
      v-if="false"
      color="arcoblue"
      >Tag</yc-tag
    >
    <yc-button type="primary">Item1</yc-button>
    <yc-button type="primary">Item2</yc-button>
    <yc-switch defaultChecked />
  </yc-space>
</template>

<script setup>
import { ref, reactive } from 'vue';
const align = ref('center');
</script>
```

</details>
