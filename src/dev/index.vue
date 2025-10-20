<template>
  <div class="test">
    <yc-year-picker show-confirm-btn />
    <yc-month-picker show-confirm-btn />
    <yc-week-picker show-confirm-btn />
    <yc-date-picker
      default-value="2025-09-12 12:55"
      show-time
      format="YYYY-MM-DD HH:mm"
      value-format="YYYY-MM-DD HH:mm"
    />
    <a-date-picker v-model="value" showTime />
    <yc-time-picker type="time-range" disable-confirm />
    <a-time-picker type="time-range" disable-confirm />
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
