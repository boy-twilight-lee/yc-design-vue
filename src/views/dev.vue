<template>
  <div class="test">
    <yc-space>
      <yc-tag checkable>Awesome</yc-tag>
      <yc-tag checkable color="red" :default-checked="true">Toutiao</yc-tag>
      <yc-tag checkable color="arcoblue" :default-checked="true">Lark</yc-tag>
    </yc-space>
    <yc-space wrap>
      <yc-tag
        v-for="(color, index) of colors"
        :key="index"
        :color="color"
        closable
        >{{ color }}</yc-tag
      >
    </yc-space>
    <h3>Custom Color:</h3>
    <yc-space wrap>
      <yc-tag
        v-for="(color, index) of custom"
        :key="index"
        :color="color"
        closable
        >{{ color }}</yc-tag
      >
    </yc-space>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { Message } from '@arco-design/web-vue';
// document.documentElement.setAttribute('yc-design-dark', '');
// document.body.setAttribute('arco-theme', 'dark');
const colors = [
  'red',
  'orangered',
  'orange',
  'gold',
  'lime',
  'green',
  'cyan',
  'blue',
  'arcoblue',
  'purple',
  'pinkpurple',
  'magenta',
  'gray',
];
const custom = [
  '#f53f3f',
  '#7816ff',
  '#00b42a',
  '#165dff',
  '#ff7d00',
  '#eb0aa4',
  '#7bc616',
  '#86909c',
  '#b71de8',
  '#0fc6c2',
  '#ffb400',
  '#168cff',
  '#ff5722',
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
}
</style>
