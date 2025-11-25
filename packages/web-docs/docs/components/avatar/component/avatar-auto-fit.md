### 自动调整字体大小

如果头像是文字的话，会自动调节字体大小，来适应头像框。

<div class="cell-demo vp-raw">
  <yc-avatar
    :style="{
      marginRight: '24px',
      verticalAlign: 'middle',
      backgroundColor: '#14a9f8',
    }"
  >
    {{ text }}
  </yc-avatar>
  <yc-button
    type="secondary"
    @click="onClick"
    :style="{ verticalAlign: 'middle' }"
  >
    Change
  </yc-button>
</div>

<script setup>
import { computed, ref } from 'vue';
const list = ['B', 'Arco', 'Design', 'Tom', 'AD'];
const index = ref(0);
const text = computed(() => list[index.value]);
const onClick = () => {
  index.value = index.value >= list.length - 1 ? 0 : index.value + 1;
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
  <yc-space
    size="large"
    direction="vertical">
    <yc-space size="large">
      <yc-avatar :size="64">Arco</yc-avatar>
      <yc-avatar :size="40">Arco</yc-avatar>
      <yc-avatar :size="32">Arco</yc-avatar>
      <yc-avatar :size="24">Arco</yc-avatar>
    </yc-space>
    <yc-space size="large">
      <yc-avatar
        :size="64"
        shape="square"
        >Arco</yc-avatar
      >
      <yc-avatar
        :size="40"
        shape="square"
        >Arco</yc-avatar
      >
      <yc-avatar
        :size="32"
        shape="square"
        >Arco</yc-avatar
      >
      <yc-avatar
        :size="24"
        shape="square"
        >Arco</yc-avatar
      >
    </yc-space>
  </yc-space>
</template>

<script setup>
import { computed, ref } from 'vue';
const list = ['B', 'Arco', 'Design', 'Tom', 'AD'];
const index = ref(0);
const text = computed(() => list[index.value]);
const onClick = () => {
  index.value = index.value >= list.length - 1 ? 0 : index.value + 1;
};
</script>
```

</details>
