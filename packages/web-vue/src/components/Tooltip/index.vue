<template>
  <yc-trigger
    v-model:popup-visible="computedVisible"
    :popup-container="popupContainer"
    :position="position"
    :arrow-class="['yc-tooltip-popup-arrow', arrowClass as string]"
    :arrow-style="arrowStyle"
    :content-class="[
      'yc-tooltip-popup-content',
      contentClass as string,
      {
        'yc-tooltip-mini': mini,
      },
    ]"
    :content-style="contentStyle"
    :popup-offset="10"
    :class="['yc-tooltip', $attrs.class]"
    :style="$attrs.style"
    animation-name="zoom-in-fade-out"
    need-transform-origin
    show-arrow
    v-bind="triggerProps"
  >
    <slot />
    <template #content>
      <slot name="content">
        {{ content }}
      </slot>
    </template>
  </yc-trigger>
</template>

<script lang="ts" setup>
import { toRefs, computed, CSSProperties } from 'vue';
import {
  TooltipProps,
  TooltipEmits,
  TooltipSlots,
  TooltipExpose,
} from './type';
import { useControlValue } from '@shared/utils';
import YcTrigger from '@/components/Trigger';
defineOptions({
  name: 'Tooltip',
});
defineSlots<TooltipSlots>();
const props = withDefaults(defineProps<TooltipProps>(), {
  popupVisible: undefined,
  defaultPopupVisible: false,
  content: '',
  position: 'top',
  mini: false,
  backgroundColor: 'rgb(29,33,41)',
  contentClass: '',
  contentStyle: () => {
    return {};
  },
  arrowClass: '',
  arrowStyle: () => {
    return {};
  },
  popupContainer: undefined,
  triggerProps: () => {
    return {};
  },
});
const emits = defineEmits<TooltipEmits>();
const {
  arrowStyle: _arrowStyle,
  contentStyle: _contentStyle,
  backgroundColor,
} = toRefs(props);
const { popupVisible, defaultPopupVisible } = toRefs(props);
// 受控的visible
const computedVisible = useControlValue<boolean>(
  popupVisible,
  defaultPopupVisible.value,
  (val) => {
    emits('update:popupVisible', val);
    emits('popup-visible-change', val);
  }
);
// content-style
const contentStyle = computed(() => {
  return {
    backgroundColor: backgroundColor.value,
    ..._contentStyle.value,
  } as CSSProperties;
});
// arrowStyle
const arrowStyle = computed(() => {
  return {
    backgroundColor: backgroundColor.value,
    ..._arrowStyle.value,
  };
});
defineExpose<TooltipExpose>({
  show() {
    computedVisible.value = true;
  },
  hide() {
    computedVisible.value = false;
  },
});
</script>

<style lang="less">
@import './style/tooltip.less';
</style>
