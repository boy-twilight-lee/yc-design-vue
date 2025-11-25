### 基本使用

用于在输入中提及某人或某事，常用于发布、聊天或评论功能。

<div class="cell-demo vp-raw">
  <yc-space
    direction="vertical"
    size="large"
    style="width: 100%">
    <yc-mention
      v-model="value"
      :data="['Bytedance', 'Bytedesign', 'Bytenumner']"
      placeholder="enter something" />
    <yc-mention
      v-model="text"
      :data="['Bytedance', 'Bytedesign', 'Bytenumner']"
      type="textarea"
      placeholder="enter something" />
  </yc-space>
</div>

<script setup>
import { ref } from 'vue';
const value = ref('');
const text = ref('');
</script>

<details>
<summary>
 <button class="code-btn"  >
    <icon-code />
 </button>
</summary>

```vue
<template>
  <yc-space
    direction="vertical"
    size="large"
    style="width: 100%">
    <yc-mention
      v-model="value"
      :data="['Bytedance', 'Bytedesign', 'Bytenumner']"
      placeholder="enter something" />
    <yc-mention
      v-model="text"
      :data="['Bytedance', 'Bytedesign', 'Bytenumner']"
      type="textarea"
      placeholder="enter something" />
  </yc-space>
</template>

<script setup>
import { ref } from 'vue';
const value = ref('');
const text = ref('');
</script>
```

</details>
