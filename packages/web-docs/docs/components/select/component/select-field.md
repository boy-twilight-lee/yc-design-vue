### 自定义字段名

可以通过 `field-names` 属性自定义 `options` 中数据的格式。

<div class="cell-demo vp-raw">
  <yc-select
    v-model="value"
    :options="options"
    :field-names="fieldNames"
    :style="{ width: '320px' }"
    placeholder="Please select ..." />
</div>

<script setup>
import { reactive, ref } from 'vue';
const value = ref('bj');
const fieldNames = { value: 'city', label: 'text' };
const options = reactive([
  {
    city: 'bj',
    text: 'Beijing',
  },
  {
    city: 'sh',
    text: 'Shanghai',
  },
  {
    city: 'gz',
    text: 'Guangzhou',
  },
  {
    city: 'cd',
    text: 'Chengdu',
  },
]);
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
    v-model="value"
    :options="options"
    :field-names="fieldNames"
    :style="{ width: '320px' }"
    placeholder="Please select ..." />
</template>

<script setup>
import { reactive, ref } from 'vue';
const value = ref('bj');
const fieldNames = { value: 'city', label: 'text' };
const options = reactive([
  {
    city: 'bj',
    text: 'Beijing',
  },
  {
    city: 'sh',
    text: 'Shanghai',
  },
  {
    city: 'gz',
    text: 'Guangzhou',
  },
  {
    city: 'cd',
    text: 'Chengdu',
  },
]);
</script>
```

</details>
