### 复选框组

通过 `<a-checkbox-group>` 组件展示复选框组。设置 `direction="vertical"` 可以展示竖向的复选框组。

<div class="cell-demo vp-raw">
  <yc-space
    direction="vertical"
    size="large">
    <yc-checkbox-group :default-value="['1']">
      <yc-checkbox value="1">Option 1</yc-checkbox>
      <yc-checkbox value="2">Option 2</yc-checkbox>
      <yc-checkbox value="3">Option 3</yc-checkbox>
    </yc-checkbox-group>
    <yc-checkbox-group direction="vertical">
      <yc-checkbox value="1">Option 1</yc-checkbox>
      <yc-checkbox value="2">Option 2</yc-checkbox>
      <yc-checkbox value="3">Option 3</yc-checkbox>
    </yc-checkbox-group>
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
    size="large">
    <yc-checkbox-group :default-value="['1']">
      <yc-checkbox value="1">Option 1</yc-checkbox>
      <yc-checkbox value="2">Option 2</yc-checkbox>
      <yc-checkbox value="3">Option 3</yc-checkbox>
    </yc-checkbox-group>
    <yc-checkbox-group direction="vertical">
      <yc-checkbox value="1">Option 1</yc-checkbox>
      <yc-checkbox value="2">Option 2</yc-checkbox>
      <yc-checkbox value="3">Option 3</yc-checkbox>
    </yc-checkbox-group>
  </yc-space>
</template>
```

</details>
