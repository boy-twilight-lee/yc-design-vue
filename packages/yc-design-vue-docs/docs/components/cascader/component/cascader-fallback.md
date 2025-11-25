### 回退选项

组件默认会展示在选项中不存在的值，可通过 `fallback` 自定义展示或者关闭

<div class="cell-demo vp-raw">
  <yc-space
    direction="vertical"
    size="large">
    <yc-cascader
      :options="options"
      v-model="value"
      :style="{ width: '320px' }"
      placeholder="Please select ..."
      multiple />
    <yc-cascader
      :options="options"
      v-model="value2"
      :style="{ width: '320px' }"
      placeholder="Please select ..."
      path-mode
      multiple
      :fallback="fallback" />
  </yc-space>
</div>

<script setup>
import { ref } from 'vue';
const value = ref(['datunli', 'wuhou']);
const value2 = ref([
  ['beijing', 'chaoyang', 'datunli'],
  ['sichuan', 'chengdu', 'wuhou'],
]);
const fallback = (value) => {
  return value.map((item) => item.toUpperCase()).join('-');
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
      v-model="value"
      :style="{ width: '320px' }"
      placeholder="Please select ..."
      multiple />
    <yc-cascader
      :options="options"
      v-model="value2"
      :style="{ width: '320px' }"
      placeholder="Please select ..."
      path-mode
      multiple
      :fallback="fallback" />
  </yc-space>
</template>

<script setup>
import { ref } from 'vue';
const value = ref(['datunli', 'wuhou']);
const value2 = ref([
  ['beijing', 'chaoyang', 'datunli'],
  ['sichuan', 'chengdu', 'wuhou'],
]);
const fallback = (value) => {
  return value.map((item) => item.toUpperCase()).join('-');
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
