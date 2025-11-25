### 函数调用

通过函数的方式使用抽屉。

<div class="cell-demo vp-raw">
  <yc-button
    type="primary"
    @click="handleClick"
    >Open Drawer</yc-button
  >
</div>

<script setup>
import { Drawer } from 'yc-design-vue';
const handleClick = () => {
  Drawer.open({
    title: 'Info Title',
    content: 'This is an info message',
    width: 340,
  });
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
  <yc-button
    type="primary"
    @click="handleClick"
    >Open Drawer</yc-button
  >
</template>

<script setup>
import { Drawer } from 'yc-design-vue';
const handleClick = () => {
  Drawer.open({
    title: 'Info Title',
    content: 'This is an info message',
    width: 340,
  });
};
</script>
```

</details>
