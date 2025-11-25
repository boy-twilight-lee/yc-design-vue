### 虚拟列表

虚拟列表的使用方法。

<div class="cell-demo vp-raw">
  <yc-select
    :style="{ width: '320px' }"
    :options="options"
    :virtual-list-props="{ estimateSize: ()=> 36, count: options.length }"
    placeholder="Please select ..." />
</div>

<script setup>
const options = Array(10000)
  .fill(null)
  .map((_, index) => `Option ${index}`);
</script>

<details>
<summary>
 <button class="code-btn"  >
    <icon-code />
 </button>
</summary>

```vue
<template>
  <yc-select
    :style="{ width: '320px' }"
    :options="options"
    :virtual-list-props="{ estimateSize: () => 36, count: options.length }"
    placeholder="Please select ..." />
</template>

<script setup>
const options = Array(10000)
  .fill(null)
  .map((_, index) => `Option ${index}`);
</script>
```

</details>
