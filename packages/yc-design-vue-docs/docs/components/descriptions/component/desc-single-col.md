### 单列样式

单列的描述列表样式。

<div class="cell-demo vp-raw">
  <yc-radio-group
    type="button"
    v-model="size">
    <yc-radio value="mini">mini</yc-radio>
    <yc-radio value="small">small</yc-radio>
    <yc-radio value="medium">medium</yc-radio>
    <yc-radio value="large">large</yc-radio>
  </yc-radio-group>
  <yc-descriptions
    style="margin-top: 20px"
    :data="data"
    :size="size"
    title="User Info"
    :column="1" />
</div>

<script setup>
import { ref } from 'vue';
const size = ref('medium');
const data = [
  {
    label: 'Name',
    value: 'Socrates',
  },
  {
    label: 'Mobile',
    value: '123-1234-1234',
  },
  {
    label: 'Residence',
    value: 'Beijing',
  },
  {
    label: 'Hometown',
    value: 'Beijing',
  },
  {
    label: 'Address',
    value: 'Yingdu Building, Zhichun Road, Beijing',
  },
];
</script>

<details>
<summary>
 <button class="code-btn"  >
    <icon-code />
 </button>
</summary>

```vue
<template>
  <yc-radio-group
    type="button"
    v-model="size">
    <yc-radio value="mini">mini</yc-radio>
    <yc-radio value="small">small</yc-radio>
    <yc-radio value="medium">medium</yc-radio>
    <yc-radio value="large">large</yc-radio>
  </yc-radio-group>
  <yc-descriptions
    style="margin-top: 20px"
    :data="data"
    :size="size"
    title="User Info"
    :column="1" />
</template>

<script setup>
import { ref } from 'vue';
const size = ref('medium');
const data = [
  {
    label: 'Name',
    value: 'Socrates',
  },
  {
    label: 'Mobile',
    value: '123-1234-1234',
  },
  {
    label: 'Residence',
    value: 'Beijing',
  },
  {
    label: 'Hometown',
    value: 'Beijing',
  },
  {
    label: 'Address',
    value: 'Yingdu Building, Zhichun Road, Beijing',
  },
];
</script>
```

</details>
