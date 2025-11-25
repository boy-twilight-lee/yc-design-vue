### 异步关闭

可以通过 `on-before-ok` 更简洁的实现异步关闭功能

<div class="cell-demo vp-raw">
  <yc-button @click="handleClick">Open Modal</yc-button>
  <yc-modal
    v-model:visible="visible"
    @cancel="handleCancel"
    :on-before-ok="handleBeforeOk"
    >
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
const handleBeforeOk = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return true;
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
  <yc-button @click="handleClick">Open Modal</yc-button>
  <yc-modal
    v-model:visible="visible"
    @cancel="handleCancel"
    :on-before-ok="handleBeforeOk">
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
const handleBeforeOk = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return true;
};
const handleCancel = () => {
  visible.value = false;
};
</script>
```

</details>
