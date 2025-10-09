<template>
  <div class="test">
    <yc-year-picker style="width: 300px" show-confirm-btn />
    <yc-month-picker style="width: 300px" show-confirm-btn />
    <yc-week-picker style="width: 300px" show-confirm-btn />
    <yc-date-picker v-model="value" style="width: 300px" show-confirm-btn />
    <!-- show-confirm-btn -->
    <!-- :shortcuts="[{ label: 1 }, { label: 1 }, { label: 1 }]" -->
    <a-date-picker v-model="value" showTime />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
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
