### 全屏

开启 `fullscreen` 属性，可以让对话框占满整个容器。

<div class="cell-demo vp-raw">
  <yc-button @click="handleClick">Open Modal</yc-button>
  <yc-modal
    v-model:visible="visible"
    @ok="handleOk"
    @cancel="handleCancel"
    fullscreen>
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
<style>
.info-modal-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>

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
    @ok="handleOk"
    @cancel="handleCancel"
    fullscreen>
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
