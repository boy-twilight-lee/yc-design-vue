### 搜索

通过设置 `show-search` 来使用带搜索框的穿梭框，可以自定义搜索函数。

<div class="cell-demo vp-raw">
  <yc-transfer
    show-search
    :data="data"
    :default-value="value"
    :source-input-search-props="{
      placeholder: 'source item search',
    }"
    :target-input-search-props="{
      placeholder: 'target item search',
    }" />
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
    show-search
    :data="data"
    :default-value="value"
    :source-input-search-props="{
      placeholder: 'source item search',
    }"
    :target-input-search-props="{
      placeholder: 'target item search',
    }" />
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
