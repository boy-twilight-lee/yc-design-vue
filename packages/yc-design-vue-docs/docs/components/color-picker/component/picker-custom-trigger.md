### 自定义触发元素

自定义触发元素。

<div class="cell-demo vp-raw">
  <yc-space>
    <yc-color-picker
      v-model="value"
      size="mini">
      <yc-tag :color="value">
        <template #icon>
          <icon-bg-colors style="color: #fff" />
        </template>
        {{ value }}
       </yc-tag>
    </yc-color-picker>
  </yc-space>
</div>

<script setup>
import { ref } from 'vue';
const value = ref('#165DFF');
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
    <yc-color-picker
      v-model="value"
      size="mini">
      <yc-tag :color="value">
        <template #icon>
          <icon-bg-colors style="color: #fff" />
        </template>
        {{ value }}
      </yc-tag>
    </yc-color-picker>
  </yc-space>
</template>

<script setup>
import { ref } from 'vue';
const value = ref('#165DFF');
</script>
```

</details>
