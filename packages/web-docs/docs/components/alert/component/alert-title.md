### 提示标题

通过设置 `title` 可以给警告提示添加标题。

<div class="cell-demo vp-raw">
  <yc-row :gutter="[40, 20]">
    <yc-col :span="12">
      <yc-alert title="Info">This is an info alert.</yc-alert>
    </yc-col>
    <yc-col :span="12">
      <yc-alert
        title="Success"
        type="success"
        >This is an success alert.</yc-alert
      >
    </yc-col>
    <yc-col :span="12">
      <yc-alert type="warning">
        <template #title> Warning </template>
        This is an warning alert.
      </yc-alert>
    </yc-col>
    <yc-col :span="12">
      <yc-alert type="error">
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
      <yc-alert title="Info">This is an info alert.</yc-alert>
    </yc-col>
    <yc-col :span="12">
      <yc-alert
        title="Success"
        type="success"
        >This is an success alert.</yc-alert
      >
    </yc-col>
    <yc-col :span="12">
      <yc-alert type="warning">
        <template #title> Warning </template>
        This is an warning alert.
      </yc-alert>
    </yc-col>
    <yc-col :span="12">
      <yc-alert type="error">
        <template #title> Error </template>
        This is an error alert.
      </yc-alert>
    </yc-col>
  </yc-row>
</template>
```

</details>
