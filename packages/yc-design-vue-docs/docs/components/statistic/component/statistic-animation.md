### 数值动画

通过 `animation` 可以开启数值动画。

<div class="cell-demo vp-raw">
  <yc-statistic
    title="User Growth Rate"
    :value="50.52"
    :precision="2"
    :value-from="0"
    :start="start"
    animation>
    <template #prefix>
      <icon-arrow-rise />
    </template>
    <template #suffix>%</template>
  </yc-statistic>
  <yc-button @click="start = true">Start</yc-button>
</div>

<script setup>
import { ref } from 'vue';
const start = ref(false);
</script>

<details>
<summary>
 <button class="code-btn"  >
    <icon-code />
 </button>
</summary>

```vue
<template>
  <yc-statistic
    title="User Growth Rate"
    :value="50.52"
    :precision="2"
    :value-from="0"
    :start="start"
    animation>
    <template #prefix>
      <icon-arrow-rise />
    </template>
    <template #suffix>%</template>
  </yc-statistic>
  <yc-button @click="start = true">Start</yc-button>
</template>

<script setup>
import { ref } from 'vue';
const start = ref(false);
</script>
```

</details>
