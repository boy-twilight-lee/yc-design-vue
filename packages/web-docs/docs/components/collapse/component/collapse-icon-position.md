### 展开图标位置

通过 `expand-icon-position` 属性设置展开图标的位置。

<div class="cell-demo vp-raw">
  <yc-space
    direction="vertical"
    :style="{ width: '100%' }">
    <yc-space>
      <yc-radio-group
        type="button"
        v-model="position">
        <yc-radio value="left">Left</yc-radio>
        <yc-radio value="right">Right</yc-radio>
      </yc-radio-group>
      <yc-checkbox v-model="hideIcon">Hide Expand Icon</yc-checkbox>
    </yc-space>
    <yc-collapse
      :default-active-key="['1']"
      :expand-icon-position="position"
      :show-expand-icon="!hideIcon">
      <yc-collapse-item
        header="Beijing Toutiao Technology Co., Ltd."
        path="1">
        <template #expand-icon>
          <icon-plus />
        </template>
        <template #extra>
          <yc-tag size="small">city</yc-tag>
        </template>
        <div>Beijing Toutiao Technology Co., Ltd.</div>
        <div>Beijing Toutiao Technology Co., Ltd.</div>
        <div>Beijing Toutiao Technology Co., Ltd.</div>
      </yc-collapse-item>
      <yc-collapse-item
        header="Beijing Toutiao Technology Co., Ltd."
        path="2"
        disabled>
        <div>Beijing Toutiao Technology Co., Ltd.</div>
        <div>Beijing Toutiao Technology Co., Ltd.</div>
        <div>Beijing Toutiao Technology Co., Ltd.</div>
      </yc-collapse-item>
      <yc-collapse-item
        header="Beijing Toutiao Technology Co., Ltd."
        path="3">
        <div>Beijing Toutiao Technology Co., Ltd.</div>
        <div>Beijing Toutiao Technology Co., Ltd.</div>
        <div>Beijing Toutiao Technology Co., Ltd.</div>
      </yc-collapse-item>
    </yc-collapse>
  </yc-space>
</div>

<script setup>
import { ref } from 'vue';
const position = ref('left');
const hideIcon = ref(false);
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
    :style="{ width: '100%' }">
    <yc-space>
      <yc-radio-group
        type="button"
        v-model="position">
        <yc-radio value="left">Left</yc-radio>
        <yc-radio value="right">Right</yc-radio>
      </yc-radio-group>
      <yc-checkbox v-model="hideIcon">Hide Expand Icon</yc-checkbox>
    </yc-space>
    <yc-collapse
      :default-active-key="['1']"
      :expand-icon-position="position"
      :show-expand-icon="!hideIcon">
      <yc-collapse-item
        header="Beijing Toutiao Technology Co., Ltd."
        path="1">
        <template #expand-icon>
          <icon-plus />
        </template>
        <template #extra>
          <yc-tag size="small">city`
        </template>
        <div>Beijing Toutiao Technology Co., Ltd.</div>
        <div>Beijing Toutiao Technology Co., Ltd.</div>
        <div>Beijing Toutiao Technology Co., Ltd.</div>
      </yc-collapse-item>
      <yc-collapse-item
        header="Beijing Toutiao Technology Co., Ltd."
        path="2"
        disabled>
        <div>Beijing Toutiao Technology Co., Ltd.</div>
        <div>Beijing Toutiao Technology Co., Ltd.</div>
        <div>Beijing Toutiao Technology Co., Ltd.</div>
      </yc-collapse-item>
      <yc-collapse-item
        header="Beijing Toutiao Technology Co., Ltd."
        path="3">
        <div>Beijing Toutiao Technology Co., Ltd.</div>
        <div>Beijing Toutiao Technology Co., Ltd.</div>
        <div>Beijing Toutiao Technology Co., Ltd.</div>
      </yc-collapse-item>
    </yc-collapse>
  </yc-space>
</template>

<script setup>
import { ref } from 'vue';
const position = ref('left');
const hideIcon = ref(false);
</script>
```

</details>
