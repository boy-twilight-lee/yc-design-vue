### 自定义提示

通过设置 `format-tooltip` 可以自定义提示文字。

<div class="cell-demo vp-raw">
  <yc-slider
    :min="0"
    :max="50"
    :style="{ width: '200px' }"
    :format-tooltip="formatter" />
</div>

<script setup>
const formatter = (value) => {
  return `${Math.round((value / 50) * 100)}%`;
};
</script>

<details>
<summary>
 <button class="code-btn"  >
    <icon-code />
 </button>
</summary>

```vue
<template>
  <yc-slider
    :min="0"
    :max="50"
    :style="{ width: '200px' }"
    :format-tooltip="formatter" />
</template>

<script setup>
const formatter = (value) => {
  return `${Math.round((value / 50) * 100)}%`;
};
</script>
```

</details>
