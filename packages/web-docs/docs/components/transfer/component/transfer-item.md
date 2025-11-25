### 自定义选项渲染

通过 `item` 插槽自定义选项的渲染内容。

<div class="cell-demo vp-raw">
  <yc-transfer
    :data="data"
    :default-value="value">
    <template #item="{ label }">
      <icon-up />
      {{ label }}
    </template>
  </yc-transfer>
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
    :default-value="value">
    <template #item="{ label }">
      <icon-up />
      {{ label }}
    </template>
  </yc-transfer>
</template>

<script setup>
const data = Array(8)
  .fill(undefined)
  .map((_, index) => {
    return {
      value: `option${index + 1}`,
      label: `Option ${index + 1}`,
      disabled: index === 1,
    };
  });
const value = ['option1', 'option3', 'option5'];
</script>
```

</details>
