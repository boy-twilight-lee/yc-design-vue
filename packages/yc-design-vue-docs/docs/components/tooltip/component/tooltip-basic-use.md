### 基本用法

鼠标移入，气泡出现，鼠标移出，气泡消失。

<div class="cell-demo vp-raw">
  <yc-space>
    <yc-tooltip content="This is tooltip content">
      <yc-button>Mouse over to display tooltip</yc-button>
    </yc-tooltip>
    <yc-tooltip
      content="This is a two-line tooltip content.This is a two-line tooltip content.">
      <yc-button>Mouse over to display tooltip</yc-button>
    </yc-tooltip>
  </yc-space>
</div>

<details>
<summary>
 <button class="code-btn"  >
    <icon-code />
 </button>
</summary>

```vue
<template>
  <yc-space>
    <yc-tooltip content="This is tooltip content">
      <yc-button>Mouse over to display tooltip</yc-button>
    </yc-tooltip>
    <yc-tooltip
      content="This is a two-line tooltip content.This is a two-line tooltip content.">
      <yc-button>Mouse over to display tooltip</yc-button>
    </yc-tooltip>
  </yc-space>
</template>
```

</details>
