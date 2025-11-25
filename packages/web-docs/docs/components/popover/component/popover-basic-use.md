### 基本用法

鼠标移入或点击，弹出气泡，可对浮层上元素进行操作，承载复杂内容和操作。

<div class="cell-demo vp-raw">
  <yc-popover title="Title">
    <yc-button>Hover</yc-button>
    <template #content>
      <p>Here is the text content</p>
      <p>Here is the text content</p>
    </template>
  </yc-popover>
</div>

<details>
<summary>
 <button class="code-btn"  >
    <icon-code />
 </button>
</summary>

```vue
<template>
  <yc-popover title="Title">
    <yc-button>Hover</yc-button>
    <template #content>
      <p>Here is the text content</p>
      <p>Here is the text content</p>
    </template>
  </yc-popover>
</template>
```

</details>
