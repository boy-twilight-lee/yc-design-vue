<template>
  <div class="test">
    <yc-dropdown trigger="contextMenu" alignPoint :style="{ display: 'block' }">
      <div
        :style="{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '300px',
          backgroundColor: 'var(--color-fill-2)',
        }"
      >
        <div>Click Me</div>
      </div>
      <template #content>
        <yc-doption>Option 1</yc-doption>
        <yc-doption>Option 2</yc-doption>
        <yc-doption>Option 3</yc-doption>
      </template>
    </yc-dropdown>
    <yc-affix :offsetTop="100">
      <yc-button type="primary">Affix Top</yc-button>
    </yc-affix>
    <div style="height: 200px; overflow: auto" ref="containerRef1">
      <div style="height: 400px; background: #cccccc; overflow: hidden">
        <a-affix :offsetTop="20" :target="containerRef1" style="margin: 40px">
          <a-button type="primary">Affix in scrolling container</a-button>
        </a-affix>
      </div>
    </div>
    <div style="height: 200px; overflow: auto" ref="containerRef">
      <div style="height: 400px; background: #cccccc; overflow: hidden">
        <yc-affix
          :offsetTop="20"
          :target="containerRef"
          :target-container="containerRef"
          style="margin: 40px"
        >
          <yc-button type="primary">Affix in scrolling container</yc-button>
        </yc-affix>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
const containerRef = ref();
const containerRef1 = ref();
onMounted(() => {
  containerRef.value = document.querySelector('html');
  window.addEventListener('scroll', () => {
    console.log('scroll');
  });
});
</script>

<style lang="less" scoped>
.test {
  overflow: auto;
  height: 500vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
