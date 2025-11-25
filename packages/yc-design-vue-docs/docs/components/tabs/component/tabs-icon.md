### 带图标的页签

带有图标的标签页。

<div class="cell-demo vp-raw">
 <yc-tabs>
    <yc-tab-pane path="1">
      <template #title> <icon-calendar /> Tab 1 </template>
      Content of Tab Panel 1
    </yc-tab-pane>
    <yc-tab-pane path="2">
      <template #title> <icon-clock-circle /> Tab 2 </template>
      Content of Tab Panel 2
    </yc-tab-pane>
    <yc-tab-pane path="3">
      <template #title> <icon-user /> Tab 3 </template>
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
  <yc-tabs>
    <yc-tab-pane path="1">
      <template #title> <icon-calendar /> Tab 1 </template>
      Content of Tab Panel 1
    </yc-tab-pane>
    <yc-tab-pane path="2">
      <template #title> <icon-clock-circle /> Tab 2 </template>
      Content of Tab Panel 2
    </yc-tab-pane>
    <yc-tab-pane path="3">
      <template #title> <icon-user /> Tab 3 </template>
      Content of Tab Panel 3
    </yc-tab-pane>
  </yc-tabs>
</template>
```

</details>
