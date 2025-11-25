### 基本用法

数据穿梭框的基本用法。

<div class="cell-demo vp-raw">
  <yc-transfer
    :data="data"
    :default-value="value" />
</div>

<script setup>
const data = Array(8)
  .fill(undefined)
  .map((_, index) => ({
    value: `option${index + 1}`,
    label: `Option ${index + 1}`,
  }));
const value = ['option1', 'option3', 'option5'];
</script>

<details>
<summary>
 <button class="code-btn"  >
    <icon-code />
 </button>
</summary>

```vue
<template>
  <yc-transfer
    :data="data"
    :default-value="value" />
</template>

<script setup>
const data = Array(8)
  .fill(undefined)
  .map((_, index) => ({
    value: `option${index + 1}`,
    label: `Option ${index + 1}`,
  }));
const value = ['option1', 'option3', 'option5'];
</script>
```

</details>
