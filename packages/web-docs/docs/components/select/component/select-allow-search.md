### 允许创建

通过设置 `allow-search` ，可以让选择器支持对选项的搜索，配合 `filter-option` 可以自定义搜索。。

<div class="cell-demo vp-raw">
  <yc-space
    direction="vertical"
    size="large">
    <yc-select
      :style="{ width: '320px' }"
      placeholder="Please select ..."
      allow-search>
      <yc-option>Beijing</yc-option>
      <yc-option>Shanghai</yc-option>
      <yc-option>Guangzhou</yc-option>
      <yc-option disabled>Disabled</yc-option>
      <yc-option>Shenzhen</yc-option>
      <yc-option>Chengdu</yc-option>
      <yc-option>Wuhan</yc-option>
    </yc-select>
    <yc-select
      :style="{ width: '320px' }"
      placeholder="Please select ..."
      :allow-search="{ retainInputValue: true }">
      <yc-option>Beijing</yc-option>
      <yc-option>Shanghai</yc-option>
      <yc-option>Guangzhou</yc-option>
      <yc-option disabled>Disabled</yc-option>
      <yc-option>Shenzhen</yc-option>
      <yc-option>Chengdu</yc-option>
      <yc-option>Wuhan</yc-option>
    </yc-select>
    <yc-select
      :options="options"
      :style="{ width: '320px' }"
      :loading="loading"
      placeholder="Please select ..."
      multiple
      @search="handleSearch" />
  </yc-space>
</div>

<script setup>
import { ref } from 'vue';
const options = ref(['Option1', 'Option2', 'Option3']);
const loading = ref(false);
const handleSearch = (value) => {
  if (value) {
    loading.value = true;
    setTimeout(() => {
      options.value = [
        `${value}-Option1`,
        `${value}-Option2`,
        `${value}-Option3`,
      ];
      loading.value = false;
    }, 2000);
  } else {
    options.value = [];
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
  <yc-space
    direction="vertical"
    size="large">
    <yc-select
      :style="{ width: '320px' }"
      placeholder="Please select ..."
      allow-search>
      <yc-option>Beijing</yc-option>
      <yc-option>Shanghai</yc-option>
      <yc-option>Guangzhou</yc-option>
      <yc-option disabled>Disabled</yc-option>
      <yc-option>Shenzhen</yc-option>
      <yc-option>Chengdu</yc-option>
      <yc-option>Wuhan</yc-option>
    </yc-select>
    <yc-select
      :style="{ width: '320px' }"
      placeholder="Please select ..."
      :allow-search="{ retainInputValue: true }">
      <yc-option>Beijing</yc-option>
      <yc-option>Shanghai</yc-option>
      <yc-option>Guangzhou</yc-option>
      <yc-option disabled>Disabled</yc-option>
      <yc-option>Shenzhen</yc-option>
      <yc-option>Chengdu</yc-option>
      <yc-option>Wuhan</yc-option>
    </yc-select>
    <yc-select
      :options="options"
      :style="{ width: '320px' }"
      :loading="loading"
      placeholder="Please select ..."
      multiple
      @search="handleSearch" />
  </yc-space>
</template>

<script setup>
import { ref } from 'vue';
const options = ref(['Option1', 'Option2', 'Option3']);
const loading = ref(false);
const handleSearch = (value) => {
  if (value) {
    loading.value = true;
    setTimeout(() => {
      options.value = [
        `${value}-Option1`,
        `${value}-Option2`,
        `${value}-Option3`,
      ];
      loading.value = false;
    }, 2000);
  } else {
    options.value = [];
  }
};
</script>
```

</details>
