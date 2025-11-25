### 定制按钮文字

设置 `okText` 与 `cancelText` 可以自定义按钮文字。

<div class="cell-demo vp-raw">
  <yc-button @click="handleClick">Open Modal</yc-button>
  <yc-modal :visible="visible" @ok="handleOk" @cancel="handleCancel" okText="Confirm" cancelText="Exit" >
    <template #title>
      Title
    </template>
    <div>You can customize modal body text by the current situation. This modal will be closed immediately once you press the OK button.</div>
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
  <yc-button @click="handleClick">Open Modal</yc-button>
  <yc-modal
    :visible="visible"
    @ok="handleOk"
    @cancel="handleCancel"
    okText="Confirm"
    cancelText="Exit">
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
