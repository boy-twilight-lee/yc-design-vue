### 下拉菜单的页头

自定义下拉菜单的页头

<div class="cell-demo vp-raw">
  <yc-space>
    <yc-select
      :default-value="'Beijing'"
      :style="{ width: '360px' }"
      placeholder="Please select ..."
      multiple>
      <yc-option>Beijing</yc-option>
      <yc-option>Shanghai</yc-option>
      <yc-option>Guangzhou</yc-option>
      <yc-option disabled>Disabled</yc-option>
      <yc-option>Shenzhen</yc-option>
      <yc-option>Wuhan</yc-option>
      <template #header>
        <div style="padding: 6px 12px;">
          <yc-checkbox value="1">全选</yc-checkbox>
        </div>
      </template>
    </yc-select>
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
  <yc-space>
    <yc-select
      :default-value="'Beijing'"
      :style="{ width: '360px' }"
      placeholder="Please select ..."
      multiple>
      <yc-option>Beijing</yc-option>
      <yc-option>Shanghai</yc-option>
      <yc-option>Guangzhou</yc-option>
      <yc-option disabled>Disabled</yc-option>
      <yc-option>Shenzhen</yc-option>
      <yc-option>Wuhan</yc-option>
      <template #header>
        <div style="padding: 6px 12px;">
          <yc-checkbox value="1">全选</yc-checkbox>
        </div>
      </template>
    </yc-select>
  </yc-space>
</template>
```

</details>
