### 可切换步骤条

设置 `changeable` 开启点击切换步骤。

<div class="cell-demo vp-raw">
  <div>
    <yc-steps
      changeable
      :current="current"
      @change="setCurrent">
      <yc-step description="This is a description">Succeeded</yc-step>
      <yc-step description="This is a description">Processing</yc-step>
      <yc-step description="This is a description">Pending</yc-step>
    </yc-steps>
    <div
      :style="{
        width: '100%',
        height: '200px',
        textAlign: 'center',
        background: 'var(--color-bg-2)',
        color: '#C2C7CC',
      }">
      <div style="line-height: 160px;">Step{{ current }} Content</div>
      <yc-space size="large">
        <yc-button
          type="secondary"
          :disabled="current <= 1"
          @click="onPrev">
          <IconLeft /> Back
        </yc-button>
        <yc-button
          type="primary"
          :disabled="current >= 3"
          @click="onNext">
          Next <IconRight />
        </yc-button>
      </yc-space>
    </div>
  </div>
</div>

<script setup>
import { ref } from 'vue';
const current = ref(1);
const onPrev = () => {
  current.value = Math.max(1, current.value - 1);
};
const onNext = () => {
  current.value = Math.min(3, current.value + 1);
};
const setCurrent = (value) => {
  current.value = current;
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
  <div>
    <yc-steps
      changeable
      :current="current"
      @change="setCurrent">
      <yc-step description="This is a description">Succeeded</yc-step>
      <yc-step description="This is a description">Processing</yc-step>
      <yc-step description="This is a description">Pending</yc-step>
    </yc-steps>
    <div
      :style="{
        width: '100%',
        height: '200px',
        textAlign: 'center',
        background: 'var(--color-bg-2)',
        color: '#C2C7CC',
      }">
      <div style="line-height: 160px;">Step{{ current }} Content</div>
      <yc-space size="large">
        <yc-button
          type="secondary"
          :disabled="current <= 1"
          @click="onPrev">
          <IconLeft /> Back
        </yc-button>
        <yc-button
          type="primary"
          :disabled="current >= 3"
          @click="onNext">
          Next <IconRight />
        </yc-button>
      </yc-space>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const current = ref(1);
const onPrev = () => {
  current.value = Math.max(1, current.value - 1);
};
const onNext = () => {
  current.value = Math.min(3, current.value + 1);
};
const setCurrent = (value) => {
  current.value = current;
};
</script>
```

</details>
