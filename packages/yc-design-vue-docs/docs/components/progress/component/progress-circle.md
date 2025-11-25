### 环形进度条

设置 `type="circle"` 将会展示环形进度条。

<div class="cell-demo vp-raw">
  <yc-space size="large">
    <yc-progress
      type="circle"
      :percent="percent" />
    <yc-progress
      type="circle"
      status="warning"
      :percent="percent" />
    <yc-progress
      type="circle"
      status="danger"
      :percent="percent" />
    <yc-progress
      type="circle"
      status="success"
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
  <yc-space size="large">
    <yc-progress
      type="circle"
      :percent="percent" />
    <yc-progress
      type="circle"
      status="warning"
      :percent="percent" />
    <yc-progress
      type="circle"
      status="danger"
      :percent="percent" />
    <yc-progress
      type="circle"
      status="success"
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
