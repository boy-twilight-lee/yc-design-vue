### 远程搜索

使用 `search` 事件进行远程搜索，并改变选项。

<div class="cell-demo vp-raw">
  <yc-space
    direction="vertical"
    size="large">
    <div>Show selections after search options</div>
    <yc-select
      :style="{ width: '320px' }"
      :loading="loading"
      placeholder="Please select ..."
      multiple
      @search="handleSearch"
      :filter-option="false">
      <yc-option
        v-for="item of options"
        :value="item"
        >{{ item }}</yc-option
      >
    </yc-select>
    <div>Hide selections after search options</div>
    <yc-select
      :options="options"
      :style="{ width: '320px' }"
      :loading="loading"
      placeholder="Please select ..."
      multiple
      @search="handleSearch"
      :filter-option="false"
      :show-extryc-options="false" />
  </yc-space>
</div>

<script setup>
import { ref } from 'vue';
const options = ref(['Option1', 'Option2', 'Option3']);
const loading = ref(false);
const handleSearch = (value) => {
  if (value) {
    loading.value = true;
    window.setTimeout(() => {
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
    <div>Show selections after search options</div>
    <yc-select
      :style="{ width: '320px' }"
      :loading="loading"
      placeholder="Please select ..."
      multiple
      @search="handleSearch"
      :filter-option="false">
      <yc-option
        v-for="item of options"
        :value="item"
        >{{ item }}</yc-option
      >
    </yc-select>
    <div>Hide selections after search options</div>
    <yc-select
      :options="options"
      :style="{ width: '320px' }"
      :loading="loading"
      placeholder="Please select ..."
      multiple
      @search="handleSearch"
      :filter-option="false"
      :show-extryc-options="false" />
  </yc-space>
</template>

<script setup>
import { ref } from 'vue';
const options = ref(['Option1', 'Option2', 'Option3']);
const loading = ref(false);
const handleSearch = (value) => {
  if (value) {
    loading.value = true;
    window.setTimeout(() => {
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
