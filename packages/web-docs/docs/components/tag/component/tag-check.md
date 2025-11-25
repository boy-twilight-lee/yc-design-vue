### 可选中

通过设置 `checkable`，可以实现点击选中的效果。

<div class="cell-demo vp-raw">
  <yc-space>
    <yc-tag checkable>Awesome</yc-tag>
    <yc-tag checkable color="red" :default-checked="true">Toutiao</yc-tag>
    <yc-tag checkable color="arcoblue" :default-checked="true">Lark</yc-tag>
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
    <yc-tag checkable>Awesome</yc-tag>
    <yc-tag
      checkable
      color="red"
      :default-checked="true"
      >Toutiao</yc-tag
    >
    <yc-tag
      checkable
      color="arcoblue"
      :default-checked="true"
      >Lark</yc-tag
    >
  </yc-space>
</template>
```

</details>
