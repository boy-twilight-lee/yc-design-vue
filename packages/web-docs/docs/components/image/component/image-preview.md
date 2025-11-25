### 单独使用预览组件

组件 `<yc-image-preview>` 可单独使用，需要手动控制 `visible`。

<div class="cell-demo vp-raw">
  <yc-button
    type="primary"
    @click="onClick"
    >Click me to preview image</yc-button
  >
  <yc-image-preview
    src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp"
    v-model:visible="visible" />
</div>

<script setup>
import { ref } from 'vue';
const visible = ref(false);
const onClick = () => {
  visible.value = true;
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
    @click="onClick"
    >Click me to preview image</yc-button
  >
  <yc-image-preview
    src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp"
    v-model:visible="visible" />
</template>

<script setup>
import { ref } from 'vue';
const visible = ref(false);
const onClick = () => {
  visible.value = true;
};
</script>
```

</details>
