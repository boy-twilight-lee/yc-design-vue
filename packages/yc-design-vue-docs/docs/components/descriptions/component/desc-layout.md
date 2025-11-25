### 布局模式

有 `水平排列` 、`垂直排列` 、`行内水平排列` 、`行内垂直排列` 四种布局模式。

<div class="cell-demo vp-raw">
  <yc-radio-group
    type="button"
    v-model="size">
    <yc-radio value="mini">mini</yc-radio>
    <yc-radio value="small">small</yc-radio>
    <yc-radio value="medium">medium</yc-radio>
    <yc-radio value="large">large</yc-radio>
  </yc-radio-group>
  <div style="margin-top: 20px">
    <yc-descriptions
      :data="data"
      :size="size"
      title="User Info (horizontal)"
      bordered />
    <yc-descriptions
      :data="data"
      :size="size"
      title="User Info (inline-horizontal)"
      layout="inline-horizontal"
      bordered />
    <yc-descriptions
      :data="data"
      :size="size"
      title="User Info (vertical)"
      layout="vertical"
      bordered />
    <yc-descriptions
      :data="data"
      :size="size"
      title="User Info (inline-vertical)"
      layout="inline-vertical"
      bordered />
  </div>
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
  <div style="margin-top: 20px">
    <yc-descriptions
      :data="data"
      :size="size"
      title="User Info (horizontal)"
      bordered />
    <yc-descriptions
      :data="data"
      :size="size"
      title="User Info (inline-horizontal)"
      layout="inline-horizontal"
      bordered />
    <yc-descriptions
      :data="data"
      :size="size"
      title="User Info (vertical)"
      layout="vertical"
      bordered />
    <yc-descriptions
      :data="data"
      :size="size"
      title="User Info (inline-vertical)"
      layout="inline-vertical"
      bordered />
  </div>
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
