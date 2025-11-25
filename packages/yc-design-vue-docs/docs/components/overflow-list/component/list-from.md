### 折叠方向

通过 `from` 属性可以设置折叠的方向。

<div class="cell-demo vp-raw">
  <a-form :model="{}" auto-label-width style="width:100%"> 
    <a-form-item label="Tag Number">
      <yc-input-number
        v-model="number"
        :min="0"
        :max="20"
        style="width: 200px" />
    </a-form-item>
    <a-form-item label="List Width">
      <yc-slider
        v-model="width"
        :min="0"
        :max="800" />
    </a-form-item>
  </a-form>
  <div :style="{ width: `${width}px`, marginTop: '20px' }">
    <yc-overflow-list from="start">
      <div>DIV Element</div>
      <yc-tag
        v-for="item of tags"
        :key="item"
        >Tag{{ item }}</yc-tag
      >
    </yc-overflow-list>
  </div>
</div>

<script setup>
import { computed, ref } from 'vue';
import { Form as AForm, FormItem as AFormItem } from '@arco-design/web-vue';
const width = ref(500);
const number = ref(10);
const tags = computed(() =>
  Array.from({ length: number.value }, (_, idx) => idx + 1)
);
</script>

<details>
<summary>
 <button class="code-btn"  >
    <icon-code />
 </button>
</summary>

```vue
<template>
  <a-form auto-label-width>
    <a-form-item label="Tag Number">
      <yc-input-number
        v-model="number"
        :min="0"
        :max="20"
        style="width: 200px" />
    </a-form-item>
    <a-form-item label="List Width">
      <yc-slider
        v-model="width"
        :min="0"
        :max="800" />
    </a-form-item>
  </a-form>
  <div :style="{ width: `${width}px`, marginTop: '20px' }">
    <yc-overflow-list from="start">
      <div>DIV Element</div>
      <yc-tag
        v-for="item of tags"
        :key="item"
        >Tag{{ item }}</yc-tag
      >
    </yc-overflow-list>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
const width = ref(500);
const number = ref(10);
const tags = computed(() =>
  Array.from({ length: number.value }, (_, idx) => idx + 1)
);
</script>
```

</details>
