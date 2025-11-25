### 受控

通过 `v-model (model-value)` 属性控制是否选中

<div class="cell-demo vp-raw">
  <yc-space size="large">
    <yc-checkbox v-model="checked1">v-model</yc-checkbox>
    <yc-checkbox :model-value="true">binding value</yc-checkbox>
    <yc-checkbox :model-value="checked2">binding value2</yc-checkbox>
    <yc-checkbox :default-checked="true">uncontrolled state</yc-checkbox>
  </yc-space>
  <div :style="{ marginTop: '20px' }">
    <yc-button
      type="primary"
      @click="handleSetCheck">
      {{ checked2 ? 'uncheck' : 'check' }} value2
    </yc-button>
  </div>
</div>

<script setup>
import { ref } from 'vue';
const checked1 = ref(false);
const checked2 = ref(false);
const handleSetCheck = () => {
  checked2.value = !checked2.value;
};
</script>

<details>
<summary>
 <button class="code-btn"  >
    <icon-code />
 </button>
</summary>

```vue
<template>
  <yc-space size="large">
    <yc-checkbox v-model="checked1">v-model</yc-checkbox>
    <yc-checkbox :model-value="true">binding value</yc-checkbox>
    <yc-checkbox :model-value="checked2">binding value2</yc-checkbox>
    <yc-checkbox :default-checked="true">uncontrolled state</yc-checkbox>
  </yc-space>
  <div :style="{ marginTop: '20px' }">
    <yc-button
      type="primary"
      @click="handleSetCheck">
      {{ checked2 ? 'uncheck' : 'check' }} value2
    </yc-button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const checked1 = ref(false);
const checked2 = ref(false);
const handleSetCheck = () => {
  checked2.value = !checked2.value;
};
</script>
```

</details>
