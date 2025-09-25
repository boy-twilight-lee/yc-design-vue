<template>
  <div class="test">
    <yc-input-password v-model="value" style="width: 300px">
      <template #suffix> dsadsa </template>
    </yc-input-password>
    <yc-input-search
      style="width: 300px"
      search-button
      error
      loading
      @search="
        (v) => {
          console.log('search', v);
        }
      "
    />
    <a-input-search
      style="width: 300px"
      search-button
      error
      loading
      @search="
        (v) => {
          console.log('search', v);
        }
      "
    />
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
const value = ref('dsads');
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
