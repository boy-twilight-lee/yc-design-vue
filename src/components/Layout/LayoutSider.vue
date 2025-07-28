<template>
  <!-- 伸缩杆 -->
  <yc-resize-box
    v-if="resizeDirections.length"
    v-model:width="asideWidth"
    :directions="resizeDirections"
    :class="[
      'yc-layout-sider',
      `yc-layout-sider-${theme}`,
      {
        'yc-layout-sider-has-trigger': showTrigger,
      },
    ]"
  >
    <slot />
    <div v-if="showTrigger" class="yc-collapse-button" @click="handleCollapse">
      <slot name="trigger" :collapsed="computedCollapsed">
        <icon-arrow-right
          :rotate="computedCollapsed && !reverseArrow ? 0 : 180"
        />
      </slot>
    </div>
  </yc-resize-box>
  <!-- 默认元素 -->
  <aside
    v-else
    :class="[
      'yc-layout-sider',
      'yc-layout-sider-translation',
      `yc-layout-sider-${theme}`,
      {
        'yc-layout-sider-collapsed': computedCollapsed,
        'yc-layout-sider-has-trigger': showTrigger,
      },
    ]"
  >
    <slot />
    <div v-if="showTrigger" class="yc-collapse-button" @click="handleCollapse">
      <slot name="trigger" :collapsed="computedCollapsed">
        <icon-arrow-right
          :rotate="computedCollapsed && !reverseArrow ? 0 : 180"
        />
      </slot>
    </div>
  </aside>
</template>

<script lang="ts" setup>
import { ref, toRefs, computed } from 'vue';
import { LayoutSiderProps, LayoutSiderEmits, LayoutSiderSlots } from './type';
import { useControlValue, mediaQueryHandler, valueToPx } from '@shared/utils';
import { IconArrowRight } from '@shared/icons';
import YcResizeBox from '@/components/ResizeBox';
defineOptions({
  name: 'LayoutSider',
});
defineSlots<LayoutSiderSlots>();
const props = withDefaults(defineProps<LayoutSiderProps>(), {
  theme: 'light',
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
  collapsed,
  defaultCollapsed,
  collapsible,
  breakpoint,
  hideTrigger,
  width: _width,
  collapsedWidth: _collapsedWidth,
} = toRefs(props);
// 宽度
const asideWidth = ref<number>(_width.value);
// 计算的宽度
const computedWidth = computed(() => valueToPx(asideWidth.value));
// 计算width
const collapsedWidth = computed(() => valueToPx(_collapsedWidth.value));
// 受控的收缩
const computedCollapsed = useControlValue<boolean>(
  collapsed,
  defaultCollapsed.value,
  (val) => {
    emits('update:collapsed', val);
  }
);
// 展示trigger
const showTrigger = computed(() => {
  return !hideTrigger.value && collapsible.value;
});
// 处理点击收缩
const handleCollapse = () => {
  if (!collapsible.value) return;
  const value = !computedCollapsed.value;
  computedCollapsed.value = value;
  asideWidth.value = value ? _collapsedWidth.value : _width.value;
  emits('collapse', value, 'clickTrigger');
};
// 处理媒体查询搜索
mediaQueryHandler((_, order, i) => {
  if (!collapsible.value || !breakpoint.value) return;
  const value = i <= order[breakpoint.value];
  computedCollapsed.value = value;
  asideWidth.value = value ? _collapsedWidth.value : _width.value;
  emits('collapse', value, 'responsive');
  emits('breakpoint', value);
});
</script>

<style lang="less" scoped>
@import './style/layout.less';
.yc-layout-sider {
  width: v-bind(computedWidth);
}
.yc-layout-sider-collapsed {
  width: v-bind(collapsedWidth) !important;
}
</style>
