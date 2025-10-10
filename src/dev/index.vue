<template>
  <div class="test">
    <yc-year-picker style="width: 300px" show-confirm-btn />
    <yc-month-picker style="width: 300px" show-confirm-btn />
    <yc-week-picker style="width: 300px" show-confirm-btn />
    <yc-date-picker
      v-model="value"
      style="width: 300px"
      show-confirm-btn
      show-time
    />
    <a-date-picker v-model="value" showTime />
    <yc-time-picker default-value="19:33:22" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const value = ref('');
const highlightDates = [6, 14, 22];
const highlightStyle = {
  border: '1px solid rgb(var(--arcoblue-6))',
};
function getCellStyle(date) {
  return highlightDates.includes(date.getDate()) ? highlightStyle : {};
}
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
