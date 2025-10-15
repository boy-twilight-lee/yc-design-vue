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
    <yc-popover>
      <a-button>测试</a-button>
      <template #content>
        <yc-empty style="width: 200px" />
      </template>
    </yc-popover>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { dayjs } from '@shared/utils';
const value = ref('2025-09-12 12:55');
const shortcuts = [
  {
    label: 'yesterday',
    value: () => dayjs().subtract(1, 'day'),
  },
  {
    label: 'today',
    value: () => dayjs(),
  },
  {
    label: 'a week later',
    value: () => dayjs().add(1, 'week'),
  },
  {
    label: 'a month later',
    value: () => dayjs().add(1, 'month'),
  },
  {
    label: '2 months later',
    value: () => dayjs().add(2, 'month'),
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
