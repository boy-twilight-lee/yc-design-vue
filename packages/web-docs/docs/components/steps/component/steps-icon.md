### 自定义图标

通过 `#icon` 插槽可以自定义节点图标。

<div class="cell-demo vp-raw">
  <yc-steps>
    <yc-step description="This is a description">
      Succeeded
      <template #icon>
        <icon-home />
      </template>
    </yc-step>
    <yc-step description="This is a description">
      Processing
      <template #icon>
        <icon-loading />
      </template>
    </yc-step>
    <yc-step description="This is a description">
      Pending
      <template #icon>
        <icon-thumb-up />
      </template>
    </yc-step>
  </yc-steps>
</div>

<details>
<summary>
 <button class="code-btn"  >
    <icon-code />
 </button>
</summary>

```vue
<template>
  <yc-steps>
    <yc-step description="This is a description">
      Succeeded
      <template #icon>
        <icon-home />
      </template>
    </yc-step>
    <yc-step description="This is a description">
      Processing
      <template #icon>
        <icon-loading />
      </template>
    </yc-step>
    <yc-step description="This is a description">
      Pending
      <template #icon>
        <icon-thumb-up />
      </template>
    </yc-step>
  </yc-steps>
</template>
```

</details>
