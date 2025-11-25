<template>
  <div class="test">
    <yc-button @click="count += 1000">点击切换数字</yc-button>
    <yc-list
      :style="{ width: `600px` }"
      :virtualListProps="{
        count: list.length,
        estimateSize: () => 100,
      }"
      max-height="500"
      :data="list"
    >
      <template #item="{ item, index }">
        <yc-list-item :key="index">
          <yc-list-item-meta
            :title="item.title"
            :description="item.description"
          >
            <template #avatar>
              <a-avatar shape="square"> A </a-avatar>
            </template>
          </yc-list-item-meta>
        </yc-list-item>
      </template>
    </yc-list>
    <yc-select
      :style="{ width: '320px' }"
      :options="options"
      loading
      :virtual-list-props="{ estimateSize: () => 36, count: options.length }"
      placeholder="Please select ..."
    />
    <yc-cascader loading :style="{ width: '320px' }" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
const count = ref(10000);
const list = computed(() => {
  return Array(count.value)
    .fill(null)
    .map((_, i) => {
      const prefix = `0000${i + 1}`.slice(-5);
      return {
        title: 'Beijing Bytedance Technology Co., Ltd.',
        description: `(${prefix}) Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.`,
      };
    });
});
const options = computed(() => {
  return Array(count.value)
    .fill(null)
    .map((_, index) => `Option ${index}`);
});
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
