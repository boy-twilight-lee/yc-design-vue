<template>
  <div class="yc-breadcrumb">
    <!-- 渲染默认插槽 -->
    <template v-if="$slots.default">
      <template v-for="(node, i) in breadcrumbItems" :key="i">
        <breadcrumb-more v-if="node?.type == 'more-icon'" :slots="slots" />
        <component v-else :is="node" />
        <!-- 分隔符 -->
        <breadcrumb-separator
          v-if="i < breadcrumbItems.length - 1"
          :separator="separator"
          :separator-slots="$slots.separator"
          :item-separator="node.props?.separator"
          :item-separator-slots="node.children?.separator"
        />
      </template>
    </template>
    <!-- routes渲染 -->
    <template v-else>
      <template v-for="(route, i) in routeData" :key="route.path">
        <!-- more-icon -->
        <breadcrumb-more v-if="isString(route)" :slots="slots" />
        <slot
          v-else
          name="item-render"
          :route="route"
          :routes="routes"
          :paths="getPaths(route.index as number)"
        >
          <!-- item -->
          <yc-breadcrumb-item
            :path="
              route.index == routeData.length - 1
                ? route.path
                : (customUrl?.(getPaths(route.index as number)) ?? route.path)
            "
            :droplist="route.children"
          >
            {{ route.label }}
          </yc-breadcrumb-item>
        </slot>
        <!-- 分割符 -->
        <breadcrumb-separator
          v-if="i < routes.length - 1"
          :separator="separator"
          :separator-slots="$slots.separator"
        />
      </template>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { toRefs, computed, useSlots } from 'vue';
import { BreadcrumbProps, BreadcrumbSlots } from './type';
import { findComponentsFromVnodes, isString } from '@shared/utils';
import { BreadcrumbItem as YcBreadcrumbItem } from './index';
import BreadcrumbSeparator from './BreadcrumbSeparator.vue';
import BreadcrumbMore from './BreadcrumbMore.vue';
defineOptions({
  name: 'Breadcrumb',
});
defineSlots<BreadcrumbSlots>();
const props = withDefaults(defineProps<BreadcrumbProps>(), {
  maxCount: 0,
  routes: () => [],
  separator: '',
  customUrl: undefined,
});
const { maxCount, routes } = toRefs(props);
// 注入数据
const slots = useSlots();
// slot-items
const breadcrumbItems = computed(() => {
  const nodes = findComponentsFromVnodes(
    slots.default?.() || [],
    YcBreadcrumbItem.name as string
  );
  return maxCount.value > 0 && nodes.length > maxCount.value
    ? [
        ...nodes.slice(0, 1),
        {
          type: 'more-icon',
        },
        ...nodes.slice(nodes.length - maxCount.value + 1, nodes.length),
      ]
    : nodes;
});
// routes
const routeData = computed(() => {
  const data = routes.value.map((item, i) => {
    return {
      ...item,
      index: i,
    };
  });
  return maxCount.value > 0 && data.length > maxCount.value
    ? [
        ...data.slice(0, 1),
        'more-icon',
        ...data.slice(data.length - maxCount.value + 1, data.length),
      ]
    : routes.value;
});
// 获取path
const getPaths = (index: number) => {
  return routes.value
    .slice(0, index + 1)
    .map((item) => item.path?.replace(/\//g, '')) as string[];
};
</script>

<style lang="less" scoped>
@import './style/breadcrumb.less';
</style>
