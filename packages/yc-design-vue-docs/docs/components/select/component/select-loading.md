### 加载中

选择框和下拉菜单显示加载中状态。

<div class="cell-demo vp-raw">
  <yc-select
    :style="{ width: '320px' }"
    placeholder="Please select ..."
    loading>
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
    :style="{ width: '320px' }"
    placeholder="Please select ..."
    loading>
    <yc-option>Beijing</yc-option>
    <yc-option>Shanghai</yc-option>
    <yc-option>Guangzhou</yc-option>
    <yc-option disabled>Disabled</yc-option>
  </yc-select>
</template>
```

</details>
