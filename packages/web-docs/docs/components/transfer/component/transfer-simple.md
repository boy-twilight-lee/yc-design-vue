### 简单模式

通过设置 `simple` 来开启简单模式，点击选项即可移动。

<div class="cell-demo vp-raw">
  <yc-transfer
    :data="data"
    :default-value="value"
    simple />
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
    :default-value="value"
    simple />
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
