### 多选模式

用 `modelValue` 使用路径作为值。

<div class="cell-demo vp-raw">
  <yc-space
    direction="vertical"
    size="large">
    <yc-cascader
      :options="options"
      :style="{ width: '320px' }"
      placeholder="Please select ..."
      path-mode
      @change="handleChange" />
    <yc-cascader
      :options="options"
      :default-value="[['beijing', 'chaoyang', 'datunli']]"
      :style="{ width: '320px' }"
      placeholder="Please select ..."
      path-mode
      @change="handleChange" />
  </yc-space>
</div>

<script setup>
const handleChange = (path) => {
  console.log(path);
};

const options = [
  {
    value: 'beijing',
    label: 'Beijing',
    children: [
      {
        value: 'chaoyang',
        label: 'ChaoYang',
        children: [
          {
            value: 'datunli',
            label: 'Datunli',
          },
        ],
      },
      {
        value: 'haidian',
        label: 'Haidian',
      },
      {
        value: 'dongcheng',
        label: 'Dongcheng',
      },
      {
        value: 'xicheng',
        label: 'Xicheng',
        children: [
          {
            value: 'jinrongjie',
            label: 'Jinrongjie',
          },
          {
            value: 'tianqiao',
            label: 'Tianqiao',
          },
        ],
      },
    ],
  },
  {
    value: 'shanghai',
    label: 'Shanghai',
    children: [
      {
        value: 'huangpu',
        label: 'Huangpu',
      },
    ],
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
    <yc-cascader
      :options="options"
      :style="{ width: '320px' }"
      placeholder="Please select ..."
      path-mode
      @change="handleChange" />
    <yc-cascader
      :options="options"
      :default-value="[['beijing', 'chaoyang', 'datunli']]"
      :style="{ width: '320px' }"
      placeholder="Please select ..."
      path-mode
      @change="handleChange" />
  </yc-space>
</template>

<script setup>
const handleChange = (path) => {
  console.log(path);
};

const options = [
  {
    value: 'beijing',
    label: 'Beijing',
    children: [
      {
        value: 'chaoyang',
        label: 'ChaoYang',
        children: [
          {
            value: 'datunli',
            label: 'Datunli',
          },
        ],
      },
      {
        value: 'haidian',
        label: 'Haidian',
      },
      {
        value: 'dongcheng',
        label: 'Dongcheng',
      },
      {
        value: 'xicheng',
        label: 'Xicheng',
        children: [
          {
            value: 'jinrongjie',
            label: 'Jinrongjie',
          },
          {
            value: 'tianqiao',
            label: 'Tianqiao',
          },
        ],
      },
    ],
  },
  {
    value: 'shanghai',
    label: 'Shanghai',
    children: [
      {
        value: 'huangpu',
        label: 'Huangpu',
      },
    ],
  },
];
</script>
```

</details>
