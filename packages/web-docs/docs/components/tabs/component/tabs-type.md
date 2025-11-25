### 不同类型

通过 `type` 可以设置标签的类型。

<div class="cell-demo vp-raw">
  <yc-space
    direction="vertical"
    size="large">
    <yc-radio-group
      v-model="type"
      type="button">
      <yc-radio value="line">Line</yc-radio>
      <yc-radio value="card">Card</yc-radio>
      <yc-radio value="card-gutter">Card Gutter</yc-radio>
      <yc-radio value="text">Text</yc-radio>
      <yc-radio value="rounded">Rounded</yc-radio>
      <yc-radio value="capsule">Capsule</yc-radio>
    </yc-radio-group>
    <yc-radio-group
      v-model="size"
      type="button">
      <yc-radio value="mini">Mini</yc-radio>
      <yc-radio value="small">Small</yc-radio>
      <yc-radio value="medium">Medium</yc-radio>
      <yc-radio value="large">Large</yc-radio>
    </yc-radio-group>
    <yc-tabs
      :type="type"
      :size="size">
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
      <yc-tab-pane
        path="3"
        title="Tab 3">
        Content of Tab Panel 3
      </yc-tab-pane>
    </yc-tabs>
  </yc-space>
</div>

<script setup>
import { ref } from 'vue';
const type = ref('line');
const size = ref('medium');
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
    size="large">
    <yc-radio-group
      v-model="type"
      type="button">
      <yc-radio value="line">Line</yc-radio>
      <yc-radio value="card">Card</yc-radio>
      <yc-radio value="card-gutter">Card Gutter</yc-radio>
      <yc-radio value="text">Text</yc-radio>
      <yc-radio value="rounded">Rounded</yc-radio>
      <yc-radio value="capsule">Capsule</yc-radio>
    </yc-radio-group>
    <yc-radio-group
      v-model="size"
      type="button">
      <yc-radio value="mini">Mini</yc-radio>
      <yc-radio value="small">Small</yc-radio>
      <yc-radio value="medium">Medium</yc-radio>
      <yc-radio value="large">Large</yc-radio>
    </yc-radio-group>
    <yc-tabs
      :type="type"
      :size="size">
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
      <yc-tab-pane
        path="3"
        title="Tab 3">
        Content of Tab Panel 3
      </yc-tab-pane>
    </yc-tabs>
  </yc-space>
</template>

<script setup>
import { ref } from 'vue';
const type = ref('line');
const size = ref('medium');
</script>
```

</details>
