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
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const value = ref('2025-09-12 12:55');
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
