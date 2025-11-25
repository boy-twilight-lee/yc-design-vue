### 触发方式

通过设置 `trigger`，可以指定不同的触发方式。

<div class="cell-demo vp-raw">
  <yc-space>
    <yc-popover title="Title">
      <yc-button>Hover Me</yc-button>
      <template #content>
        <p>Here is the text content</p>
        <p>Here is the text content</p>
      </template>
    </yc-popover>
    <yc-popover title="Title" trigger="click">
      <yc-button>Click Me</yc-button>
      <template #content>
        <p>Here is the text content</p>
        <p>Here is the text content</p>
      </template>
    </yc-popover>
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
    <yc-popover title="Title">
      <yc-button>Hover Me</yc-button>
      <template #content>
        <p>Here is the text content</p>
        <p>Here is the text content</p>
      </template>
    </yc-popover>
    <yc-popover
      title="Title"
      trigger="click">
      <yc-button>Click Me</yc-button>
      <template #content>
        <p>Here is the text content</p>
        <p>Here is the text content</p>
      </template>
    </yc-popover>
  </yc-space>
</template>
```

</details>
