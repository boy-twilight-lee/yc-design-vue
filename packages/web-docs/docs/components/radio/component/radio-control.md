### 受控

通过 `v-model (model-value)` 属性控制是否选中

<div class="cell-demo vp-raw">
  <yc-space size="large">
    <yc-radio v-model="checked1">v-model</yc-radio>
    <yc-radio :model-value="true">binding "true"</yc-radio>
    <yc-radio :model-value="checked2">binding value2</yc-radio>
    <yc-radio :default-checked="true">uncontrolled state</yc-radio>
  </yc-space>
  <div :style="{ marginTop: '20px' }">
    <yc-space size="large">
      <yc-button
        type="primary"
        @click="handleSetCheck">
        {{ checked2 ? 'uncheck' : 'check' }} value2
      </yc-button>
      <yc-button @click="handleReset"> reset all </yc-button>
    </yc-space>
  </div>
</div>

<script setup>
import { ref } from 'vue';
const checked1 = ref(false);
const checked2 = ref(false);
const handleSetCheck = () => {
  checked2.value = !checked2.value;
};
const handleReset = () => {
  checked1.value = false;
  checked2.value = false;
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
    <yc-radio v-model="checked1">v-model</yc-radio>
    <yc-radio :model-value="true">binding "true"</yc-radio>
    <yc-radio :model-value="checked2">binding value2</yc-radio>
    <yc-radio :default-checked="true">uncontrolled state</yc-radio>
  </yc-space>
  <div :style="{ marginTop: '20px' }">
    <yc-space size="large">
      <yc-button
        type="primary"
        @click="handleSetCheck">
        {{ checked2 ? 'uncheck' : 'check' }} value2
      </yc-button>
      <yc-button @click="handleReset"> reset all </yc-button>
    </yc-space>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const checked1 = ref(false);
const checked2 = ref(false);
const handleSetCheck = () => {
  checked2.value = !checked2.value;
};
const handleReset = () => {
  checked1.value = false;
  checked2.value = false;
};
</script>
```

</details>
