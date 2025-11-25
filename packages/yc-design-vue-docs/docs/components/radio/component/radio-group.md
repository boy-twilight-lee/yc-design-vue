### 单选框组

通过 `<yc-radio-group>` 组件展示单选框组。

<div class="cell-demo vp-raw">
  <yc-space
    direction="vertical"
    size="large">
    <yc-radio-group>
      <yc-radio value="A">A</yc-radio>
      <yc-radio value="B">B</yc-radio>
      <yc-radio value="C">C</yc-radio>
      <yc-radio value="D">D</yc-radio>
    </yc-radio-group>
    <yc-radio-group>
      <yc-radio value="A">A</yc-radio>
      <yc-radio value="B">B</yc-radio>
      <yc-radio value="C">C</yc-radio>
      <yc-radio
        value="D"
        disabled
        >D</yc-radio
      >
    </yc-radio-group>
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
    <yc-radio-group>
      <yc-radio value="A">A</yc-radio>
      <yc-radio value="B">B</yc-radio>
      <yc-radio value="C">C</yc-radio>
      <yc-radio value="D">D</yc-radio>
    </yc-radio-group>
    <yc-radio-group>
      <yc-radio value="A">A</yc-radio>
      <yc-radio value="B">B</yc-radio>
      <yc-radio value="C">C</yc-radio>
      <yc-radio
        value="D"
        disabled
        >D</yc-radio
      >
    </yc-radio-group>
  </yc-space>
</template>
```

</details>
