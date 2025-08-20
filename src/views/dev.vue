<template>
  <div class="test">
    <yc-carousel
      :style="{
        width: '600px',
        height: '240px',
      }"
      :auto-play="true"
      indicator-type="dot"
      show-arrow="hover"
    >
      <yc-carousel-item v-for="image in images">
        <img
          :src="image"
          :style="{
            width: '100%',
          }"
        />
      </yc-carousel-item>
    </yc-carousel>
    <yc-image
      width="200"
      src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const images = [
  'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/cd7a1aaea8e1c5e3d26fe2591e561798.png~tplv-uwbnlip3yd-webp.webp',
  'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/6480dbc69be1b5de95010289787d64f1.png~tplv-uwbnlip3yd-webp.webp',
  'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/0265a04fddbd77a19602a15d9d55d797.png~tplv-uwbnlip3yd-webp.webp',
];
const value = ref('#165DFF');
</script>

<style lang="less" scoped>
.test {
  overflow: auto;
  height: 500vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
</style>
