### 基本用法

点击触发按钮抽屉从右侧滑出，点击遮罩区关闭。

<div class="cell-demo vp-raw">
  <yc-button
    type="primary"
    @click="handleClick"
    >Open Drawer</yc-button
  >
  <yc-drawer
    :width="340"
    :visible="visible"
    @ok="handleOk"
    @cancel="handleCancel"
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
const handleClick = () => {
  visible.value = true;
};
const handleOk = () => {
  visible.value = false;
};
const handleCancel = () => {
  visible.value = false;
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
    :width="340"
    :visible="visible"
    @ok="handleOk"
    @cancel="handleCancel">
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
const handleClick = () => {
  visible.value = true;
};
const handleOk = () => {
  visible.value = false;
};
const handleCancel = () => {
  visible.value = false;
};
</script>
```

</details>
