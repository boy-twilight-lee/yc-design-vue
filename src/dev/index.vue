<template>
  <div class="test">
    <yc-year-picker
      v-model="value"
      value-format="YYYY年"
      format="YYYY---年"
      style="width: 300px"
    >
      <template #extra>
        <yc-button type="primary">测试</yc-button>
      </template>
    </yc-year-picker>
    <a-year-picker
      v-model="value"
      value-format="YYYY年"
      format="YYYY---年"
      show-confirm-btn
    >
      <template #extra>
        <yc-button type="primary">测试</yc-button>
      </template>
      <template #cell="{ date }">
        <span>{{ date.getFullYear() }}</span>
      </template>
    </a-year-picker>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
const value = ref('');
watch(
  () => value.value,
  () => {
    console.log(value.value);
  }
);
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
