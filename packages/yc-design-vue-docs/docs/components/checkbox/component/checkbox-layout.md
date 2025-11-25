### 布局

使用 `checkbox-group` 传入 `checkbox`，配合 `grid` 组件实现灵活的布局。

<div class="cell-demo vp-raw">
  <yc-checkbox-group v-model="checkedValue">
    <yc-grid
      :cols="3"
      :colGap="24"
      :rowGap="16">
      <yc-grid-item>
        <yc-checkbox value="1">Option 1</yc-checkbox>
      </yc-grid-item>
      <yc-grid-item>
        <yc-checkbox
          value="2"
          disabled
          >Option 2</yc-checkbox
        >
      </yc-grid-item>
      <yc-grid-item>
        <yc-checkbox value="3">Option 3</yc-checkbox>
      </yc-grid-item>
      <yc-grid-item>
        <yc-checkbox value="4">Option 4</yc-checkbox>
      </yc-grid-item>
      <yc-grid-item>
        <yc-checkbox value="5">Option 5</yc-checkbox>
      </yc-grid-item>
    </yc-grid>
  </yc-checkbox-group>
</div>

<script setup>
import { ref } from 'vue';
const checkedValue = ref(['1', '2']);
</script>

<details>
<summary>
 <button class="code-btn"  >
    <icon-code />
 </button>
</summary>

```vue
<template>
  <yc-checkbox-group v-model="checkedValue">
    <yc-grid
      :cols="3"
      :colGap="24"
      :rowGap="16">
      <yc-grid-item>
        <yc-checkbox value="1">Option 1</yc-checkbox>
      </yc-grid-item>
      <yc-grid-item>
        <yc-checkbox
          value="2"
          disabled
          >Option 2</yc-checkbox
        >
      </yc-grid-item>
      <yc-grid-item>
        <yc-checkbox value="3">Option 3</yc-checkbox>
      </yc-grid-item>
      <yc-grid-item>
        <yc-checkbox value="4">Option 4</yc-checkbox>
      </yc-grid-item>
      <yc-grid-item>
        <yc-checkbox value="5">Option 5</yc-checkbox>
      </yc-grid-item>
    </yc-grid>
  </yc-checkbox-group>
</template>

<script setup>
import { ref } from 'vue';
const checkedValue = ref(['1', '2']);
</script>
```

</details>
