### 抽屉位置本用法

自定义位置，点击触发按钮抽屉从相应的位置滑出。

<div class="cell-demo vp-raw">
  <yc-radio-group v-model="position">
    <yc-radio value="top">Top</yc-radio>
    <yc-radio value="right">Right</yc-radio>
    <yc-radio value="bottom">Bottom</yc-radio>
    <yc-radio value="left">Left</yc-radio>
  </yc-radio-group>
  <div :style="{ marginTop: '20px' }">
    <yc-button
      type="primary"
      @click="handleClick"
      >Open Drawer</yc-button
    >
  </div>
  <yc-drawer
    :width="340"
    :height="340"
    :visible="visible"
    :placement="position"
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
const position = ref('right');
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
  <yc-radio-group v-model="position">
    <yc-radio value="top">Top</yc-radio>
    <yc-radio value="right">Right</yc-radio>
    <yc-radio value="bottom">Bottom</yc-radio>
    <yc-radio value="left">Left</yc-radio>
  </yc-radio-group>
  <div :style="{ marginTop: '20px' }">
    <yc-button
      type="primary"
      @click="handleClick"
      >Open Drawer</yc-button
    >
  </div>
  <yc-drawer
    :width="340"
    :height="340"
    :visible="visible"
    :placement="position"
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
const position = ref('right');
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
