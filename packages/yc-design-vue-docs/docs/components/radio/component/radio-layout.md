### 布局

使用 `<yc-radio-group>` 传入 `<yc-radio>`，配合 `<yc-grid>` 组件实现灵活的布局。

<div class="Cell-demo vp-raw">
  <yc-radio-group v-model="checkedValue">
    <yc-grid
      :cols="3"
      :colGap="24"
      :rowGap="16">
      <yc-grid-item>
        <yc-radio value="1">Option 1</yc-radio>
      </yc-grid-item>
      <yc-grid-item>
        <yc-radio
          value="2"
          disabled
          >Option 2</yc-radio
        >
      </yc-grid-item>
      <yc-grid-item>
        <yc-radio value="3">Option 3</yc-radio>
      </yc-grid-item>
      <yc-grid-item>
        <yc-radio value="4">Option 4</yc-radio>
      </yc-grid-item>
      <yc-grid-item>
        <yc-radio value="5">Option 5</yc-radio>
      </yc-grid-item>
    </yc-grid>
  </yc-radio-group>
</div>

<script setup>
import { ref } from 'vue';
const checkedValue = ref('1');
</script>

<details>
<summary>
 <button class="code-btn"  >
    <icon-code />
 </button>
</summary>

```vue
<template>
  <yc-radio-group v-model="checkedValue">
    <yc-grid
      :cols="3"
      :colGap="24"
      :rowGap="16">
      <yc-grid-item>
        <yc-radio value="1">Option 1</yc-radio>
      </yc-grid-item>
      <yc-grid-item>
        <yc-radio
          value="2"
          disabled
          >Option 2</yc-radio
        >
      </yc-grid-item>
      <yc-grid-item>
        <yc-radio value="3">Option 3</yc-radio>
      </yc-grid-item>
      <yc-grid-item>
        <yc-radio value="4">Option 4</yc-radio>
      </yc-grid-item>
      <yc-grid-item>
        <yc-radio value="5">Option 5</yc-radio>
      </yc-grid-item>
    </yc-grid>
  </yc-radio-group>
</template>

<script setup>
import { ref } from 'vue';
const checkedValue = ref('1');
</script>
```

</details>
