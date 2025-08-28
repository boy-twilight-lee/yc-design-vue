<template>
  <div
    :class="[
      'yc-card',
      `yc-card-size-${size}`,
      {
        'yc-card-bordered': bordered,
        'yc-card-hoverable': hoverable,
        'yc-card-loading': loading,
        'yc-card-contain-grid': hasGrid,
      },
    ]"
  >
    <div
      v-if="title || extra || $slots.title || $slots.extra"
      class="yc-card-header"
      :style="headerStyle"
    >
      <div
        v-if="title || $slots.title"
        class="yc-card-header-title text-ellipsis"
      >
        <slot name="title">
          {{ title }}
        </slot>
      </div>
      <div
        v-if="extra || $slots.extra"
        class="yc-card-header-extra text-ellipsis"
      >
        <slot name="extra">
          {{ extra }}
        </slot>
      </div>
    </div>
    <div v-if="$slots.cover" class="yc-card-cover">
      <slot name="cover" />
    </div>
    <div class="yc-card-body" :style="bodyStyle">
      <yc-spin v-if="loading" is-size-inherit loading>
        <slot />
      </yc-spin>
      <slot v-else />
      <div v-if="$slots.actions && !hasMeta" class="yc-card-actions">
        <div class="yc-card-actions-right text-ellipsis">
          <slot name="actions" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { CardProps, CardSlots } from './type';
import { findComponentsFromVnodes, getGlobalConfig } from '@shared/utils';
import useContext from './hooks/useContext';
import YcSpin from '@/components/Spin';
import CardGrid from './CardGrid.vue';
import CardMeta from './CardMeta.vue';
defineOptions({
  name: 'Card',
});
defineSlots<CardSlots>();
const props = withDefaults(defineProps<CardProps>(), {
  bordered: true,
  loading: false,
  hoverable: false,
  size: undefined,
  headerStyle: () => {
    return {};
  },
  bodyStyle: () => {
    return {};
  },
  title: '',
  extra: '',
});
// size
const { size } = getGlobalConfig(props);
// 注入
const { slots } = useContext().provide();
// 计算node
const nodes = computed(() => slots.default?.() || []);
// 是否有meta
const hasMeta = computed(() => {
  const meta = findComponentsFromVnodes(nodes.value, CardMeta.name as string);
  return !!meta.length;
});
// 是否grid
const hasGrid = computed(() => {
  const grid = findComponentsFromVnodes(nodes.value, CardGrid.name as string);
  return !!grid.length;
});
</script>

<style lang="less" scoped>
@import './style/card.less';
</style>
