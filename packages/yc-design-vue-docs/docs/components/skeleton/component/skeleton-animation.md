### 动画

通过设置 `animation` 属性，让骨架屏显示动画效果。

<div class="cell-demo vp-raw">
  <yc-space
    direction="vertical"
    size="large"
    :style="{ width: '100%' }">
    <yc-space>
      <span>Animation</span>
      <yc-switch v-model="animation" />
    </yc-space>
    <yc-skeleton :animation="animation" style="width:100%">
      <yc-space
        direction="vertical"
        :style="{ width: '100%' }"
        size="large">
        <yc-skeleton-line :rows="3" />
        <yc-skeleton-shape />
      </yc-space>
    </yc-skeleton>
  </yc-space>
</div>

<script setup>
import { ref } from 'vue';
const animation = ref(true);
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
    :style="{ width: '100%' }">
    <yc-space>
      <span>Animation</span>
      <yc-switch v-model="animation" />
    </yc-space>
    <yc-skeleton :animation="animation">
      <yc-space
        direction="vertical"
        :style="{ width: '100%' }"
        size="large">
        <yc-skeleton-line :rows="3" />
        <yc-skeleton-shape />
      </yc-space>
    </yc-skeleton>
  </yc-space>
</template>

<script setup>
import { ref } from 'vue';
const animation = ref(true);
</script>
```

</details>
