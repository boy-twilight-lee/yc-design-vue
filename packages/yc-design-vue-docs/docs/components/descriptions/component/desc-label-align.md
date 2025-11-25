### 标签文本对齐

标签文本可以设置左对齐右对齐，也可以设置垂直的排列方式。

<div class="cell-demo vp-raw">
  <yc-space
    direction="vertical"
    size="large">
    <yc-descriptions
      :data="data"
      title="User Info"
      align="right" />
    <yc-descriptions
      :data="data"
      title="User Info"
      :align="{ label: 'right' }" />
    <yc-descriptions
      :data="data"
      title="User Info"
      layout="inline-vertical" />
  </yc-space>
</div>

<script setup>
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
  <yc-space
    direction="vertical"
    size="large">
    <yc-descriptions
      :data="data"
      title="User Info"
      align="right" />
    <yc-descriptions
      :data="data"
      title="User Info"
      :align="{ label: 'right' }" />
    <yc-descriptions
      :data="data"
      title="User Info"
      layout="inline-vertical" />
  </yc-space>
</template>

<script setup>
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
