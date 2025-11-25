### 进度条状态

通过 `status` 指定进度条状态

<div class="cell-demo vp-raw">
  <yc-space
    direction="vertical"
    :style="{ width: '50%' }">
    <yc-progress :percent="percent" />
    <yc-progress
      status="warning"
      :percent="percent" />
    <yc-progress
      status="danger"
      :percent="percent" />
  </yc-space>
  <div :style="{ marginTop: '20px' }">
    <yc-slider
      v-model="percent"
      :max="1"
      :step="0.1"
      :style="{ width: '150px' }" />
  </div>
</div>

<script setup>
import { ref } from 'vue';
const percent = ref(0.2);
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
    :style="{ width: '50%' }">
    <yc-progress :percent="percent" />
    <yc-progress
      status="warning"
      :percent="percent" />
    <yc-progress
      status="danger"
      :percent="percent" />
  </yc-space>
  <div :style="{ marginTop: '20px' }">
    <yc-slider
      v-model="percent"
      :max="1"
      :step="0.1"
      :style="{ width: '150px' }" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
const percent = ref(0.2);
</script>
```

</details>
