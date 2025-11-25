### 可拖动

开启 draggable 属性，允许用户拖动对话框。

<div class="cell-demo vp-raw">
  <yc-button @click="handleClick">Open Draggable Modal</yc-button>
  <yc-modal
    v-model:visible="visible"
    @ok="handleOk"
    @cancel="handleCancel"
    draggable>
    <template #title> Title </template>
    <div>
      You can customize modal body text by the current situation. This modal
      will be closed immediately once you press the OK button.
    </div>
  </yc-modal>
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
  <yc-button @click="handleClick">Open Draggable Modal</yc-button>
  <yc-modal
    v-model:visible="visible"
    @ok="handleOk"
    @cancel="handleCancel"
    draggable>
    <template #title> Title </template>
    <div>
      You can customize modal body text by the current situation. This modal
      will be closed immediately once you press the OK button.
    </div>
  </yc-modal>
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
