<template>
  <component
    :is="vNode"
    ref="triggerRef"
    @click="handleClickEvent($event, 'click')"
    @contextmenu.prevent="handleClickEvent($event, 'contextMenu')"
    @mouseenter="handleMouseenter"
    @mouseleave="handleMouseleave"
    @focus="handleFocus"
    @blur="handleBlur"
  />
  <teleport :to="popupContainer" :disabled="!renderToBody">
    <transition
      :name="animationName"
      :duration="duration"
      @after-leave="$emit('hide')"
      @after-enter="$emit('show')"
    >
      <!-- wrapper -->
      <prevent-focus
        v-if="!unmountOnClose || (computedVisible && !disabled)"
        v-show="computedVisible && !disabled"
        :prevent-focus="preventFocus"
        :class="[
          'yc-trigger',
          `yc-trigger-position-${position}`,
          {
            'yc-trigger-transform-origin': needTransformOrigin,
            'yc-trigger-absolute': isAbsolute,
          },
          $attrs.class,
        ]"
        :style="{
          zIndex,
          ...popupStyle,
          ...($attrs.style || {}),
        }"
        ref="popupRef"
        @mouseenter="handleMouseenter"
        @mouseleave="handleMouseleave"
      >
        <!-- content -->
        <div
          :class="['yc-trigger-content', contentClass]"
          :style="contentStyle"
        >
          <slot name="content" />
        </div>
        <!-- arrow -->
        <div
          v-if="showArrow"
          :class="['yc-trigger-arrow', arrowClass]"
          :style="arrowStyle"
          ref="arrowRef"
        ></div>
      </prevent-focus>
    </transition>
  </teleport>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import {
  TriggerProps,
  TriggerEmits,
  TriggerSlots,
  TriggerExpose,
} from './type';
import { findFirstLegitChild } from '@shared/utils/vue-utils';
import { getGlobalConfig } from '@shared/utils/global-config';
import useTriggerVisible from './hooks/useTriggerVisible';
import useTriggerPosition from './hooks/useTriggerPosition';
import { PreventFocus } from '@shared/components';
defineOptions({
  name: 'Trigger',
  inheritAttrs: false,
});
const $slots = defineSlots<TriggerSlots>();
const props = withDefaults(defineProps<TriggerProps>(), {
  popupVisible: undefined,
  defaultPopupVisible: false,
  trigger: 'hover',
  position: 'bottom',
  disabled: false,
  popupOffset: 0,
  popupTranslate: () => [0, 0],
  showArrow: false,
  blurToClose: true,
  clickToClose: true,
  clickOutsideToClose: true,
  unmountOnClose: true,
  contentClass: '',
  contentStyle: () => {
    return {};
  },
  arrowClass: '',
  arrowStyle: () => {
    return {};
  },
  animationName: 'fade',
  duration: 400,
  mouseEnterDelay: 100,
  mouseLeaveDelay: 100,
  focusDelay: 0,
  autoFitPopupWidth: false,
  autoFitPopupMinWidth: false,
  popupContainer: undefined,
  renderToBody: true,
  autoFitPosition: true,
  updateAtScroll: true,
  scrollToClose: false,
  scrollToCloseDistance: 1,
  preventFocus: false,
  alignPoint: false,
  needTransformOrigin: false,
  autoSetPosition: false,
});
const emits = defineEmits<TriggerEmits>();
// 接收属性
const { popupContainer, isAbsolute, zIndex } = getGlobalConfig(props);
// 弹出层的ref
const popupRef = ref<HTMLDivElement>();
// trigger的ref
const triggerRef = ref<HTMLElement>();
// arrowRef
const arrowRef = ref<HTMLElement>();
// slots
const vNode = computed(() => {
  return findFirstLegitChild($slots.default?.() || []);
});
// 处理trigger关闭与开启
const {
  computedVisible,
  mouseX,
  mouseY,
  handleClickEvent,
  handleMouseenter,
  handleMouseleave,
  handleFocus,
  handleBlur,
} = useTriggerVisible({
  props,
  emits,
  popupRef,
  triggerRef,
});
// 计算wrapper与arrow的位置信息
const { position, popupStyle, contentStyle, arrowStyle } = useTriggerPosition({
  props,
  computedVisible,
  popupRef,
  triggerRef,
  arrowRef,
  mouseX,
  mouseY,
});
defineExpose<TriggerExpose>({
  hide() {
    computedVisible.value = false;
  },
  show() {
    computedVisible.value = true;
  },
  updatePosition(x: number, y: number) {
    mouseX.value = x;
    mouseY.value = y;
  },
});
</script>

<style lang="less">
@import './style/trigger.less';
</style>
