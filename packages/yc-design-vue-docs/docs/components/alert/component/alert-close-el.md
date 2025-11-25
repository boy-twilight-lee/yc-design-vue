### 自定义关闭元素

指定 `closable-element` slot，自定义关闭元素。

<div class="cell-demo vp-raw">
  <yc-row :gutter="[40, 20]">
    <yc-col :span="12">
      <yc-alert closable>
        <template #close-element>
          <icon-close-circle />
        </template>
        This is an info alert.
      </yc-alert>
    </yc-col>
    <yc-col :span="12">
      <yc-alert closable>
        <template #close-element> Close </template>
        This is an info alert.
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
      <yc-alert closable>
        <template #close-element>
          <icon-close-circle />
        </template>
        This is an info alert.
      </yc-alert>
    </yc-col>
    <yc-col :span="12">
      <yc-alert closable>
        <template #close-element> Close </template>
        This is an info alert.
      </yc-alert>
    </yc-col>
  </yc-row>
</template>
```

</details>
