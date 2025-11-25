### 多行文本

通过 `content` 设置字符串数组可指定多行文字水印内容。

<div class="cell-demo vp-raw">
  <yc-watermark :content="['yc-design', dayjs().format('YYYY-MM-DD')]">
    <div style="width: 100%; height: 300px;" />
  </yc-watermark>
</div>

<script setup>
import dayjs from 'dayjs';
</script>

<details>
<summary>
 <button class="code-btn"  >
    <icon-code />
 </button>
</summary>

```vue
<template>
  <yc-watermark :content="['yc-design', dayjs().format('YYYY-MM-DD')]">
    <div style="width: 100%; height: 300px;" />
  </yc-watermark>
</template>

<script setup>
import dayjs from 'dayjs';
</script>
```

</details>
