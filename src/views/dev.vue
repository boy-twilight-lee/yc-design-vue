<template>
  <div class="test">
    <yc-space direction="vertical" size="large">
      <yc-radio-group type="button" v-model="size">
        <yc-radio value="mini">mini</yc-radio>
        <yc-radio value="small">small</yc-radio>
        <yc-radio value="medium">medium</yc-radio>
        <yc-radio value="large">large</yc-radio>
      </yc-radio-group>
      <yc-tag :size="size">测试</yc-tag>
    </yc-space>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const size = ref('medium');
</script>

<style lang="less" scoped>
.test {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;

  gap: 10px;
}
</style>
