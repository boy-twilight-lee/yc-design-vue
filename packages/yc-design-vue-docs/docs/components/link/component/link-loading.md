### 加载中状态

通过设置 `loading` 可以让链接处于加载中状态。处于加载中状态的链接不会触发点击事件。

 <div class='cell-demo vp-raw'>
  <yc-space>
    <yc-link loading>Link</yc-link>
    <yc-link :loading="loading1" @click="handleClick1">Link</yc-link>
    <yc-link :loading="loading2" @click="handleClick2">
      <template #icon>
        <icon-edit />
      </template>
      Link
    </yc-link>
  </yc-space>
</div>

<script setup>
import { ref } from 'vue';
const loading1 = ref(false);
const loading2 = ref(false);
const handleClick1 = () => {
  loading1.value = true;
  setTimeout(() => {
    loading1.value = false;
  }, 3000);
};
const handleClick2 = () => {
  loading2.value = true;
  setTimeout(() => {
    loading2.value = false;
  }, 3000);
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
  <yc-space>
    <yc-link loading>Link</yc-link>
    <yc-link
      :loading="loading1"
      @click="handleClick1"
      >Link</yc-link
    >
    <yc-link
      :loading="loading2"
      @click="handleClick2">
      <template #icon>
        <icon-edit />
      </template>
      Link
    </yc-link>
  </yc-space>
</template>

<script setup>
import { ref } from 'vue';
const loading1 = ref(false);
const loading2 = ref(false);
const handleClick1 = () => {
  loading1.value = true;
  setTimeout(() => {
    loading1.value = false;
  }, 3000);
};
const handleClick2 = () => {
  loading2.value = true;
  setTimeout(() => {
    loading2.value = false;
  }, 3000);
};
</script>
```

</details>
