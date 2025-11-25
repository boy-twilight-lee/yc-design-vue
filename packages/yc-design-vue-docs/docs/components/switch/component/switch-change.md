### 切换拦截

设置 `beforeChange` 函数，函数的返回值将用于判断是否阻止切换。

<div class="cell-demo vp-raw">
  <yc-space size="large">
    <yc-switch :beforeChange="handleChangeIntercept" />
    <yc-switch
      type="round"
      :beforeChange="handleChangeIntercept2" />
    <yc-switch
      type="line"
      :beforeChange="handleChangeIntercept3" />
  </yc-space>
</div>

<script setup>
import { Message } from 'yc-design-vue';
const handleChangeIntercept = async (newValue) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return true;
};
const handleChangeIntercept2 = async (newValue) => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  if (!newValue) {
    Message.error("OH, You can't change");
    return false;
  }
  return true;
};
const handleChangeIntercept3 = async (newValue) => {
  await new Promise((_, reject) =>
    setTimeout(() => {
      Message.error('OH, Something went wrong');
      reject();
    }, 1000)
  );
  return true;
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
  <yc-space size="large">
    <yc-switch :beforeChange="handleChangeIntercept" />
    <yc-switch
      type="round"
      :beforeChange="handleChangeIntercept2" />
    <yc-switch
      type="line"
      :beforeChange="handleChangeIntercept3" />
  </yc-space>
</template>

<script setup>
import { Message } from 'yc-design-vue';
const handleChangeIntercept = async (newValue) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return true;
};
const handleChangeIntercept2 = async (newValue) => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  if (!newValue) {
    Message.error("OH, You can't change");
    return false;
  }
  return true;
};
const handleChangeIntercept3 = async (newValue) => {
  await new Promise((_, reject) =>
    setTimeout(() => {
      Message.error('OH, Something went wrong');
      reject();
    }, 1000)
  );
  return true;
};
</script>
```

</details>
