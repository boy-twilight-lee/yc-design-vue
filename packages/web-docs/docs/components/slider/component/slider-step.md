### 设置步长

通过 `step` 设置步长，默认步长为 `1`。建议设置能够被 `max-min` 整除的值，否则会出现可选最大值小于 `max` 的情况。当设置`show-ticks` 时，显示步长刻度线。

<div class="cell-demo vp-raw">
  <yc-space
    direction="vertical"
    size="large">
    <a-form
      :model="data"
      layout="inline"
      style="width:100%">
      <a-form-item
        label="Step"
        field="step">
        <yc-input-number
          :style="{ width: '100px' }"
          v-model="data.step" />
      </a-form-item>
      <a-form-item
        label="Show steps"
        field="showTicks">
        <yc-switch v-model="data.showTicks" />
      </a-form-item>
    </a-form>
    <yc-slider
      :default-value="20"
      :style="{ width: '300px' }"
      :step="data.step"
      :show-ticks="data.showTicks" />
  </yc-space>
</div>

<script setup>
import { reactive } from 'vue';
import { Form as AForm, FormItem as AFormItem } from '@arco-design/web-vue';
const data = reactive({
  step: 5,
  showTicks: true,
});
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
    <a-form
      :model="data"
      layout="inline">
      <a-form-item
        label="Step"
        field="step">
        <yc-input-number
          :style="{ width: '100px' }"
          v-model="data.step" />
      </a-form-item>
      <a-form-item
        label="Show steps"
        field="showTicks">
        <yc-switch v-model="data.showTicks" />
      </a-form-item>
    </a-form>
    <yc-slider
      :default-value="20"
      :style="{ width: '300px' }"
      :step="data.step"
      :show-ticks="data.showTicks" />
  </yc-space>
</template>

<script setup>
import { reactive } from 'vue';
const data = reactive({
  step: 5,
  showTicks: true,
});
</script>
```

</details>
