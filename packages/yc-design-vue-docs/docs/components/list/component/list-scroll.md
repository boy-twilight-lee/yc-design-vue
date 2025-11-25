### 滚动

通过设置 `max-height` 属性限制列表的最大高度。通过 `reach-bottom` 事件可以监听列表触底的事件。

<div class="cell-demo vp-raw">
  <yc-list
    :max-height="240"
    @reach-bottom="fetchData">
    <template #header> List title </template>
    <template #scroll-loading>
      <div v-if="bottom">No more data</div>
      <yc-spin v-else />
    </template>
    <yc-list-item v-for="item of data">{{ item }}</yc-list-item>
  </yc-list>
</div>

<script setup>
import { reactive, ref } from 'vue';
const current = ref(1);
const bottom = ref(false);
const data = reactive([]);
const fetchData = () => {
  console.log('reach bottom!');
  if (current.value <= 5) {
    setTimeout(() => {
      const index = data.length;
      data.push(
        `Beijing Bytedance Technology Co., Ltd. ${index + 1}`,
        `Bytedance Technology Co., Ltd. ${index + 2}`,
        `Beijing Toutiao Technology Co., Ltd. ${index + 3}`,
        `Beijing Volcengine Technology Co., Ltd. ${index + 4}`,
        `China Beijing Bytedance Technology Co., Ltd. ${index + 5}`
      );
      current.value += 1;
    }, 2000);
  } else {
    bottom.value = true;
  }
};
fetchData();
</script>

<details>
<summary>
 <button class="code-btn"  >
    <icon-code />
 </button>
</summary>

```vue
<template>
  <yc-list
    :max-height="240"
    @reach-bottom="fetchData">
    <template #header> List title </template>
    <template #scroll-loading>
      <div v-if="bottom">No more data</div>
      <yc-spin v-else />
    </template>
    <yc-list-item v-for="item of data">{{ item }}</yc-list-item>
  </yc-list>
</template>

<script setup>
import { reactive, ref } from 'vue';
const current = ref(1);
const bottom = ref(false);
const data = reactive([]);
const fetchData = () => {
  console.log('reach bottom!');
  if (current.value <= 5) {
    setTimeout(() => {
      const index = data.length;
      data.push(
        `Beijing Bytedance Technology Co., Ltd. ${index + 1}`,
        `Bytedance Technology Co., Ltd. ${index + 2}`,
        `Beijing Toutiao Technology Co., Ltd. ${index + 3}`,
        `Beijing Volcengine Technology Co., Ltd. ${index + 4}`,
        `China Beijing Bytedance Technology Co., Ltd. ${index + 5}`
      );
      current.value += 1;
    }, 2000);
  } else {
    bottom.value = true;
  }
};
fetchData();
</script>
```

</details>
