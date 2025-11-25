### 多选选择器

通过设置 `multiple` ，可以让选择器支持多选。此外通过 `max-tag-count` 可以设置最多显示的标签个数。

<div class="cell-demo vp-raw">
  <yc-space
    direction="vertical"
    size="large">
    <yc-select
      :default-value="['Beijing', 'Shanghai']"
      :style="{ width: '360px' }"
      placeholder="Please select ..."
      multiple>
      <yc-option>Beijing</yc-option>
      <yc-option :tag-props="{ color: 'red' }">Shanghai</yc-option>
      <yc-option>Guangzhou</yc-option>
      <yc-option disabled>Disabled</yc-option>
      <yc-option>Shenzhen</yc-option>
      <yc-option>Wuhan</yc-option>
    </yc-select>
    <yc-select
      :default-value="['Beijing', 'Shanghai', 'Guangzhou']"
      :style="{ width: '360px' }"
      placeholder="Please select ..."
      multiple
      :max-tag-count="2"
      allow-clear>
      <yc-option>Beijing</yc-option>
      <yc-option>Shanghai</yc-option>
      <yc-option>Guangzhou</yc-option>
      <yc-option disabled>Disabled</yc-option>
      <yc-option>Shenzhen</yc-option>
      <yc-option>Chengdu</yc-option>
      <yc-option>Wuhan</yc-option>
    </yc-select>
    <yc-select
      :default-value="['Beijing', 'Shanghai']"
      :style="{ width: '360px' }"
      placeholder="Please select ..."
      multiple
      :limit="2">
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
      :default-value="['Beijing', 'Shanghai']"
      :style="{ width: '360px' }"
      placeholder="Please select ..."
      multiple>
      <yc-option>Beijing</yc-option>
      <yc-option :tag-props="{ color: 'red' }">Shanghai</yc-option>
      <yc-option>Guangzhou</yc-option>
      <yc-option disabled>Disabled</yc-option>
      <yc-option>Shenzhen</yc-option>
      <yc-option>Wuhan</yc-option>
    </yc-select>
    <yc-select
      :default-value="['Beijing', 'Shanghai', 'Guangzhou']"
      :style="{ width: '360px' }"
      placeholder="Please select ..."
      multiple
      :max-tag-count="2"
      allow-clear>
      <yc-option>Beijing</yc-option>
      <yc-option>Shanghai</yc-option>
      <yc-option>Guangzhou</yc-option>
      <yc-option disabled>Disabled</yc-option>
      <yc-option>Shenzhen</yc-option>
      <yc-option>Chengdu</yc-option>
      <yc-option>Wuhan</yc-option>
    </yc-select>
    <yc-select
      :default-value="['Beijing', 'Shanghai']"
      :style="{ width: '360px' }"
      placeholder="Please select ..."
      multiple
      :limit="2">
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
