<template>
  <div class="test" id="test">
    <div
      :style="{
        width: '100%',
        height: '400px',
        backgroundColor: 'var(--color-fill-2)',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }"
      ref="containerRef"
    >
      <yc-image
        width="200"
        src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp"
        :preview-props="{
          popupContainer: containerRef,
          closable: false,
        }"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue';
const containerRef = ref();
</script>

<style lang="less" scoped>
.test {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.trigger-demo-translate {
  padding: 10px;
  width: 200px;
  background-color: var(--color-bg-popup);
  border-radius: 4px;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);
}
</style>
