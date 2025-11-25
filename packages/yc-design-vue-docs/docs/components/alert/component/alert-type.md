### 提示类型

警告提示有 `info`、`success`、`warning`、`error`、`normal` 五种类型。

<div class="cell-demo vp-raw">
  <yc-row :gutter="[40, 20]">
    <yc-col :span="12">
      <yc-alert>This is an info alert.</yc-alert>
    </yc-col>
    <yc-col :span="12">
      <yc-alert type="success">This is an success alert.</yc-alert>
    </yc-col>
    <yc-col :span="12">
      <yc-alert type="warning">This is an warning alert.</yc-alert>
    </yc-col>
    <yc-col :span="12">
      <yc-alert type="error">This is an error alert.</yc-alert>
    </yc-col>
    <yc-col :span="12">
      <yc-alert type="normal">
        <template #icon>
          <icon-exclamation-circle-fill />
        </template>
        This is an normal alert.
      </yc-alert>
    </yc-col>
  </yc-row>
</div>

<details>
<summary>
 <button class="code-btn"  >
    <icon-code />
 </button>
</summary>

```vue
<template>
  <yc-row :gutter="[40, 20]">
    <yc-col :span="12">
      <yc-alert>This is an info alert.</yc-alert>
    </yc-col>
    <yc-col :span="12">
      <yc-alert type="success">This is an success alert.</yc-alert>
    </yc-col>
    <yc-col :span="12">
      <yc-alert type="warning">This is an warning alert.</yc-alert>
    </yc-col>
    <yc-col :span="12">
      <yc-alert type="error">This is an error alert.</yc-alert>
    </yc-col>
    <yc-col :span="12">
      <yc-alert type="normal">
        <template #icon>
          <icon-exclamation-circle-fill />
        </template>
        This is an normal alert.
      </yc-alert>
    </yc-col>
  </yc-row>
</template>
```

</details>
