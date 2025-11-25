### 允许创建

通过设置 `allow-create` ，让选择器可以创建选项中不存在的条目。

<div class="cell-demo vp-raw">
    <yc-space
    direction="vertical"
    size="large">
    <yc-select
      :style="{ width: '320px' }"
      placeholder="Please select ..."
      allow-create>
      <yc-option>Beijing</yc-option>
      <yc-option>Shanghai</yc-option>
      <yc-option>Guangzhou</yc-option>
      <yc-option disabled>Disabled</yc-option>
      <yc-option>Shenzhen</yc-option>
      <yc-option>Chengdu</yc-option>
      <yc-option>Wuhan</yc-option>
    </yc-select>
    <yc-select
      :style="{ width: '320px' }"
      placeholder="Please select ..."
      multiple
      allow-create>
      <yc-option>Beijing</yc-option>
      <yc-option>Shanghai</yc-option>
      <yc-option>Guangzhou</yc-option>
      <yc-option disabled>Disabled</yc-option>
      <yc-option>Shenzhen</yc-option>
      <yc-option>Chengdu</yc-option>
      <yc-option>Wuhan</yc-option>
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
      placeholder="Please select ..."
      allow-create>
      <yc-option>Beijing</yc-option>
      <yc-option>Shanghai</yc-option>
      <yc-option>Guangzhou</yc-option>
      <yc-option disabled>Disabled</yc-option>
      <yc-option>Shenzhen</yc-option>
      <yc-option>Chengdu</yc-option>
      <yc-option>Wuhan</yc-option>
    </yc-select>
    <yc-select
      :style="{ width: '320px' }"
      placeholder="Please select ..."
      multiple
      allow-create>
      <yc-option>Beijing</yc-option>
      <yc-option>Shanghai</yc-option>
      <yc-option>Guangzhou</yc-option>
      <yc-option disabled>Disabled</yc-option>
      <yc-option>Shenzhen</yc-option>
      <yc-option>Chengdu</yc-option>
      <yc-option>Wuhan</yc-option>
    </yc-select>
  </yc-space>
</template>
```

</details>
