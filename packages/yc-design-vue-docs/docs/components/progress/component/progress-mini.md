### 迷你进度条

设置 `size="mini"` 展示微型进度条。

<div class="cell-demo vp-raw">

<yc-space
      size="large"
      :style="{ width: '100%' }">

<div>
<yc-progress
          size="mini"
          :percent="percent" />
</div>
<div>
<yc-progress
          size="mini"
          status="warning"
          :percent="percent" />
</div>
<div>
<yc-progress
        size="mini"
        status="danger"
        :percent="percent" />
</div>
<div>
<yc-progress
        size="mini"
        status="success"
        :percent="percent" />
</div>

</yc-space>
<yc-space
    size="large"
    :style="{ width: '100%', marginTop: '20px' }">
<yc-progress
      type="circle"
      size="mini"
      :percent="percent" />
<yc-progress
      type="circle"
      size="mini"
      status="warning"
      :percent="percent" />
<yc-progress
      type="circle"
      size="mini"
      status="danger"
      :percent="percent" />
<yc-progress
      type="circle"
      size="mini"
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
  <yc-space
    size="large"
    :style="{ width: '100%' }">
    <yc-progress
      size="mini"
      :percent="percent" />
    <yc-progress
      size="mini"
      status="warning"
      :percent="percent" />
    <yc-progress
      size="mini"
      status="danger"
      :percent="percent" />
    <yc-progress
      size="mini"
      status="success"
      :percent="percent" />
  </yc-space>
  <yc-space
    size="large"
    :style="{ width: '100%', marginTop: '20px' }">
    <yc-progress
      type="circle"
      size="mini"
      :percent="percent" />
    <yc-progress
      type="circle"
      size="mini"
      status="warning"
      :percent="percent" />
    <yc-progress
      type="circle"
      size="mini"
      status="danger"
      :percent="percent" />
    <yc-progress
      type="circle"
      size="mini"
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
