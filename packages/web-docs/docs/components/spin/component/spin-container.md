### 容器中

可以给任意内容添加加载中指示符。

<div class="cell-demo vp-raw">
  <yc-spin
    :loading="loading"
    tip="This may take a while...">
    <yc-card title="Arco Card">
      ByteDance's core product, Toutiao ('Headlines'), is a content platform in
      China and around the world. Toutiao started out as a news recommendation
      engine and gradually evolved into a platform delivering content in various
      formats.
    </yc-card>
  </yc-spin>
</div>

<script setup>
import { ref } from 'vue';
const loading = ref(true);
</script>

<details>
<summary>
 <button class="code-btn"  >
    <icon-code />
 </button>
</summary>

```vue
<template>
  <yc-spin
    :loading="loading"
    tip="This may take a while...">
    <yc-card title="Arco Card">
      ByteDance's core product, Toutiao ('Headlines'), is a content platform in
      China and around the world. Toutiao started out as a news recommendation
      engine and gradually evolved into a platform delivering content in various
      formats.
    </yc-card>
  </yc-spin>
</template>

<script setup>
import { ref } from 'vue';
const loading = ref(true);
</script>
```

</details>
