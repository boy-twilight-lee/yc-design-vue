### 隐藏图标

通过设置 `:show-icon="false"` 来隐藏图标。

<div class="cell-demo vp-raw">
  <yc-row :gutter="[40, 20]">
    <yc-col :span="12">
      <yc-alert :show-icon="false">This is an info alert.</yc-alert>
    </yc-col>
    <yc-col :span="12">
      <yc-alert
        type="success"
        :show-icon="false"
        >This is an success alert.</yc-alert
      >
    </yc-col>
    <yc-col :span="12">
      <yc-alert
        type="warning"
        :show-icon="false">
        <template #title> Warning </template>
        This is an warning alert.
      </yc-alert>
    </yc-col>
    <yc-col :span="12">
      <yc-alert
        type="error"
        :show-icon="false">
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
      <yc-alert :show-icon="false">This is an info alert.</yc-alert>
    </yc-col>
    <yc-col :span="12">
      <yc-alert
        type="success"
        :show-icon="false"
        >This is an success alert.</yc-alert
      >
    </yc-col>
    <yc-col :span="12">
      <yc-alert
        type="warning"
        :show-icon="false">
        <template #title> Warning </template>
        This is an warning alert.
      </yc-alert>
    </yc-col>
    <yc-col :span="12">
      <yc-alert
        type="error"
        :show-icon="false">
        <template #title> Error </template>
        This is an error alert.
      </yc-alert>
    </yc-col>
  </yc-row>
</template>
```

</details>
