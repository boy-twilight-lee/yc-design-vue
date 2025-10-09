<template>
  <div class="test">
    <yc-year-picker
      style="width: 300px"
      show-confirm-btn
      allow-clear
      @change="(v) => console.log(v)"
    >
    </yc-year-picker>
    <yc-month-picker
      style="width: 300px"
      allow-clear
      @change="(v) => console.log(v)"
    >
    </yc-month-picker>
    <yc-week-picker
      v-model="value"
      style="width: 300px"
      value-format="YYYY-MM-DD"
      :disabledDate="(date) => date.getFullYear() == 2025"
    />
    <a-week-picker
      v-model="value"
      :disabledDate="(date) => date.getFullYear() == 2025"
    >
    </a-week-picker>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
const value = ref('2025-02-01');
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
