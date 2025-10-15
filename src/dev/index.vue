<template>
  <div class="test">
    <yc-year-picker style="width: 300px" show-confirm-btn />
    <yc-month-picker style="width: 300px" show-confirm-btn />
    <yc-week-picker style="width: 300px" show-confirm-btn />
    <yc-date-picker
      default-value="2025-09-12 12:55"
      style="width: 300px"
      show-time
      format="YYYY-MM-DD HH:mm"
      value-format="YYYY-MM-DD HH:mm"
    />
    <a-date-picker v-model="value" showTime />
    <a-carousel
      animation-name="card"
      show-arrow="never"
      indicator-position="outer"
      :style="{
        width: '100%',
        height: '240px',
      }"
      direction="vertical"
    >
      <a-carousel-item v-for="image in images" :style="{ width: '60%' }">
        <img
          :src="image"
          :style="{
            width: '100%',
            objectFit: 'contain',
          }"
        />
      </a-carousel-item>
    </a-carousel>
    <yc-carousel
      show-arrow="never"
      indicator-position="outer"
      :style="{
        width: 'calc(100% - 40px)',
        height: '240px',
      }"
    >
      <yc-carousel-item v-for="image in images" :style="{ width: '60%' }">
        <img
          :src="image"
          :style="{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }"
        />
      </yc-carousel-item>
    </yc-carousel>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const value = ref('');
const images = [
  'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/cd7a1aaea8e1c5e3d26fe2591e561798.png~tplv-uwbnlip3yd-webp.webp',
  'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/6480dbc69be1b5de95010289787d64f1.png~tplv-uwbnlip3yd-webp.webp',
  'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/0265a04fddbd77a19602a15d9d55d797.png~tplv-uwbnlip3yd-webp.webp',
  'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/24e0dd27418d2291b65db1b21aa62254.png~tplv-uwbnlip3yd-webp.webp',
];
</script>

<style lang="less">
#app {
  height: 100vh;
  width: 100vw;
  .test {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
}
</style>
