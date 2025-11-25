### 按钮类型单选框组的尺寸

按钮类型的单选框组分为 `mini`、`small`、`medium`、`large` 四种尺寸。

<div class="cell-demo vp-raw">
  <yc-space
    direction="vertical"
    size="large">
    <yc-radio-group
      type="button"
      size="mini">
      <yc-radio value="Beijing">Beijing</yc-radio>
      <yc-radio value="Shanghai">Shanghai</yc-radio>
      <yc-radio value="Guangzhou">Guangzhou</yc-radio>
      <yc-radio value="Shenzhen">Shenzhen</yc-radio>
    </yc-radio-group>
    <yc-radio-group
      type="button"
      size="small">
      <yc-radio value="Beijing">Beijing</yc-radio>
      <yc-radio value="Shanghai">Shanghai</yc-radio>
      <yc-radio value="Guangzhou">Guangzhou</yc-radio>
      <yc-radio value="Shenzhen">Shenzhen</yc-radio>
    </yc-radio-group>
    <yc-radio-group type="button">
      <yc-radio value="Beijing">Beijing</yc-radio>
      <yc-radio value="Shanghai">Shanghai</yc-radio>
      <yc-radio value="Guangzhou">Guangzhou</yc-radio>
      <yc-radio value="Shenzhen">Shenzhen</yc-radio>
    </yc-radio-group>
    <yc-radio-group
      type="button"
      size="large">
      <yc-radio value="Beijing">Beijing</yc-radio>
      <yc-radio value="Shanghai">Shanghai</yc-radio>
      <yc-radio value="Guangzhou">Guangzhou</yc-radio>
      <yc-radio value="Shenzhen">Shenzhen</yc-radio>
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
    <yc-radio-group
      type="button"
      size="mini">
      <yc-radio value="Beijing">Beijing</yc-radio>
      <yc-radio value="Shanghai">Shanghai</yc-radio>
      <yc-radio value="Guangzhou">Guangzhou</yc-radio>
      <yc-radio value="Shenzhen">Shenzhen</yc-radio>
    </yc-radio-group>
    <yc-radio-group
      type="button"
      size="small">
      <yc-radio value="Beijing">Beijing</yc-radio>
      <yc-radio value="Shanghai">Shanghai</yc-radio>
      <yc-radio value="Guangzhou">Guangzhou</yc-radio>
      <yc-radio value="Shenzhen">Shenzhen</yc-radio>
    </yc-radio-group>
    <yc-radio-group type="button">
      <yc-radio value="Beijing">Beijing</yc-radio>
      <yc-radio value="Shanghai">Shanghai</yc-radio>
      <yc-radio value="Guangzhou">Guangzhou</yc-radio>
      <yc-radio value="Shenzhen">Shenzhen</yc-radio>
    </yc-radio-group>
    <yc-radio-group
      type="button"
      size="large">
      <yc-radio value="Beijing">Beijing</yc-radio>
      <yc-radio value="Shanghai">Shanghai</yc-radio>
      <yc-radio value="Guangzhou">Guangzhou</yc-radio>
      <yc-radio value="Shenzhen">Shenzhen</yc-radio>
    </yc-radio-group>
  </yc-space>
</template>
```

</details>
