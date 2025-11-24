<template>
  <yc-resize-box
    v-if="resizeDirections.length"
    v-model:width="asideWidth"
    :directions="resizeDirections"
    :class="[
      'yc-layout-sider',
      `yc-layout-sider-${theme}`,
      $attrs.class,
      {
        'yc-layout-sider-has-trigger': showTrigger,
      },
    ]"
  >
    <div class="yc-layout-sider-children">
      <slot />
    </div>
    <div
      v-if="showTrigger"
      class="yc-layout-sider-trigger"
      @click="handleCollapse"
    >
      <slot name="trigger" :collapsed="computedCollapsed">
        <icon-arrow-right
          :rotate="computedCollapsed && !reverseArrow ? 0 : 180"
        />
      </slot>
    </div>
  </yc-resize-box>
  <aside
    v-else
    :class="[
      'yc-layout-sider',
      'yc-layout-sider-translation',
      `yc-layout-sider-${theme}`,
      $attrs.class,
      {
        'yc-layout-sider-has-trigger': showTrigger,
      },
    ]"
    :style="{
      ...($attrs.style || {}),
      width: computedCollapsed
        ? valueToPx(collapsedWidth)
        : ($attrs.style as CSSProperties)?.width || valueToPx(asideWidth),
    }"
  >
    <div class="yc-layout-sider-children">
      <slot />
    </div>
    <div
      v-if="showTrigger"
      class="yc-layout-sider-trigger"
      @click="handleCollapse"
    >
      <slot name="trigger" :collapsed="computedCollapsed">
        <icon-arrow-right
          :rotate="computedCollapsed && !reverseArrow ? 0 : 180"
        />
      </slot>
    </div>
  </aside>
</template>

<script lang="ts" setup>
import { ref, toRefs, computed, CSSProperties } from 'vue';
import { LayoutSiderProps, LayoutSiderEmits, LayoutSiderSlots } from './type';
import { mediaQueryHandler, valueToPx } from '@shared/utils';
import { IconArrowRight } from '@shared/icons';
import useSiderContext from './hooks/useSiderContext';
import YcResizeBox from '@/components/ResizeBox';
defineOptions({
  name: 'LayoutSider',
  inheritAttrs: false,
});
defineSlots<LayoutSiderSlots>();
const props = withDefaults(defineProps<LayoutSiderProps>(), {
  theme: undefined,
  collapsed: undefined,
  defaultCollapsed: false,
  collapsible: false,
  width: 200,
  collapsedWidth: 48,
  reverseArrow: false,
  breakpoint: undefined,
  hideTrigger: false,
  resizeDirections: () => {
    return [];
  },
});
const emits = defineEmits<LayoutSiderEmits>();
const {
  collapsible,
  breakpoint,
  hideTrigger,
  collapsedWidth,
  width: _width,
} = toRefs(props);
const { theme, computedCollapsed } = useSiderContext().provide(props, emits);
// 宽度
const asideWidth = ref<number>(_width.value);
// 展示trigger
const showTrigger = computed(() => {
  return !hideTrigger.value && collapsible.value;
});
// 处理点击收缩
const handleCollapse = () => {
  if (!collapsible.value) return;
  const value = !computedCollapsed.value;
  computedCollapsed.value = value;
  asideWidth.value = value ? collapsedWidth.value : _width.value;
  emits('collapse', value, 'clickTrigger');
};
// 处理媒体查询搜索
mediaQueryHandler((_, order, i) => {
  if (!collapsible.value || !breakpoint.value) return;
  const value = i <= order[breakpoint.value];
  computedCollapsed.value = value;
  asideWidth.value = value ? collapsedWidth.value : _width.value;
  emits('collapse', value, 'responsive');
  emits('breakpoint', value);
});
</script>

<style lang="less">
@import './style/layout.less';
</style>
