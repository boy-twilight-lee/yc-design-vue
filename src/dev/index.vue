<template>
  <div class="test">
    <yc-year-picker
      v-model="value"
      :disabled-date="(date) => [2022].includes(date.getFullYear())"
      format="YYYY---年"
      style="width: 300px"
      show-confirm-btn
      allow-clear
      value-format="Date"
      @change="(v) => console.log(v)"
    >
    </yc-year-picker>
    <a-year-picker
      v-model="value"
      :disabled-date="(date) => [2022].includes(date.getFullYear())"
      shortcuts-position="bottom"
      preview-shortcut
      :shortcuts="[
        {
          label: '测试',
        },
        {
          label: '测试',
        },
        {
          label: '测试',
        },
        {
          label: '测试',
        },
        {
          label: '测试',
        },
      ]"
      value-format="YYYY年"
      format="YYYY---年"
      show-confirm-btn
    >
    </a-year-picker>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
const value = ref('');
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
