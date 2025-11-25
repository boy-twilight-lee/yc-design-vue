<template>
  <div class="hero-image-container">
    <div class="image-bg"></div>
    <image-component class="VPImage image-src" />
  </div>
</template>

<script setup>
import ImageComponent from './compoent/component.vue';
</script>

<style lang="less" scoped>
.responsive-size() {
  width: 192px;
  height: 192px;

  @media (min-width: 640px) {
    width: 256px;
    height: 256px;
  }

  @media (min-width: 960px) {
    width: 320px;
    height: 320px;
  }
}

.hero-image-container {
  height: 100%;
  width: 100%;
  transform: translate(0, 32px);
  display: flex;
  justify-content: center;
  align-items: center;

  .image-bg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-image: var(--vp-hero-image-bg);
    filter: blur(68px);
    border-radius: 50%;

    .responsive-size();
  }

  .image-src {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .responsive-size();
  }
}
</style>
