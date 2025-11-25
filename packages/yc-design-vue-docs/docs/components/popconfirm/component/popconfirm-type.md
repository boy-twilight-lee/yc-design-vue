### 确认框类型

通过 `type` 属性可以设置确认框类型。

<div class="cell-demo vp-raw">
  <yc-space>
    <yc-popconfirm
      content="Are you sure you want to delete?"
      type="info">
      <yc-button>Click To Delete</yc-button>
    </yc-popconfirm>
    <yc-popconfirm
      content="Are you sure you want to delete?"
      type="success">
      <yc-button>Click To Delete</yc-button>
    </yc-popconfirm>
    <yc-popconfirm
      content="Are you sure you want to delete?"
      type="warning">
      <yc-button>Click To Delete</yc-button>
    </yc-popconfirm>
    <yc-popconfirm
      content="Are you sure you want to delete?"
      type="error">
      <yc-button>Click To Delete</yc-button>
    </yc-popconfirm>
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
    <yc-popconfirm
      content="Are you sure you want to delete?"
      type="info">
      <yc-button>Click To Delete</yc-button>
    </yc-popconfirm>
    <yc-popconfirm
      content="Are you sure you want to delete?"
      type="success">
      <yc-button>Click To Delete</yc-button>
    </yc-popconfirm>
    <yc-popconfirm
      content="Are you sure you want to delete?"
      type="warning">
      <yc-button>Click To Delete</yc-button>
    </yc-popconfirm>
    <yc-popconfirm
      content="Are you sure you want to delete?"
      type="error">
      <yc-button>Click To Delete</yc-button>
    </yc-popconfirm>
  </yc-space>
</template>
```

</details>
