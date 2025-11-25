### 下拉菜单的页脚

自定义下拉菜单的页脚

<div class="cell-demo vp-raw">
  <yc-space>
    <yc-select
      :default-value="'Beijing'"
      :style="{ width: '360px' }"
      placeholder="Please select ..."
      allow-search>
      <yc-option>Beijing</yc-option>
      <yc-option>Shanghai</yc-option>
      <yc-option>Guangzhou</yc-option>
      <yc-option disabled>Disabled</yc-option>
      <yc-option>Shenzhen</yc-option>
      <yc-option>Wuhan</yc-option>
      <template #footer>
        <div style="padding: 6px 0; text-align: center;">
          <yc-button>Click Me</yc-button>
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
      allow-search>
      <yc-option>Beijing</yc-option>
      <yc-option>Shanghai</yc-option>
      <yc-option>Guangzhou</yc-option>
      <yc-option disabled>Disabled</yc-option>
      <yc-option>Shenzhen</yc-option>
      <yc-option>Wuhan</yc-option>
      <template #footer>
        <div style="padding: 6px 0; text-align: center;">
          <yc-button>Click Me</yc-button>
        </div>
      </template>
    </yc-select>
  </yc-space>
</template>
```

</details>
