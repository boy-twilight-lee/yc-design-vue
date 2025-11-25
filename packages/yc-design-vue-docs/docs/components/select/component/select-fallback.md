### 回退选项

使用 `fallback-option` 自定义选项中不存在的值，默认会在输入框中展示不存在的选项值。可能用于选项还没有获取完，或者远程搜索时选项改变了。

<div class="cell-demo vp-raw">
  <yc-space
    direction="vertical"
    size="large">
    <yc-select
      defaultValue="Shanxi"
      :style="{ width: '320px' }"
      placeholder="Please select ..."
      :fallback-option="fallback">
      <yc-option>Beijing</yc-option>
      <yc-option>Shanghai</yc-option>
      <yc-option>Guangzhou</yc-option>
      <yc-option disabled>Disabled</yc-option>
    </yc-select>
    <yc-select
      defaultValue="Shanxi"
      :style="{ width: '320px' }"
      placeholder="Please select ..."
      :fallback-option="fallback"
      :show-extryc-options="false">
      <yc-option>Beijing</yc-option>
      <yc-option>Shanghai</yc-option>
      <yc-option>Guangzhou</yc-option>
      <yc-option disabled>Disabled</yc-option>
    </yc-select>
    <yc-select
      :default-value="['Shanxi', 'Nanjing', 'Hangzhou']"
      :style="{ width: '320px' }"
      placeholder="Please select ..."
      multiple
      :fallback-option="fallback">
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

<script setup>
const fallback = (value) => {
  return {
    value,
    label: `++${value}++`,
  };
};
</script>

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
      defaultValue="Shanxi"
      :style="{ width: '320px' }"
      placeholder="Please select ..."
      :fallback-option="fallback">
      <yc-option>Beijing</yc-option>
      <yc-option>Shanghai</yc-option>
      <yc-option>Guangzhou</yc-option>
      <yc-option disabled>Disabled</yc-option>
    </yc-select>
    <yc-select
      defaultValue="Shanxi"
      :style="{ width: '320px' }"
      placeholder="Please select ..."
      :fallback-option="fallback"
      :show-extryc-options="false">
      <yc-option>Beijing</yc-option>
      <yc-option>Shanghai</yc-option>
      <yc-option>Guangzhou</yc-option>
      <yc-option disabled>Disabled</yc-option>
    </yc-select>
    <yc-select
      :default-value="['Shanxi', 'Nanjing', 'Hangzhou']"
      :style="{ width: '320px' }"
      placeholder="Please select ..."
      multiple
      :fallback-option="fallback">
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

<script setup>
const fallback = (value) => {
  return {
    value,
    label: `++${value}++`,
  };
};
</script>
```

</details>
