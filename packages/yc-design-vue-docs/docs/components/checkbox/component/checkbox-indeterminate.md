### 全选

在实现全选的功能时，可以通过 `indeterminate` 属性展示半选效果。

<div class="cell-demo vp-raw">
  <yc-space direction="vertical">
    <yc-checkbox
      :model-value="checkedAll"
      :indeterminate="indeterminate"
      @change="handleChangeAll"
      >Check All
    </yc-checkbox>
    <yc-checkbox-group
      v-model="data"
      @change="handleChange">
      <yc-checkbox value="1">Option 1</yc-checkbox>
      <yc-checkbox value="2">Option 2</yc-checkbox>
      <yc-checkbox value="3">Option 3</yc-checkbox>
    </yc-checkbox-group>
  </yc-space>
</div>

<script setup>
import { ref } from 'vue';
const indeterminate = ref(false);
const checkedAll = ref(false);
const data = ref([]);
const handleChangeAll = (value) => {
  indeterminate.value = false;
  if (value) {
    checkedAll.value = true;
    data.value = ['1', '2', '3'];
  } else {
    checkedAll.value = false;
    data.value = [];
  }
};
const handleChange = (values) => {
  if (values.length === 3) {
    checkedAll.value = true;
    indeterminate.value = false;
  } else if (values.length === 0) {
    checkedAll.value = false;
    indeterminate.value = false;
  } else {
    checkedAll.value = false;
    indeterminate.value = true;
  }
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
  <yc-space direction="vertical">
    <yc-checkbox
      :model-value="checkedAll"
      :indeterminate="indeterminate"
      @change="handleChangeAll"
      >Check All
    </yc-checkbox>
    <yc-checkbox-group
      v-model="data"
      @change="handleChange">
      <yc-checkbox value="1">Option 1</yc-checkbox>
      <yc-checkbox value="2">Option 2</yc-checkbox>
      <yc-checkbox value="3">Option 3</yc-checkbox>
    </yc-checkbox-group>
  </yc-space>
</template>

<script setup>
import { ref } from 'vue';
const indeterminate = ref(false);
const checkedAll = ref(false);
const data = ref([]);
const handleChangeAll = (value) => {
  indeterminate.value = false;
  if (value) {
    checkedAll.value = true;
    data.value = ['1', '2', '3'];
  } else {
    checkedAll.value = false;
    data.value = [];
  }
};
const handleChange = (values) => {
  if (values.length === 3) {
    checkedAll.value = true;
    indeterminate.value = false;
  } else if (values.length === 0) {
    checkedAll.value = false;
    indeterminate.value = false;
  } else {
    checkedAll.value = false;
    indeterminate.value = true;
  }
};
</script>
```

</details>
