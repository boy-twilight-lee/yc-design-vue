### 滚动

支持通过滚轮或者触摸板进行滚动操作，且可以通过 `scrollPosition` 属性设置滚动位置。

<div class="cell-demo vp-raw">
  <yc-space
    direction="vertical"
    size="large">
    <yc-radio-group
      v-model="position"
      type="button">
      <yc-radio value="left">Left</yc-radio>
      <yc-radio value="top">Top</yc-radio>
      <yc-radio value="right">Right</yc-radio>
      <yc-radio value="bottom">Bottom</yc-radio>
    </yc-radio-group>
    <yc-radio-group
      v-model="scrollPosition"
      type="button">
      <yc-radio value="auto">auto</yc-radio>
      <yc-radio value="start">start</yc-radio>
      <yc-radio value="center">center</yc-radio>
      <yc-radio value="end">end</yc-radio>
    </yc-radio-group>
    <yc-button @click="changeActive"> Change: {{ activeKey }}</yc-button>
  </yc-space>
  <yc-tabs
    v-model:activeKey="activeKey"
    :position="position"
    :scrollPosition="scrollPosition"
    style="width: 100%;height: 300px;margin-top: 20px">
    <yc-tab-pane
      v-for="tab in tabs"
      :path="tab.key"
      :title="tab.title">
      {{ tab.content }}
    </yc-tab-pane>
  </yc-tabs>
</div>

<script setup>
import { ref } from 'vue';
const position = ref('top');
const scrollPosition = ref('auto');
const activeKey = ref('Tab1');
const tabs = Array.from({ length: 30 }, (v, i) => {
  return {
    key: `Tab${i + 1}`,
    title: `Tab ${i + 1}`,
    content: `Content of Tab Panel ${i + 1}`,
  };
});
const changeActive = () => {
  activeKey.value = `Tab${Math.floor(Math.random() * 30) + 1}`;
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
    direction="vertical"
    size="large">
    <yc-radio-group
      v-model="position"
      type="button">
      <yc-radio value="left">Left</yc-radio>
      <yc-radio value="top">Top</yc-radio>
      <yc-radio value="right">Right</yc-radio>
      <yc-radio value="bottom">Bottom</yc-radio>
    </yc-radio-group>
    <yc-radio-group
      v-model="scrollPosition"
      type="button">
      <yc-radio value="auto">auto</yc-radio>
      <yc-radio value="start">start</yc-radio>
      <yc-radio value="center">center</yc-radio>
      <yc-radio value="end">end</yc-radio>
    </yc-radio-group>
    <yc-button @click="changeActive"> Change: {{ activeKey }}</yc-button>
  </yc-space>
  <yc-tabs
    v-model:activeKey="activeKey"
    :position="position"
    :scrollPosition="scrollPosition"
    style="width: 100%;height: 300px;margin-top: 20px">
    <yc-tab-pane
      v-for="tab in tabs"
      :path="tab.key"
      :title="tab.title">
      {{ tab.content }}
    </yc-tab-pane>
  </yc-tabs>
</template>

<script setup>
import { ref } from 'vue';
const position = ref('top');
const scrollPosition = ref('auto');
const activeKey = ref('Tab1');
const tabs = Array.from({ length: 30 }, (v, i) => {
  return {
    key: `Tab${i + 1}`,
    title: `Tab ${i + 1}`,
    content: `Content of Tab Panel ${i + 1}`,
  };
});
const changeActive = () => {
  activeKey.value = `Tab${Math.floor(Math.random() * 30) + 1}`;
};
</script>
```

</details>
