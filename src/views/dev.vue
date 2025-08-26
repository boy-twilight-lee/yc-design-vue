<template>
  <div class="test">
    <div style="width: 300px">
      <yc-slider :min="0" :max="10000" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
const width = ref(500);
const number = ref(10);
const tags = computed(() =>
  Array.from({ length: number.value }, (_, idx) => idx + 1)
);
</script>

<style lang="less" scoped>
.test {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
}
</style>
