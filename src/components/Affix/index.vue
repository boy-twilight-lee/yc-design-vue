<template>
  <div ref="wrapperRef">
    <div
      v-if="isFixed"
      :style="{
        width: valueToPx(width),
        height: valueToPx(height),
      }"
    ></div>
    <div
      :class="[
        {
          'yc-affix': isFixed,
        },
        $attrs.class,
      ]"
      :style="{
        ...style,
        ...($attrs.style || {}),
      }"
      ref="affixRef"
    >
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, toRefs, computed, CSSProperties, watch } from 'vue';
import { AffixProps, AffixEmits, AffixSlots, AffixExpose } from './type';
import { useResizeObserver, useEventListener } from '@vueuse/core';
import {
  isUndefined,
  findFirstScrollableParent,
  getElement,
  throttleByRaf,
  valueToPx,
} from '@shared/utils';
defineOptions({
  name: 'Affix',
  inheritAttrs: false,
});
defineSlots<AffixSlots>();
const props = withDefaults(defineProps<AffixProps>(), {
  offsetTop: 0,
  offsetBottom: undefined,
  target: undefined,
  targetContainer: undefined,
});
const emits = defineEmits<AffixEmits>();
const {
  target: _target,
  targetContainer: _targetContainer,
  offsetTop,
  offsetBottom,
} = toRefs(props);
// affixRef
const affixRef = ref<HTMLDivElement>();
// wrapperRef
const wrapperRef = ref<HTMLDivElement>();
// target
const target = computed(() => {
  return isUndefined(_target.value)
    ? findFirstScrollableParent(affixRef.value)
    : getElement(_target.value);
});
// 目标
const targetContainer = computed(() => {
  return isUndefined(_targetContainer.value)
    ? findFirstScrollableParent(affixRef.value)
    : getElement(_targetContainer.value);
});
// 是否固定
const isFixed = ref<boolean>(false);
// 固定样式
const style = ref<CSSProperties>({});
// 容器宽高
const width = ref<number>(0);
const height = ref<number>(0);
// 监听改变
useResizeObserver(
  affixRef,
  () => {
    const { width: w, height: h } = affixRef.value!.getBoundingClientRect();
    width.value = w;
    height.value = h;
    handleScroll();
  },
  {
    box: 'border-box',
  }
);
// 检测isFixed触发事件
watch(
  () => isFixed.value,
  (val) => {
    emits('change', val);
  }
);
// 处理滚动
const handleScroll = throttleByRaf(() => {
  if (!target.value || !targetContainer.value || !wrapperRef.value) return;
  const { top: wrapperTop, bottom: wrapperBottom } =
    wrapperRef.value!.getBoundingClientRect();
  const { top: targetTop, bottom: targetBottom } =
    targetContainer.value!.getBoundingClientRect();
  isFixed.value = isUndefined(offsetBottom.value)
    ? wrapperTop - targetTop <= offsetTop.value
    : targetBottom - wrapperBottom <= offsetBottom.value;
  if (isFixed.value) {
    style.value = isUndefined(offsetBottom.value)
      ? { position: 'fixed', top: valueToPx(targetTop + offsetTop.value) }
      : { position: 'fixed', bottom: valueToPx(offsetBottom.value) };
  } else {
    style.value = {};
  }
});
// 注册滚动
useEventListener(target, 'scroll', handleScroll);

defineExpose<AffixExpose>({
  updatePosition() {
    handleScroll();
  },
});
</script>
