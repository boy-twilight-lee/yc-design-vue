### 指示器

可以指定指示器类型：`dot` 、`line` 、`slider` 和位置 `left` 、`right` 、`top` 、`bottom` 、`outer`

<div class="cell-demo vp-raw">
  <yc-space
    direction="vertical"
    size="large">
    <yc-radio-group
      type="button"
      @change="updateType"
      style="{ marginBottom: '10px' }"
      :modelValue="indicatorType">
      <yc-radio value="dot">dot</yc-radio>
      <yc-radio value="line">line</yc-radio>
      <yc-radio value="slider">slider</yc-radio>
    </yc-radio-group>
    <yc-radio-group
      type="button"
      @change="updatePosition"
      :style="{ marginBottom: '20px' }"
      :modelValue="indicatorPosition">
      <yc-radio value="left">left</yc-radio>
      <yc-radio value="right">right</yc-radio>
      <yc-radio value="top">top</yc-radio>
      <yc-radio value="bottom">bottom</yc-radio>
      <yc-radio value="outer">outer</yc-radio>
    </yc-radio-group>
    <yc-carousel
      :indicator-type="indicatorType"
      :indicator-position="indicatorPosition"
      show-arrow="never"
      :style="{
        width: '600px',
        height: '240px',
      }">
      <yc-carousel-item v-for="image in images">
        <img
          :src="image"
          :style="{
            width: '100%',
          }" />
      </yc-carousel-item>
    </yc-carousel>
  </yc-space>
</div>

<script setup>
import { ref } from 'vue';
const images = ref([
  'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/cd7a1aaea8e1c5e3d26fe2591e561798.png~tplv-uwbnlip3yd-webp.webp',
  'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/6480dbc69be1b5de95010289787d64f1.png~tplv-uwbnlip3yd-webp.webp',
  'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/0265a04fddbd77a19602a15d9d55d797.png~tplv-uwbnlip3yd-webp.webp',
]);
const indicatorType = ref('dot');
const indicatorPosition = ref('bottom');
const updateType = (type) => {
  indicatorType.value = type;
};
const updatePosition = (position) => {
  indicatorPosition.value = position;
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
    <yc-radio-group
      type="button"
      @change="updateType"
      style="{ marginBottom: '10px' }"
      :modelValue="indicatorType">
      <yc-radio value="dot">dot</yc-radio>
      <yc-radio value="line">line</yc-radio>
      <yc-radio value="slider">slider</yc-radio>
    </yc-radio-group>
    <yc-radio-group
      type="button"
      @change="updatePosition"
      :style="{ marginBottom: '20px' }"
      :modelValue="indicatorPosition">
      <yc-radio value="left">left</yc-radio>
      <yc-radio value="right">right</yc-radio>
      <yc-radio value="top">top</yc-radio>
      <yc-radio value="bottom">bottom</yc-radio>
      <yc-radio value="outer">outer</yc-radio>
    </yc-radio-group>
    <yc-carousel
      :indicator-type="indicatorType"
      :indicator-position="indicatorPosition"
      show-arrow="never"
      :style="{
        width: '600px',
        height: '240px',
      }">
      <yc-carousel-item v-for="image in images">
        <img
          :src="image"
          :style="{
            width: '100%',
          }" />
      </yc-carousel-item>
    </yc-carousel>
  </yc-space>
</template>

<script setup>
import { ref } from 'vue';
const images = ref([
  'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/cd7a1aaea8e1c5e3d26fe2591e561798.png~tplv-uwbnlip3yd-webp.webp',
  'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/6480dbc69be1b5de95010289787d64f1.png~tplv-uwbnlip3yd-webp.webp',
  'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/0265a04fddbd77a19602a15d9d55d797.png~tplv-uwbnlip3yd-webp.webp',
]);
const indicatorType = ref('dot');
const indicatorPosition = ref('bottom');
const updateType = (type) => {
  indicatorType.value = type;
};
const updatePosition = (position) => {
  indicatorPosition.value = position;
};
</script>
```

</details>
