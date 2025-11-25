### 加载中状态

通过设置 `loading` 可以让按钮处于加载中状态。处于加载中状态的按钮不会触发事件。

<div class='cell-demo vp-raw'>
  <yc-space>
    <yc-button type="primary" loading>Primary</yc-button>
    <yc-button loading>Default</yc-button>
    <yc-button type="dashed" loading>Dashed</yc-button>
    <yc-button type="primary" :loading="loading1" @click="handleClick1">Click Me</yc-button>
    <yc-button type="primary" :loading="loading2" @click="handleClick2">
      <template #icon>
        <icon-plus />
      </template>
      Click Me
    </yc-button>
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
    <yc-button
      type="primary"
      loading
      >Primary</yc-button
    >
    <yc-button loading>Default</yc-button>
    <yc-button
      type="dashed"
      loading
      >Dashed</yc-button
    >
    <yc-button
      type="primary"
      :loading="loading1"
      @click="handleClick1"
      >Click Me</yc-button
    >
    <yc-button
      type="primary"
      :loading="loading2"
      @click="handleClick2">
      <template #icon>
        <icon-plus />
      </template>
      Click Me
    </yc-button>
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
