### 操作项

通过 `#aciton` 插槽自定义操作按钮

<div class="cell-demo vp-raw">
   <yc-space
    direction="vertical"
    size="large"
    style="width: 100%;">
    <yc-alert closable>
      This is an info alert.
      <template #action>
        <yc-button
          size="small"
          type="primary"
          >Detail</yc-button
        >
      </template>
    </yc-alert>
    <yc-alert
      title="Example"
      closable>
      This is an info alert.
      <template #action>
        <yc-button
          size="small"
          type="primary"
          >Detail</yc-button
        >
      </template>
    </yc-alert>
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
  <yc-space
    direction="vertical"
    size="large"
    style="width: 100%;">
    <yc-alert closable>
      This is an info alert.
      <template #action>
        <yc-button
          size="small"
          type="primary"
          >Detail</yc-button
        >
      </template>
    </yc-alert>
    <yc-alert
      title="Example"
      closable>
      This is an info alert.
      <template #action>
        <yc-button
          size="small"
          type="primary"
          >Detail</yc-button
        >
      </template>
    </yc-alert>
  </yc-space>
</template>
```

</details>
