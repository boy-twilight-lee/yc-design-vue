### 分组

使用 `optgroup` 组件添加分组选项。

<div class="cell-demo vp-raw">
   <yc-space
    direction="vertical"
    size="large">
    <yc-select
      :style="{ width: '320px' }"
      placeholder="Please select ...">
      <yc-optgroup label="Group-1">
        <yc-option>Beijing</yc-option>
        <yc-option>Shanghai</yc-option>
      </yc-optgroup>
      <yc-optgroup label="Group-2">
        <yc-option>Guangzhou</yc-option>
        <yc-option disabled>Disabled</yc-option>
        <yc-option>Shenzhen</yc-option>
      </yc-optgroup>
      <yc-optgroup label="Group-3">
        <yc-option>Chengdu</yc-option>
        <yc-option>Wuhan</yc-option>
      </yc-optgroup>
    </yc-select>
    <yc-select
      :style="{ width: '320px' }"
      placeholder="Please select ..."
      multiple>
      <yc-optgroup label="Group-1">
        <yc-option>Beijing</yc-option>
        <yc-option>Shanghai</yc-option>
      </yc-optgroup>
      <yc-optgroup label="Group-2">
        <yc-option>Guangzhou</yc-option>
        <yc-option disabled>Disabled</yc-option>
        <yc-option>Shenzhen</yc-option>
      </yc-optgroup>
      <yc-optgroup label="Group-3">
        <yc-option>Chengdu</yc-option>
        <yc-option>Wuhan</yc-option>
      </yc-optgroup>
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
  <yc-space
    direction="vertical"
    size="large">
    <yc-select
      :style="{ width: '320px' }"
      placeholder="Please select ...">
      <yc-optgroup label="Group-1">
        <yc-option>Beijing</yc-option>
        <yc-option>Shanghai</yc-option>
      </yc-optgroup>
      <yc-optgroup label="Group-2">
        <yc-option>Guangzhou</yc-option>
        <yc-option disabled>Disabled</yc-option>
        <yc-option>Shenzhen</yc-option>
      </yc-optgroup>
      <yc-optgroup label="Group-3">
        <yc-option>Chengdu</yc-option>
        <yc-option>Wuhan</yc-option>
      </yc-optgroup>
    </yc-select>
    <yc-select
      :style="{ width: '320px' }"
      placeholder="Please select ..."
      multiple>
      <yc-optgroup label="Group-1">
        <yc-option>Beijing</yc-option>
        <yc-option>Shanghai</yc-option>
      </yc-optgroup>
      <yc-optgroup label="Group-2">
        <yc-option>Guangzhou</yc-option>
        <yc-option disabled>Disabled</yc-option>
        <yc-option>Shenzhen</yc-option>
      </yc-optgroup>
      <yc-optgroup label="Group-3">
        <yc-option>Chengdu</yc-option>
        <yc-option>Wuhan</yc-option>
      </yc-optgroup>
    </yc-select>
  </yc-space>
</template>
```

</details>
