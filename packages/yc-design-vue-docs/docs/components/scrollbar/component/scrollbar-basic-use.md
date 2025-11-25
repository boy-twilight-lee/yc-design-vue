### 基本用法

滚动条组件基本用法。scrollbar 的默认插槽需要唯一的子元素。

<div class="cell-demo vp-raw">
  <yc-scrollbar style="height:200px;overflow: auto;">
    <div
      style="height: 2000px;width: 2000px; background-color: var(--color-primary-light-4);">
      Content
    </div>
  </yc-scrollbar>
</div>

<details>
<summary>
 <button class="code-btn"  >
    <icon-code />
 </button>
</summary>

```vue
<template>
  <yc-scrollbar style="height:200px;overflow: auto;">
    <div
      style="height: 2000px;width: 2000px; background-color: var(--color-primary-light-4);">
      Content
    </div>
  </yc-scrollbar>
</template>
```

</details>
