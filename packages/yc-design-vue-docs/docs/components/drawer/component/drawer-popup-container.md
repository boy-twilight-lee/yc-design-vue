### 挂载位置

通过 `popup-container` 可以设置弹出层节点的挂载位置

<div class="cell-demo vp-raw">
  <div>
    <div
      ref="containerRef"
      style="width: 100%; height: 300px; background-color: var(--color-fill-2); position: relative; overflow: hidden;  text-align: center;display:flex;justify-content:center;align-items:center;">
      <yc-button
        type="primary"
        @click="handleClick"
        >Open Drawer</yc-button
      >
    </div>
  </div>
  <yc-drawer
    :popup-container="containerRef"
    :visible="visible"
    @ok="handleOk"
    @cancel="handleCancel">
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
const containerRef = ref()
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
  <div>
    <div
      id="parentNode"
      style="width: 100%; height: 300px; background-color: var(--color-fill-2); position: relative; overflow: hidden;  text-align: center;">
      <yc-button
        type="primary"
        @click="handleClick"
        >Open Drawer</yc-button
      >
    </div>
  </div>
  <yc-drawer
    popup-container="#parentNode"
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
