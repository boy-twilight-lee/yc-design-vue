### 基本用法

标签页的基本使用方法。

<div class="cell-demo vp-raw">
  <yc-tabs default-active-key="2">
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

<details>
<summary>
 <button class="code-btn"  >
    <icon-code />
 </button>
</summary>

```vue
<template>
  <yc-tabs default-active-key="2">
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
```

</details>
