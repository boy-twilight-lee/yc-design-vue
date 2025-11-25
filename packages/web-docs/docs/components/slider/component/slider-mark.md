### 添加文本标签

通过设置 `marks` 可以添加文本标签。

<div class="cell-demo vp-raw">
  <yc-slider
    :default-value="5"
    :style="{ width: '300px' }"
    :max="15"
    :marks="marks" />
</div>

<script setup>
const marks = {
  0: '0km',
  5: '5km',
  10: '10km',
  15: '15km',
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
    :default-value="5"
    :style="{ width: '300px' }"
    :max="15"
    :marks="marks" />
</template>

<script setup>
const marks = {
  0: '0km',
  5: '5km',
  10: '10km',
  15: '15km',
};
</script>
```

</details>
