### 弹出框的页脚

自定义弹出框的页脚


<div class="cell-demo vp-raw">
  <yc-auto-complete
    :data="data"
    @search="handleSearch"
    :style="{ width: '360px' }"
    placeholder="please enter something">
    <template #footer>
      <div style="padding: 6px 0; text-align: center;">
        <yc-button>Click Me</yc-button>
      </div>
    </template>
  </yc-auto-complete>
</div>


<script setup>
import { ref } from 'vue';
const data = ref([]);
const handleSearch = (value) => {
  if (value) {
    data.value =  [...Array(5)].map((_, index) => `${value}-${index}`);
  } else {
    data.value =  [];
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
    placeholder="please enter something">
    <template #footer>
      <div style="padding: 6px 0; text-align: center;">
        <yc-button>Click Me</yc-button>
      </div>
    </template>
  </yc-auto-complete>
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
