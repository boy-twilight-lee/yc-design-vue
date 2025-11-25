### 显示 Caption

通过设置 `title` 和 `description` 可以将图片的标题和描述显示在图片内部或者底部，显示的位置通过 `footerPosition` 控制。

<div class="cell-demo vp-raw">
  <yc-image
    width="200px"
    :src="src"
    :title="title"
    :description="description" />
  <yc-image
    width="200px"
    :src="src"
    :title="title"
    :description="description"
    footerPosition="outer"
    style="margin-left: 67px; vertical-align: top;" />
</div>

<script setup>
import { ref } from 'vue';
const src = ref(
  'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp'
);
const title = ref('A user’s avatar');
const description = ref('Present by Arco Design');
</script>

<details>
<summary>
 <button class="code-btn"  >
    <icon-code />
 </button>
</summary>

```vue
<template>
  <yc-image
    width="200px"
    :src="src"
    :title="title"
    :description="description" />
  <yc-image
    width="200px"
    :src="src"
    :title="title"
    :description="description"
    footerPosition="outer"
    style="margin-left: 67px; vertical-align: top;" />
</template>

<script setup>
import { ref } from 'vue';
const src = ref(
  'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp'
);
const title = ref('A user’s avatar');
const description = ref('Present by Arco Design');
</script>
```

</details>
