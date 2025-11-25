### 渐进加载

大图可通过给 `loader` 传递一个小一些的图片，让其在原图未被加载成功时显示，以此来模拟渐进加载。

<div class="cell-demo vp-raw">
  <div>
    <yc-button
      type="primary"
      @click="
        () => {
          timestamp = Date.now();
        }
      "
      style="margin-bottom: 20px;">
      reload
    </yc-button>
  </div>
  <yc-image
    width="200"
    height="200"
    :src="`https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp?timestamp=${timestamp}`">
    <template #loader>
      <img
        width="200"
        src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp"
        style="filter: blur(5px);" />
    </template>
  </yc-image>
</div>

<script setup>
import { ref } from 'vue';
const timestamp = ref('');
</script>

<details>
<summary>
 <button class="code-btn"  >
    <icon-code />
 </button>
</summary>

```vue
<template>
  <div>
    <yc-button
      type="primary"
      @click="
        () => {
          timestamp = Date.now();
        }
      "
      style="margin-bottom: 20px;">
      reload
    </yc-button>
  </div>
  <yc-image
    width="200"
    height="200"
    :src="`https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp?timestamp=${timestamp}`">
    <template #loader>
      <img
        width="200"
        src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp"
        style="filter: blur(5px);" />
    </template>
  </yc-image>
</template>

<script setup>
import { ref } from 'vue';
const timestamp = ref('');
</script>
```

</details>
