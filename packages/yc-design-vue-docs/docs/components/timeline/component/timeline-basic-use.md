### 基本用法

标签的基本用法

<div class="cell-demo vp-raw">
  <div :style="{ marginBottom: '40px' }">
    <yc-typography-text :style="{ verticalAlign: 'middle', marginRight: '8px' }">
      Reverse
    </yc-typography-text>
    <yc-radio-group
      @change="onChange"
      style="{ marginBottom: '30px' }"
      :modelValue="isReverse">
      <yc-radio :value="false">No Reverse</yc-radio>
      <yc-radio :value="true">Reverse</yc-radio>
    </yc-radio-group>
  </div>
  <yc-timeline :reverse="isReverse">
    <yc-timeline-item label="2017-03-10">The first milestone</yc-timeline-item>
    <yc-timeline-item label="2018-05-12">The second milestone</yc-timeline-item>
    <yc-timeline-item label="2020-09-30">The third milestone</yc-timeline-item>
  </yc-timeline>
</div>

<script setup>
import { ref } from 'vue';
const isReverse = ref(false);
const onChange = (bool) => {
  isReverse.value = bool;
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
  <div :style="{ marginBottom: '40px' }">
    <yc-typography-text
      :style="{ verticalAlign: 'middle', marginRight: '8px' }">
      Reverse
    </yc-typography-text>
    <yc-radio-group
      @change="onChange"
      style="{ marginBottom: '30px' }"
      :modelValue="isReverse">
      <yc-radio :value="false">No Reverse</yc-radio>
      <yc-radio :value="true">Reverse</yc-radio>
    </yc-radio-group>
  </div>
  <yc-timeline :reverse="isReverse">
    <yc-timeline-item label="2017-03-10">The first milestone</yc-timeline-item>
    <yc-timeline-item label="2018-05-12">The second milestone</yc-timeline-item>
    <yc-timeline-item label="2020-09-30">The third milestone</yc-timeline-item>
  </yc-timeline>
</template>

<script setup>
import { ref } from 'vue';
const isReverse = ref(false);
const onChange = (bool) => {
  isReverse.value = bool;
};
</script>
```

</details>
