### 基本用法

简单地成组展示多个只读字段，一般用于详情页的信息。

<div class="cell-demo vp-raw">
  <yc-space
    direction="vertical"
    size="large"
    fill>
    <yc-descriptions
      :data="data"
      title="User Info"
      layout="inline-horizontal" />
    <yc-descriptions
      title="User Info"
      :column="{ xs: 1, md: 3, lg: 4 }">
      <yc-descriptions-item
        v-for="item of data"
        :label="item.label"
        :span="item.span ?? 1">
        <yc-tag>{{ item.value }}</yc-tag>
      </yc-descriptions-item>
    </yc-descriptions>
  </yc-space>
</div>

<script setup>
const data = [
  {
    label: 'Name',
    value: 'Socrates',
    span: 3,
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
  <yc-space
    direction="vertical"
    size="large"
    fill>
    <yc-descriptions
      :data="data"
      title="User Info"
      layout="inline-horizontal" />
    <yc-descriptions
      title="User Info"
      :column="{ xs: 1, md: 3, lg: 4 }">
      <yc-descriptions-item
        v-for="item of data"
        :label="item.label"
        :span="item.span ?? 1">
        <yc-tag>{{ item.value }}</yc-tag>
      </yc-descriptions-item>
    </yc-descriptions>
  </yc-space>
</template>

<script setup>
const data = [
  {
    label: 'Name',
    value: 'Socrates',
    span: 3,
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
