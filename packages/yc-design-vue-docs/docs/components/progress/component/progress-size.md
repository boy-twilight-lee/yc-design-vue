### 进度条大小

通过 `size` 设置进度条的大小

<div class="cell-demo vp-raw">
  <yc-space
    direction="vertical"
    size="large"
    :style="{ width: '50%' }">
    <yc-radio-group
      v-model="size"
      type="button">
      <yc-radio value="small">Small</yc-radio>
      <yc-radio value="medium">Medium</yc-radio>
      <yc-radio value="large">Large</yc-radio>
    </yc-radio-group>
    <yc-progress
      :size="size"
      :percent="0.2" />
    <yc-progress
      status="warning"
      :size="size"
      :percent="0.2" />
    <yc-progress
      status="danger"
      :size="size"
      :percent="0.2" />
    <yc-space>
      <yc-progress
        type="circle"
        :size="size"
        :percent="0.2" />
      <yc-progress
        type="circle"
        status="warning"
        :size="size"
        :percent="0.2" />
      <yc-progress
        type="circle"
        status="danger"
        :size="size"
        :percent="0.2" />
    </yc-space>
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
    size="large"
    :style="{ width: '50%' }">
    <yc-radio-group
      v-model="size"
      type="button">
      <yc-radio value="small">Small</yc-radio>
      <yc-radio value="medium">Medium</yc-radio>
      <yc-radio value="large">Large</yc-radio>
    </yc-radio-group>
    <yc-progress
      :size="size"
      :percent="0.2" />
    <yc-progress
      status="warning"
      :size="size"
      :percent="0.2" />
    <yc-progress
      status="danger"
      :size="size"
      :percent="0.2" />
    <yc-space>
      <yc-progress
        type="circle"
        :size="size"
        :percent="0.2" />
      <yc-progress
        type="circle"
        status="warning"
        :size="size"
        :percent="0.2" />
      <yc-progress
        type="circle"
        status="danger"
        :size="size"
        :percent="0.2" />
    </yc-space>
  </yc-space>
</template>

<script setup>
import { ref } from 'vue';
const size = ref('medium');
</script>
```

</details>
