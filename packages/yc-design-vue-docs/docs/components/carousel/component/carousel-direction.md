### 切换方向

默认情况下，`direction` 为 `horizontal`。通过设置 `direction` 为 `vertical` 来使用垂直方向切换。

<div class="cell-demo vp-raw">
  <yc-carousel
    :style="{
      width: '600px',
      height: '240px',
    }"
    show-arrow="never"
    direction="vertical"
    indicator-position="right">
    <yc-carousel-item v-for="image in images">
      <img
        :src="image"
        :style="{
          width: '100%',
        }" />
    </yc-carousel-item>
  </yc-carousel>
</div>

<script setup>
const images = [
  'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/cd7a1aaea8e1c5e3d26fe2591e561798.png~tplv-uwbnlip3yd-webp.webp',
  'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/6480dbc69be1b5de95010289787d64f1.png~tplv-uwbnlip3yd-webp.webp',
  'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/0265a04fddbd77a19602a15d9d55d797.png~tplv-uwbnlip3yd-webp.webp',
];
</script>

<details>
<summary>
 <button class="code-btn"  >
    <icon-code />
 </button>
</summary>

```vue
<template>
  <yc-carousel
    :style="{
      width: '600px',
      height: '240px',
    }"
    show-arrow="never"
    direction="vertical"
    indicator-position="right">
    <yc-carousel-item v-for="image in images">
      <img
        :src="image"
        :style="{
          width: '100%',
        }" />
    </yc-carousel-item>
  </yc-carousel>
</template>

<script setup>
const images = [
  'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/cd7a1aaea8e1c5e3d26fe2591e561798.png~tplv-uwbnlip3yd-webp.webp',
  'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/6480dbc69be1b5de95010289787d64f1.png~tplv-uwbnlip3yd-webp.webp',
  'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/0265a04fddbd77a19602a15d9d55d797.png~tplv-uwbnlip3yd-webp.webp',
];
</script>
```

</details>
