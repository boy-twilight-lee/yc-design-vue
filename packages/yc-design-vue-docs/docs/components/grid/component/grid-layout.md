### Grid 布局

基于 CSS 的 Grid 布局实现的布局组件，支持折叠，并且可以设置后缀节点，后缀节点会显示在一行的结尾。

<client-only>
<div class="cell-demo vp-raw">
  <div style="margin-bottom: 20px;">
    <yc-typography-text>折叠：</yc-typography-text>
    <yc-switch :checked="collapsed" @click="collapsed = !collapsed" />
  </div>
  <yc-grid :cols="3" :colGap="12" :rowGap="16" class="grid-demo-grid" :collapsed="collapsed">
    <yc-grid-item class="demo-item">item</yc-grid-item>
    <yc-grid-item class="demo-item">item</yc-grid-item>
    <yc-grid-item class="demo-item">item</yc-grid-item>
    <yc-grid-item class="demo-item" :offset="1">item | offset - 1</yc-grid-item>
    <yc-grid-item class="demo-item">item</yc-grid-item>
    <yc-grid-item class="demo-item" :span="3">item | span - 3</yc-grid-item>
    <yc-grid-item class="demo-item">item</yc-grid-item>
    <yc-grid-item class="demo-item">item</yc-grid-item>
    <yc-grid-item class="demo-item" suffix #="{ overflow }">
      suffix | overflow: {{ overflow }}
    </yc-grid-item>
  </yc-grid>
</div>
</client-only>

<script setup>
import { ref } from 'vue';
const collapsed = ref(false);
</script>

<style scoped>
.grid-demo-grid .demo-item,
.grid-demo-grid .demo-suffix {
  height: 48px;
  line-height: 48px;
  color: var(--color-white);
  text-align: center;
}

.grid-demo-grid .demo-item:nth-child(2n) {
  background-color: rgba(var(--arcoblue-6), 0.9);
}

.grid-demo-grid .demo-item:nth-child(2n + 1) {
  background-color: var(--color-primary-light-4);
}
</style>

<details>
<summary>
 <button class="code-btn"  >
    <icon-code />
 </button>
</summary>

```vue
<template>
  <div style="margin-bottom: 20px;">
    <yc-typography-text>折叠：</yc-typography-text>
    <yc-switch
      :checked="collapsed"
      @click="collapsed = !collapsed" />
  </div>
  <yc-grid
    :cols="3"
    :colGap="12"
    :rowGap="16"
    class="grid-demo-grid"
    :collapsed="collapsed">
    <yc-grid-item class="demo-item">item</yc-grid-item>
    <yc-grid-item class="demo-item">item</yc-grid-item>
    <yc-grid-item class="demo-item">item</yc-grid-item>
    <yc-grid-item
      class="demo-item"
      :offset="1"
      >item | offset - 1</yc-grid-item
    >
    <yc-grid-item class="demo-item">item</yc-grid-item>
    <yc-grid-item
      class="demo-item"
      :span="3"
      >item | span - 3</yc-grid-item
    >
    <yc-grid-item class="demo-item">item</yc-grid-item>
    <yc-grid-item class="demo-item">item</yc-grid-item>
    <yc-grid-item
      class="demo-item"
      suffix
      #="{ overflow }">
      suffix | overflow: {{ overflow }}
    </yc-grid-item>
  </yc-grid>
</template>

<script setup>
import { ref } from 'vue';
const collapsed = ref(false);
</script>

<style scoped>
.grid-demo-grid .demo-item,
.grid-demo-grid .demo-suffix {
  height: 48px;
  line-height: 48px;
  color: var(--color-white);
  text-align: center;
}

.grid-demo-grid .demo-item:nth-child(2n) {
  background-color: rgba(var(--arcoblue-6), 0.9);
}

.grid-demo-grid .demo-item:nth-child(2n + 1) {
  background-color: var(--color-primary-light-4);
}
</style>
```

</details>
