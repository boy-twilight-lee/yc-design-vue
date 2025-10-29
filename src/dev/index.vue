<template>
  <div class="test">
    <yc-year-picker />
    <yc-month-picker />
    <yc-week-picker />
    <yc-date-picker
      default-value="2025-09-12 12:55"
      format="YYYY-MM-DD HH:mm"
      show-time
    />
    <a-year-picker />
    <a-month-picker />
    <a-week-picker />
    <a-date-picker showTime value-format="timestamp" />
    <yc-result title="测试" subtitle="哈哈" status="404"> dsadsa </yc-result>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
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
