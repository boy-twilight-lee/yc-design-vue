### 可关闭标签

通过 `closable` 属性控制标签是否可关闭。可关闭标签可通过 `close` 事件执行一些关闭后操作，也可通过 `visible` 属性控制标签的显示或隐藏。

<div class="cell-demo vp-raw">
  <yc-space>
    <yc-tag closable>Tag</yc-tag>
    <yc-tag closable>
      <template #icon>
        <icon-star />
      </template>
      Tag
    </yc-tag>
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
    <yc-tag closable>Tag</yc-tag>
    <yc-tag closable>
      <template #icon>
        <icon-star />
      </template>
      Tag
    </yc-tag>
  </yc-space>
</template>
```

</details>
