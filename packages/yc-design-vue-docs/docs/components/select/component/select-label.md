### 自定义选择框展示内容

通过 #label 插槽可以自定义选择框展示内容。

<div class="cell-demo vp-raw">
 <yc-select
    default-value="Beijing"
    :style="{ width: '320px' }"
    placeholder="Please select ...">
    <template #label="{ data }">
      <span><icon-plus />{{ data?.label }}</span>
    </template>
    <yc-option>Beijing</yc-option>
    <yc-option>Shanghai</yc-option>
    <yc-option>Guangzhou</yc-option>
    <yc-option disabled>Disabled</yc-option>
  </yc-select>
</div>

<details>
<summary>
 <button class="code-btn"  >
    <icon-code />
 </button>
</summary>

```vue
<template>
  <yc-select
    default-value="Beijing"
    :style="{ width: '320px' }"
    placeholder="Please select ...">
    <template #label="{ data }">
      <span><icon-plus />{{ data?.label }}</span>
    </template>
    <yc-option>Beijing</yc-option>
    <yc-option>Shanghai</yc-option>
    <yc-option>Guangzhou</yc-option>
    <yc-option disabled>Disabled</yc-option>
  </yc-select>
</template>
```

</details>
