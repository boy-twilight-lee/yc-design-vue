### 触发方式

通过设置 `lazy-load` 属性，可以让面板在首次激活时渲染。

<div class="cell-demo vp-raw">
  <yc-radio-group v-model="trigger">
    <yc-radio value="click">click</yc-radio>
    <yc-radio value="hover">hover</yc-radio>
  </yc-radio-group>
  <yc-tabs
    default-active-key="1"
    :trigger="trigger">
    <yc-tab-pane
      path="1"
      title="Tab 1">
      Content of Tab Panel 1
    </yc-tab-pane>
    <yc-tab-pane
      path="2"
      title="Tab 2">
      Content of Tab Panel 2
    </yc-tab-pane>
    <yc-tab-pane path="3">
      <template #title>Tab 3</template>
      Content of Tab Panel 3
    </yc-tab-pane>
  </yc-tabs>
</div>

<script setup>
import { ref } from 'vue';
const trigger = ref('click');
</script>

<details>
<summary>
 <button class="code-btn"  >
    <icon-code />
 </button>
</summary>

```vue
<template>
  <yc-radio-group v-model="trigger">
    <yc-radio value="click">click</yc-radio>
    <yc-radio value="hover">hover</yc-radio>
  </yc-radio-group>
  <yc-tabs
    default-active-key="1"
    :trigger="trigger">
    <yc-tab-pane
      path="1"
      title="Tab 1">
      Content of Tab Panel 1
    </yc-tab-pane>
    <yc-tab-pane
      path="2"
      title="Tab 2">
      Content of Tab Panel 2
    </yc-tab-pane>
    <yc-tab-pane path="3">
      <template #title>Tab 3</template>
      Content of Tab Panel 3
    </yc-tab-pane>
  </yc-tabs>
</template>

<script setup>
import { ref } from 'vue';
const trigger = ref('click');
</script>
```

</details>
