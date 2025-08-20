<template>
  <div class="test">
    <yc-space size="large">
      <yc-statistic title="New Users" :value="125670" show-group-separator>
        <template #suffix>
          <icon-arrow-rise />
        </template>
      </yc-statistic>
      <yc-statistic
        title="User Growth Rate"
        :value="50.52"
        :precision="2"
        :value-style="{ color: '#0fbf60' }"
      >
        <template #prefix>
          <icon-arrow-rise />
        </template>
        <template #suffix>%</template>
      </yc-statistic>
    </yc-space>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue';
</script>

<style lang="less" scoped>
.test {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  .button {
    width: 100px;
  }
}
</style>
