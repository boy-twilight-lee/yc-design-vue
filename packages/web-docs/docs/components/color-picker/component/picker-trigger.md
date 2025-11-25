### 触发器

可以通过 `trigger-props` 设置触发器的所有属性。

<div class="cell-demo vp-raw">
  <yc-space direction="vertical">
    <yc-switch v-model="triggerProps.popupVisible">
      <template #checked> ON </template>
      <template #unchecked>OFF</template>
    </yc-switch>
    <yc-color-picker
      defaultValue="#165DFF"
      :trigger-props="triggerProps" />
  </yc-space>
</div>

<script setup>
import { ref } from 'vue';
const triggerProps = ref({
  popupVisible: false,
  unmountOnClose: true,
  position: 'rt',
});
</script>

<details>
<summary>
 <button class="code-btn"  >
    <icon-code />
 </button>
</summary>

```vue
<template>
  <yc-space direction="vertical">
    <yc-switch v-model="triggerProps.popupVisible">
      <template #checked> ON </template>
      <template #unchecked>OFF</template>
    </yc-switch>
    <yc-color-picker
      defaultValue="#165DFF"
      :trigger-props="triggerProps" />
  </yc-space>
</template>

<script setup>
import { ref } from 'vue';
const triggerProps = ref({
  popupVisible: false,
  unmountOnClose: true,
  position: 'rt',
});
</script>
```

</details>
