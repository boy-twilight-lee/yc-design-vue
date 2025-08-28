<template>
  <div class="test">
    <yc-radio-group type="button">
      <yc-radio value="Beijing">Beijing</yc-radio>
      <yc-radio value="Shanghai">Shanghai</yc-radio>
      <yc-radio value="Guangzhou">Guangzhou</yc-radio>
      <yc-radio value="Shenzhen">Shenzhen</yc-radio>
    </yc-radio-group>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
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
  .a,
  .b {
    width: 200px;
    height: 200px;
    & {
      background-color: blue;
    }
  }
}
</style>
