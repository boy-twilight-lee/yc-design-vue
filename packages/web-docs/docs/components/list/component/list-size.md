### 不同尺寸

列表组件提供了三种大小 `small` 、`medium` 、`large`，可根据业务需求自行选择。

<div class="cell-demo vp-raw">
  <yc-space
    direction="vertical"
    size="large">
    <yc-radio-group
      v-model="size"
      type="button">
      <yc-radio value="small">Small</yc-radio>
      <yc-radio value="medium">Medium</yc-radio>
      <yc-radio value="large">Large</yc-radio>
    </yc-radio-group>
    <yc-list :size="size">
      <template #header> List title </template>
      <yc-list-item>Beijing Bytedance Technology Co., Ltd.</yc-list-item>
      <yc-list-item>Bytedance Technology Co., Ltd.</yc-list-item>
      <yc-list-item>Beijing Toutiao Technology Co., Ltd.</yc-list-item>
      <yc-list-item>Beijing Volcengine Technology Co., Ltd.</yc-list-item>
      <yc-list-item>China Beijing Bytedance Technology Co., Ltd.</yc-list-item>
    </yc-list>
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
    size="large">
    <yc-radio-group
      v-model="size"
      type="button">
      <yc-radio value="small">Small</yc-radio>
      <yc-radio value="medium">Medium</yc-radio>
      <yc-radio value="large">Large</yc-radio>
    </yc-radio-group>
    <yc-list :size="size">
      <template #header> List title </template>
      <yc-list-item>Beijing Bytedance Technology Co., Ltd.</yc-list-item>
      <yc-list-item>Bytedance Technology Co., Ltd.</yc-list-item>
      <yc-list-item>Beijing Toutiao Technology Co., Ltd.</yc-list-item>
      <yc-list-item>Beijing Volcengine Technology Co., Ltd.</yc-list-item>
      <yc-list-item>China Beijing Bytedance Technology Co., Ltd.</yc-list-item>
    </yc-list>
  </yc-space>
</template>

<script setup>
import { ref } from 'vue';
const size = ref('medium');
</script>
```

</details>
