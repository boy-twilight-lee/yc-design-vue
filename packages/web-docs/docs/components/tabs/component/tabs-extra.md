### 附加内容

通过 `extra` 插槽可以自定义额外显示内容。

<div class="cell-demo vp-raw">
  <yc-tabs>
    <template #extra>
      <yc-button>Action</yc-button>
    </template>
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
    <template #extra>
      <yc-button>Action</yc-button>
    </template>
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
</template>
```

</details>
