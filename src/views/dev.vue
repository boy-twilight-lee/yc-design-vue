<template>
  <div class="test">
    <yc-steps>
      <yc-step description="This is a description">
        Succeeded
        <template #icon>
          <icon-home />
        </template>
      </yc-step>
      <yc-step description="This is a description">
        Processing
        <template #icon>
          <icon-loading />
        </template>
      </yc-step>
      <yc-step description="This is a description">
        Pending
        <template #icon>
          <icon-thumb-up />
        </template>
      </yc-step>
    </yc-steps>
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
