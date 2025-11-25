### 可关闭

通过设置 `closable`，可开启关闭按钮。

<div class="cell-demo vp-raw">
<yc-row :gutter="[40, 20]">
    <yc-col :span="12">
      <yc-alert closable>This is an info alert.</yc-alert>
    </yc-col>
    <yc-col :span="12">
      <yc-alert
        type="success"
        closable
        >This is an success alert.</yc-alert
      >
    </yc-col>
    <yc-col :span="12">
      <yc-alert
        type="warning"
        closable>
        <template #title> Warning </template>
        This is an warning alert.
      </yc-alert>
    </yc-col>
    <yc-col :span="12">
      <yc-alert
        type="error"
        closable>
        <template #title> Error </template>
        This is an error alert.
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
      <yc-alert closable>This is an info alert.</yc-alert>
    </yc-col>
    <yc-col :span="12">
      <yc-alert
        type="success"
        closable
        >This is an success alert.</yc-alert
      >
    </yc-col>
    <yc-col :span="12">
      <yc-alert
        type="warning"
        closable>
        <template #title> Warning </template>
        This is an warning alert.
      </yc-alert>
    </yc-col>
    <yc-col :span="12">
      <yc-alert
        type="error"
        closable>
        <template #title> Error </template>
        This is an error alert.
      </yc-alert>
    </yc-col>
  </yc-row>
</template>
```

</details>
