### 联动选择框

展示联动选择框的实现方法。

<div class="cell-demo vp-raw">
  <yc-space>
    <yc-select
      :style="{ width: '200px' }"
      v-model="province">
      <yc-option v-for="value of Object.keys(data)">{{ value }}</yc-option>
    </yc-select>
    <yc-select
      :style="{ width: '200px' }"
      :options="data[province] || []"
      v-model="city" />
  </yc-space>
</div>

<script setup>
import { ref, watch } from 'vue';
const province = ref('Sichuan');
const city = ref('Chengdu');
const data = {
  Beijing: ['Haidian', 'Chaoyang', 'Changping'],
  Sichuan: ['Chengdu', 'Mianyang', 'Aba'],
  Guangdong: ['Guangzhou', 'Shenzhen', 'Shantou'],
};
watch(province, () => {
  city.value = '';
});
</script>

<details>
<summary>
 <button class="code-btn"  >
    <icon-code />
 </button>
</summary>

```vue
<template>
  <yc-space>
    <yc-select
      :style="{ width: '200px' }"
      v-model="province">
      <yc-option v-for="value of Object.keys(data)">{{ value }}</yc-option>
    </yc-select>
    <yc-select
      :style="{ width: '200px' }"
      :options="data[province] || []"
      v-model="city" />
  </yc-space>
</template>

<script setup>
import { ref, watch } from 'vue';
const province = ref('Sichuan');
const city = ref('Chengdu');
const data = {
  Beijing: ['Haidian', 'Chaoyang', 'Changping'],
  Sichuan: ['Chengdu', 'Mianyang', 'Aba'],
  Guangdong: ['Guangzhou', 'Shenzhen', 'Shantou'],
};
watch(province, () => {
  city.value = '';
});
</script>
```

</details>
