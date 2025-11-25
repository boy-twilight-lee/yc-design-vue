### 下拉菜单滚动

可以通过 `dropdown-scroll` 监听下拉菜单的滚动事件。或者通过 `dropdown-reach-bottom` 监听下拉菜单滚动到底部的事件。

<div class="cell-demo vp-raw">
  <yc-select
    :style="{ width: '320px' }"
    default-value="Beijing"
    placeholder="Please select ..."
    @dropdown-scroll="handleScroll"
    @dropdown-reach-bottom="handleReachBottom">
    <yc-option>Beijing</yc-option>
    <yc-option>Shanghai</yc-option>
    <yc-option>Guangzhou</yc-option>
    <yc-option disabled>Disabled</yc-option>
    <yc-option>Shenzhen</yc-option>
    <yc-option>Chengdu</yc-option>
    <yc-option>Wuhan</yc-option>
  </yc-select>
</div>

<script setup>
const handleScroll = (ev) => {
  console.log('scroll', ev);
};
const handleReachBottom = (ev) => {
  console.log('reach the bottom', ev);
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
  <yc-select
    :style="{ width: '320px' }"
    default-value="Beijing"
    placeholder="Please select ..."
    @dropdown-scroll="handleScroll"
    @dropdown-reach-bottom="handleReachBottom">
    <yc-option>Beijing</yc-option>
    <yc-option>Shanghai</yc-option>
    <yc-option>Guangzhou</yc-option>
    <yc-option disabled>Disabled</yc-option>
    <yc-option>Shenzhen</yc-option>
    <yc-option>Chengdu</yc-option>
    <yc-option>Wuhan</yc-option>
  </yc-select>
</template>

<script setup>
const handleScroll = (ev) => {
  console.log('scroll', ev);
};
const handleReachBottom = (ev) => {
  console.log('reach the bottom', ev);
};
</script>
```

</details>
