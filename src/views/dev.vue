<template>
  <div class="test">
    <yc-space direction="vertical" size="large">
      <yc-cascader
        :options="options"
        :style="{ width: '320px' }"
        placeholder="Please select ..."
      />
      <yc-cascader
        :options="options"
        default-value="datunli"
        expand-trigger="hover"
        :style="{ width: '320px' }"
        placeholder="Please select ..."
      />
    </yc-space>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue';
const options = [
  {
    value: 'beijing',
    label: 'Beijing',
    children: [
      {
        value: 'chaoyang',
        label: 'ChaoYang',
        children: [
          {
            value: 'datunli',
            label: 'Datunli',
          },
        ],
      },
      {
        value: 'haidian',
        label: 'Haidian',
      },
      {
        value: 'dongcheng',
        label: 'Dongcheng',
      },
      {
        value: 'xicheng',
        label: 'Xicheng',
        children: [
          {
            value: 'jinrongjie',
            label: 'Jinrongjie',
          },
          {
            value: 'tianqiao',
            label: 'Tianqiao',
          },
        ],
      },
    ],
  },
  {
    value: 'shanghai',
    label: 'Shanghai',
    children: [
      {
        value: 'huangpu',
        label: 'Huangpu',
      },
    ],
  },
];
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
