<template>
  <div class="test">
    <yc-config-provider :locale="enUs">
      <yc-year-picker
        style="width: 300px"
        show-confirm-btn
        allow-clear
        shortcuts-position="bottom"
        @change="(v) => console.log(v)"
      >
      </yc-year-picker>
      <yc-month-picker
        style="width: 300px"
        allow-clear
        @change="(v) => console.log(v)"
      >
      </yc-month-picker>
    </yc-config-provider>
    <a-month-picker
      v-model="value"
      :abbreviation="true"
      allow-clear
      show-confirm-btn
    >
    </a-month-picker>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import enUs from '@/lang/lang-es/en-us';
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
