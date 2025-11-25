### 单选框组选项

yc-radio-group 通过 `options` 属性设置子元素

<div class="cell-demo vp-raw">
  <yc-space
    direction="vertical"
    size="large">
    <yc-radio-group
      v-model="value1"
      :options="plainOptions" />
    <yc-radio-group
      v-model="value2"
      :options="options" />
    <yc-radio-group
      v-model="value2"
      :options="options">
      <template #label="{ data }">
        <yc-tag>{{ data.label }}</yc-tag>
      </template>
    </yc-radio-group>
  </yc-space>
</div>

<script setup>
import { ref } from 'vue';
const value1 = ref('plain 1');
const plainOptions = ['plain 1', 'plain 2', 'plain 3'];
const value2 = ref('1');
const options = [
  { label: 'option 1', value: '1' },
  { label: 'option 2', value: '2' },
  { label: 'option 3', value: '3', disabled: true },
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
    <yc-radio-group
      v-model="value1"
      :options="plainOptions" />
    <yc-radio-group
      v-model="value2"
      :options="options" />
    <yc-radio-group
      v-model="value2"
      :options="options">
      <template #label="{ data }">
        <yc-tag>{{ data.label }}</yc-tag>
      </template>
    </yc-radio-group>
  </yc-space>
</template>

<script setup>
import { ref } from 'vue';
const value1 = ref('plain 1');
const plainOptions = ['plain 1', 'plain 2', 'plain 3'];
const value2 = ref('1');
const options = [
  { label: 'option 1', value: '1' },
  { label: 'option 2', value: '2' },
  { label: 'option 3', value: '3', disabled: true },
];
</script>
```

</details>
