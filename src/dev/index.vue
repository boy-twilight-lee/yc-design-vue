<template>
  <div class="test">
    <yc-year-picker
      style="width: 300px"
      show-confirm-btn
      :shortcuts="shortcuts"
      :preview-shortcut="false"
      shortcuts-position="bottom"
      @change="(v) => console.log(v)"
    >
    </yc-year-picker>
    <a-year-picker
      v-model="value"
      shortcuts-position="bottom"
      :shortcuts="shortcuts"
      :previewShortcut="false"
      show-confirm-btn
    >
    </a-year-picker>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
const value = ref('');
const shortcuts = [
  {
    label: '2020',
    value: new Date(2020, 1, 0, 0, 0, 0),
  },
  {
    label: '2021',
    value: new Date(2021, 1, 0, 0, 0, 0),
  },
  {
    label: '2022',
    value: new Date(2022, 1, 0, 0, 0, 0),
  },
  {
    label: '2023',
    value: new Date(2023, 1, 0, 0, 0, 0),
  },
  {
    label: '2024',
    value: new Date(2024, 1, 0, 0, 0, 0),
  },
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
