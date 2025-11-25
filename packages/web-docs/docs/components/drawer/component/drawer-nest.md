### 嵌套抽屉

在抽屉内打开新的抽屉。

<div class="cell-demo vp-raw">
  <yc-button
    type="primary"
    @click="handleClick"
    >Open Drawer</yc-button
  >
  <yc-drawer
    :visible="visible"
    :width="500"
    @ok="handleOk"
    @cancel="handleCancel"
    >
    <template #title> Title </template>
    <div :style="{ marginBottom: '20px' }">
      You can customize modal body text by the current situation. This modal
      will be closed immediately once you press the OK button.
    </div>
    <yc-button
      type="primary"
      @click="handleNestedClick"
      >Open Nested Drawer</yc-button
    >
  </yc-drawer>
  <yc-drawer
    :visible="nestedVisible"
    @ok="handleNestedOk"
    @cancel="handleNestedCancel"
    >
    <template #title> Title </template>
    <div>
      You can customize modal body text by the current situation. This modal
      will be closed immediately once you press the OK button.
    </div>
  </yc-drawer>
</div>

<script setup>
import { ref } from 'vue';
const visible = ref(false);
const nestedVisible = ref(false);

const handleClick = () => {
  visible.value = true;
};
const handleOk = () => {
  visible.value = false;
};
const handleCancel = () => {
  visible.value = false;
};
const handleNestedClick = () => {
  nestedVisible.value = true;
};
const handleNestedOk = () => {
  nestedVisible.value = false;
};
const handleNestedCancel = () => {
  nestedVisible.value = false;
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
  <yc-button
    type="primary"
    @click="handleClick"
    >Open Drawer</yc-button
  >
  <yc-drawer
    :visible="visible"
    :width="500"
    @ok="handleOk"
    @cancel="handleCancel">
    <template #title> Title </template>
    <div :style="{ marginBottom: '20px' }">
      You can customize modal body text by the current situation. This modal
      will be closed immediately once you press the OK button.
    </div>
    <yc-button
      type="primary"
      @click="handleNestedClick"
      >Open Nested Drawer</yc-button
    >
  </yc-drawer>
  <yc-drawer
    :visible="nestedVisible"
    @ok="handleNestedOk"
    @cancel="handleNestedCancel">
    <template #title> Title </template>
    <div>
      You can customize modal body text by the current situation. This modal
      will be closed immediately once you press the OK button.
    </div>
  </yc-drawer>
</template>

<script setup>
import { ref } from 'vue';
const visible = ref(false);
const nestedVisible = ref(false);

const handleClick = () => {
  visible.value = true;
};
const handleOk = () => {
  visible.value = false;
};
const handleCancel = () => {
  visible.value = false;
};
const handleNestedClick = () => {
  nestedVisible.value = true;
};
const handleNestedOk = () => {
  nestedVisible.value = false;
};
const handleNestedCancel = () => {
  nestedVisible.value = false;
};
</script>
```

</details>
