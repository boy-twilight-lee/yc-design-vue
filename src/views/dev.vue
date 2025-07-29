<template>
  <div class="test" id="test">
    <yc-trigger trigger="focus">
      <yc-input placeholder="Focus on me" />
      <template #content>
        <div class="demo-basic">
          <yc-empty />
        </div>
      </template>
    </yc-trigger>
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
  gap: 10px;
}
</style>
