### 选择框大小

选择框分为 `mini`、`small`、`medium`、`large` 四种尺寸。

<div class="cell-demo vp-raw">
  <yc-space
    direction="vertical"
    size="large">
    <yc-radio-group
      type="button"
      v-model="size">
      <yc-radio value="mini">Mini</yc-radio>
      <yc-radio value="small">Small</yc-radio>
      <yc-radio value="medium">Medium</yc-radio>
      <yc-radio value="large">Large</yc-radio>
    </yc-radio-group>
    <yc-select
      default-value="Beijing"
      :style="{ width: '320px' }"
      :size="size"
      placeholder="Please select ...">
      <yc-option>Beijing</yc-option>
      <yc-option>Shanghai</yc-option>
      <yc-option>Guangzhou</yc-option>
      <yc-option disabled>Disabled</yc-option>
    </yc-select>
    <yc-select
      :default-value="['Beijing', 'Shanghai']"
      :style="{ width: '320px' }"
      :size="size"
      placeholder="Please select ..."
      multiple>
      <yc-option>Beijing</yc-option>
      <yc-option>Shanghai</yc-option>
      <yc-option>Guangzhou</yc-option>
      <yc-option disabled>Disabled</yc-option>
      <yc-option>Shenzhen</yc-option>
      <yc-option>Chengdu</yc-option>
      <yc-option>Wuhan</yc-option>
    </yc-select>
  </yc-space>
</div>

<script setup>
import { ref } from 'vue';
const size = ref('medium');
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
      type="button"
      v-model="size">
      <yc-radio value="mini">Mini</yc-radio>
      <yc-radio value="small">Small</yc-radio>
      <yc-radio value="medium">Medium</yc-radio>
      <yc-radio value="large">Large</yc-radio>
    </yc-radio-group>
    <yc-select
      default-value="Beijing"
      :style="{ width: '320px' }"
      :size="size"
      placeholder="Please select ...">
      <yc-option>Beijing</yc-option>
      <yc-option>Shanghai</yc-option>
      <yc-option>Guangzhou</yc-option>
      <yc-option disabled>Disabled</yc-option>
    </yc-select>
    <yc-select
      :default-value="['Beijing', 'Shanghai']"
      :style="{ width: '320px' }"
      :size="size"
      placeholder="Please select ..."
      multiple>
      <yc-option>Beijing</yc-option>
      <yc-option>Shanghai</yc-option>
      <yc-option>Guangzhou</yc-option>
      <yc-option disabled>Disabled</yc-option>
      <yc-option>Shenzhen</yc-option>
      <yc-option>Chengdu</yc-option>
      <yc-option>Wuhan</yc-option>
    </yc-select>
  </yc-space>
</template>

<script setup>
import { ref } from 'vue';
const size = ref('medium');
</script>
```

</details>
