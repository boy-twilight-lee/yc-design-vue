### 自定义节点

通过插槽自定义内容，或者设置相应属性来控制显示或隐藏。

<div class="cell-demo vp-raw">
  <yc-checkbox-group
    v-model="custom"
    :options="['hide header', 'hide footer', 'hide cancel']" />
  <div :style="{ marginTop: '20px' }">
    <yc-button
      type="primary"
      @click="handleClick"
      >Open Drawer</yc-button
    >
  </div>
  <yc-drawer
    :width="340"
    :header="!custom.includes('hide header')"
    :footer="!custom.includes('hide footer')"
    :hide-cancel="custom.includes('hide cancel')"
    :visible="visible"
    @ok="handleOk"
    @cancel="handleCancel"
    >
    <template #header>
      <span>Header and title</span>
    </template>
    <div>
      You can customize modal body text by the current situation. This modal
      will be closed immediately once you press the OK button.
    </div>
  </yc-drawer>
</div>

<script setup>
import { ref } from 'vue';
const visible = ref(false);
const custom = ref([]);

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
  <yc-checkbox-group
    v-model="custom"
    :options="['hide header', 'hide footer', 'hide cancel']" />
  <div :style="{ marginTop: '20px' }">
    <yc-button
      type="primary"
      @click="handleClick"
      >Open Drawer</yc-button
    >
  </div>
  <yc-drawer
    :width="340"
    :header="!custom.includes('hide header')"
    :footer="!custom.includes('hide footer')"
    :hide-cancel="custom.includes('hide cancel')"
    :visible="visible"
    @ok="handleOk"
    @cancel="handleCancel">
    <template #header>
      <span>Header and title</span>
    </template>
    <div>
      You can customize modal body text by the current situation. This modal
      will be closed immediately once you press the OK button.
    </div>
  </yc-drawer>
</template>

<script setup>
import { ref } from 'vue';
const visible = ref(false);
const custom = ref([]);

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
