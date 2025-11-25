### 无边框模式

通过设置 `multiple` ，可以让选择器支持多选。此外通过 `max-tag-count` 可以设置最多显示的标签个数。设置 bordered="false" 开启无边框模式，常用于沉浸式使用。

<div class="cell-demo vp-raw">
  <yc-space
    direction="vertical"
    size="large">
    <yc-select
      :style="{ width: '100%' }"
      placeholder="Please select ..."
      :bordered="false">
      <yc-option>Beijing</yc-option>
      <yc-option>Shanghai</yc-option>
      <yc-option>Guangzhou</yc-option>
      <yc-option disabled>Disabled</yc-option>
    </yc-select>
    <yc-select
      :default-value="['Beijing', 'Shanghai']"
      :style="{ width: '360px' }"
      placeholder="Please select ..."
      multiple
      :bordered="false">
      <yc-option>Beijing</yc-option>
      <yc-option :tag-props="{ color: 'red' }">Shanghai</yc-option>
      <yc-option>Guangzhou</yc-option>
      <yc-option disabled>Disabled</yc-option>
      <yc-option>Shenzhen</yc-option>
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
      :style="{ width: '100%' }"
      placeholder="Please select ..."
      :bordered="false">
      <yc-option>Beijing</yc-option>
      <yc-option>Shanghai</yc-option>
      <yc-option>Guangzhou</yc-option>
      <yc-option disabled>Disabled</yc-option>
    </yc-select>
    <yc-select
      :default-value="['Beijing', 'Shanghai']"
      :style="{ width: '360px' }"
      placeholder="Please select ..."
      multiple
      :bordered="false">
      <yc-option>Beijing</yc-option>
      <yc-option :tag-props="{ color: 'red' }">Shanghai</yc-option>
      <yc-option>Guangzhou</yc-option>
      <yc-option disabled>Disabled</yc-option>
      <yc-option>Shenzhen</yc-option>
      <yc-option>Wuhan</yc-option>
    </yc-select>
  </yc-space>
</template>
```

</details>
