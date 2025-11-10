<template>
  <div class="test">
    <yc-button @click="count += 1000">点击切换数字</yc-button>
    <yc-list
      :style="{ width: `600px` }"
      :virtualListProps="{
        count: list.length,
        estimateSize: () => 103,
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
      :virtual-list-props="{
        count: options.length,
        estimateSize: () => 36,
      }"
      :options="options"
      style="width: 200px"
      placeholder="请输入"
    />
    <yc-cascader placeholder="请输入" />
    <yc-auto-complete placeholder="请输入" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
const count = ref(1000);
const options = computed(() => {
  return new Array(count.value).fill(null).map((_, i) => {
    return {
      label: '选项' + i,
      value: i,
    };
  });
});
const list = computed(() => {
  return Array(count.value)
    .fill(null)
    .map((_, index) => {
      const prefix = `0000${index}`.slice(-5);
      return {
        title: 'Beijing Bytedance Technology Co., Ltd.',
        description: `(${prefix}) Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.`,
      };
    });
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
