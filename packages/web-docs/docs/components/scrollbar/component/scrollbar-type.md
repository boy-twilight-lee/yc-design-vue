### 滚动条类型

设置 `type` 属性改变滚动条类型，`track` 类型会显示滚动条轨道。

<div class="cell-demo vp-raw">
  <yc-scrollbar
    type="track"
    style="height:200px;overflow: auto;">
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
  <yc-scrollbar
    type="track"
    style="height:200px;overflow: auto;">
    <div
      style="height: 2000px;width: 2000px; background-color: var(--color-primary-light-4);">
      Content
    </div>
  </yc-scrollbar>
</template>
```

</details>
