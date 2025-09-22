<template>
  <div class="test">
    <yc-resize-box
      v-model:width="width"
      v-model:height="height"
      :directions="['right', 'bottom']"
      :style="{
        minWidth: '100px',
        maxWidth: '100%',
        textAlign: 'center',
      }"
    >
      <yc-typography-paragraph
        >We are building the future of content discovery and
        creation.</yc-typography-paragraph
      >
      <yc-divider />
      <yc-typography-paragraph>
        ByteDance's content platforms enable people to enjoy content powered by
        AI technology. We inform, entertain, and inspire people across language,
        culture and geography.
      </yc-typography-paragraph>
      <yc-divider>ByteDance</yc-divider>
      <yc-typography-paragraph
        >Yiming Zhang is the founder and CEO of
        ByteDance.</yc-typography-paragraph
      >
    </yc-resize-box>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const width = ref(500);
const height = ref(200);
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
