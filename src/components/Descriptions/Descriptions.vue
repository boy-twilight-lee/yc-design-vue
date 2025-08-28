<template>
  <div
    :class="[
      'yc-descriptions',
      `yc-descriptions-size-${size}`,
      `yc-descriptions-layout-${layout}`,
      {
        'yc-descriptions-bordered': bordered,
        'yc-descriptions-table-layout-fixed ': tableLayout == 'fixed',
      },
    ]"
  >
    <div v-if="$slots.title || title" class="yc-descriptions-title">
      <slot name="title">
        {{ title }}
      </slot>
    </div>
    <div class="yc-descriptions-body">
      <table class="yc-descriptions-table">
        <tbody>
          <!-- 渲染horizontal -->
          <template v-if="layout == 'horizontal'">
            <tr
              v-for="(v, i) in renderArr"
              :key="i"
              class="yc-descriptions-row"
            >
              <template v-for="(item, i1) in v" :key="i1">
                <!-- 渲染label -->
                <reuse-td type="label" :data="item" :index="v.length + i1" />
                <!-- 渲染value -->
                <reuse-td
                  type="value"
                  :data="item"
                  :index="v.length + i1"
                  :colspan="calcSpan(i1, v)"
                />
              </template>
            </tr>
          </template>
          <!-- 渲染vertical -->
          <template v-else-if="layout == 'vertical'">
            <template v-for="(v, i) in renderArr" :key="i">
              <tr class="yc-descriptions-row">
                <reuse-td
                  v-for="(item, i1) in v"
                  :key="i1"
                  type="label"
                  :data="item"
                  :index="v.length + i1"
                  :colspan="calcSpan(i1, v)"
                />
              </tr>
              <tr class="yc-descriptions-row">
                <reuse-td
                  v-for="(item, i1) in v"
                  :key="i1"
                  type="value"
                  :data="item"
                  :index="v.length + i1"
                  :colspan="calcSpan(i1, v)"
                />
              </tr>
            </template>
          </template>
          <!-- 渲染inline -->
          <template v-else>
            <tr
              v-for="(v, i) in renderArr"
              :key="i"
              class="yc-descriptions-row"
            >
              <reuse-item
                v-for="(item, i1) in v"
                :key="i1"
                :data="item"
                :index="v.length + i1"
                :colspan="calcSpan(i1, v)"
              />
            </tr>
          </template>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { DescriptionsProps, DescriptionsSlots, DescData } from './type';
import ReuseTd from './ReuseTd.vue';
import ReuseItem from './ReuseItem.vue';
import useContext from './hooks/useContext';
defineOptions({
  name: 'Descriptions',
});
defineSlots<DescriptionsSlots>();
const props = withDefaults(defineProps<DescriptionsProps>(), {
  data: () => [],
  column: 3,
  title: '',
  layout: 'horizontal',
  align: 'left',
  size: undefined,
  bordered: false,
  labelStyle: () => {
    return {};
  },
  valueStyle: () => {
    return {};
  },
  tableLayout: 'auto',
});
// 注入
const { column, size, data, layout } = useContext().provide(props);
// 行数
const renderArr = computed(() => {
  let count = 0;
  const rowArray: number[][] = [];
  for (let i = 0; i < data.value.length; i++) {
    const newCount = count + (data.value?.[i]?.span ?? 1);
    if (newCount >= column.value) {
      const pre = rowArray.length ? rowArray[rowArray.length - 1][1] : 0;
      rowArray.push([pre, i + 1]);
      count = 0;
    } else {
      count = newCount;
    }
  }
  if (rowArray.length && rowArray[rowArray.length - 1][1] != column.value) {
    rowArray.push([rowArray[rowArray.length - 1][1]]);
  }
  return rowArray
    .map((v) => data.value.slice(...v))
    .filter((item) => item.length);
});
// 获取node的span
function getSpan(data: DescData) {
  const _span = data.span || 1;
  const span = layout.value == 'horizontal' ? _span * 2 - 1 : _span;
  const totalSpan =
    layout.value == 'horizontal' ? 2 * column.value : column.value;
  return span >= totalSpan - 1 ? totalSpan - 1 : span;
}
// 计算span
const calcSpan = (i: number, array: DescData[]) => {
  return i == array.length - 1
    ? array.reduce((pre, cur, index) => {
        if (index < array.length - 1) {
          return pre + getSpan(cur);
        } else {
          const totalSpan =
            layout.value == 'horizontal' ? 2 * column.value : column.value;
          const span = totalSpan - pre;
          return span <= 1 ? 1 : span;
        }
      }, 0)
    : getSpan(array[i]);
};
</script>

<style lang="less">
@import './style/descriptions.less';
@import './style/descriptions-item.less';
</style>
