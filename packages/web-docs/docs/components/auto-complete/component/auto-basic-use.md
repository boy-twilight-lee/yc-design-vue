### 基本用法

自动补全的基础用法

<div class="cell-demo vp-raw">
  <yc-auto-complete
    :data="data"
    @search="handleSearch"
    :style="{ width: '360px' }"
    placeholder="please enter something" />
</div>

<script setup>
import { ref } from 'vue';
const data = ref([]);
const handleSearch = (value) => {
  if (value) {
    data.value = [...Array(5)].map((_, index) => `${value}-${index}`);
  } else {
    data.value = [];
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
  <yc-auto-complete
    :data="data"
    @search="handleSearch"
    :style="{ width: '360px' }"
    placeholder="please enter something" />
</template>

<script setup>
import { ref } from 'vue';
const data = ref([]);
const handleSearch = (value) => {
  if (value) {
    data.value = [...Array(5)].map((_, index) => `${value}-${index}`);
  } else {
    data.value = [];
  }
};
</script>
```

</details>
