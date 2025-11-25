### 基本用法

选择器的基本用法。
通过 `trigger-props` 属性自定义下拉框的属性，比如可以让下拉框自动适应最小宽度。

<div class="cell-demo vp-raw">
  <yc-space
    direction="vertical"
    size="large">
    <yc-select
      :style="{ width: '320px' }"
      placeholder="Please select ...">
      <yc-option>Beijing</yc-option>
      <yc-option>Shanghai</yc-option>
      <yc-option>Guangzhou</yc-option>
      <yc-option disabled>Disabled</yc-option>
    </yc-select>
    <yc-select
      :style="{ width: '320px' }"
      placeholder="Please select ...">
      <yc-option :value="true">是</yc-option>
      <yc-option :value="false">否</yc-option>
    </yc-select>
    <yc-select
      defaultValue="Beijing"
      :style="{ width: '320px' }"
      placeholder="Please select ..."
      disabled>
      <yc-option>Beijing</yc-option>
      <yc-option>Shanghai</yc-option>
      <yc-option>Guangzhou</yc-option>
      <yc-option disabled>Disabled</yc-option>
    </yc-select>
    <yc-select
      v-model="value"
      :style="{ width: '320px' }"
      placeholder="Please select ...">
      <yc-option
        v-for="item of data"
        :value="item"
        :label="item.label" />
    </yc-select>
    <div>Select Value: {{ value }}</div>
    <yc-select
      :style="{ width: '160px' }"
      placeholder="Select"
      :trigger-props="{ autoFitPopupMinWidth: true }">
      <yc-option>Beijing-Beijing-Beijing</yc-option>
      <yc-option>Shanghai</yc-option>
      <yc-option>Guangzhou</yc-option>
      <yc-option disabled>Disabled</yc-option>
    </yc-select>
  </yc-space>
</div>

<script setup>
import { ref } from 'vue';
const value = ref();
const data = [
  {
    value: 'beijing',
    label: 'Beijing',
    other: 'extra',
  },
  {
    value: 'shanghai',
    label: 'Shanghai',
    other: 'extra',
  },
  {
    value: 'guangzhou',
    label: 'Guangzhou',
    other: 'extra',
  },
  {
    value: 'chengdu',
    label: 'Chengdu',
    other: 'extra',
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
    <yc-select
      :style="{ width: '320px' }"
      placeholder="Please select ...">
      <yc-option>Beijing</yc-option>
      <yc-option>Shanghai</yc-option>
      <yc-option>Guangzhou</yc-option>
      <yc-option disabled>Disabled</yc-option>
    </yc-select>
    <yc-select
      :style="{ width: '320px' }"
      placeholder="Please select ...">
      <yc-option :value="true">是</yc-option>
      <yc-option :value="false">否</yc-option>
    </yc-select>
    <yc-select
      defaultValue="Beijing"
      :style="{ width: '320px' }"
      placeholder="Please select ..."
      disabled>
      <yc-option>Beijing</yc-option>
      <yc-option>Shanghai</yc-option>
      <yc-option>Guangzhou</yc-option>
      <yc-option disabled>Disabled</yc-option>
    </yc-select>
    <yc-select
      v-model="value"
      :style="{ width: '320px' }"
      placeholder="Please select ...">
      <yc-option
        v-for="item of data"
        :value="item"
        :label="item.label" />
    </yc-select>
    <div>Select Value: {{ value }}</div>
    <yc-select
      :style="{ width: '160px' }"
      placeholder="Select"
      :trigger-props="{ autoFitPopupMinWidth: true }">
      <yc-option>Beijing-Beijing-Beijing</yc-option>
      <yc-option>Shanghai</yc-option>
      <yc-option>Guangzhou</yc-option>
      <yc-option disabled>Disabled</yc-option>
    </yc-select>
  </yc-space>
</template>

<script setup>
import { ref } from 'vue';
const value = ref();
const data = [
  {
    value: 'beijing',
    label: 'Beijing',
    other: 'extra',
  },
  {
    value: 'shanghai',
    label: 'Shanghai',
    other: 'extra',
  },
  {
    value: 'guangzhou',
    label: 'Guangzhou',
    other: 'extra',
  },
  {
    value: 'chengdu',
    label: 'Chengdu',
    other: 'extra',
  },
];
</script>
```

</details>
