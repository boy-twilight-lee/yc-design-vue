### 限制可勾选数量

通过设置 `max` 限制最多可被勾选的项目数。

<div class="cell-demo vp-raw">
  <yc-space
    direction="vertical"
    size="large">
    <yc-checkbox-group
      :max="2"
      v-model="value1"
      :options="plainOptions" />
    <yc-checkbox-group
      :max="2"
      :default-value="['1']">
      <yc-checkbox
        value="1"
        disabled
        >Option 1</yc-checkbox
      >
      <yc-checkbox value="2">Option 2</yc-checkbox>
      <yc-checkbox value="3">Option 3</yc-checkbox>
      <yc-checkbox value="4">Option 4</yc-checkbox>
    </yc-checkbox-group>
  </yc-space>
</div>

<script setup>
import { ref } from 'vue';
const value1 = ref(['Plain 1']);
const plainOptions = ['Plain 1', 'Plain 2', 'Plain 3', 'Plain 4'];
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
    <yc-checkbox-group
      :max="2"
      v-model="value1"
      :options="plainOptions" />
    <yc-checkbox-group
      :max="2"
      :default-value="['1']">
      <yc-checkbox
        value="1"
        disabled
        >Option 1</yc-checkbox
      >
      <yc-checkbox value="2">Option 2</yc-checkbox>
      <yc-checkbox value="3">Option 3</yc-checkbox>
      <yc-checkbox value="4">Option 4</yc-checkbox>
    </yc-checkbox-group>
  </yc-space>
</template>

<script setup>
import { ref } from 'vue';
const value1 = ref(['Plain 1']);
const plainOptions = ['Plain 1', 'Plain 2', 'Plain 3', 'Plain 4'];
</script>
```

</details>
