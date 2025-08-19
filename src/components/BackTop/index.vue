<template>
  <transition name="fade">
    <div
      v-show="curScroll >= visibleHeight"
      class="yc-back-top"
      :style="{
        zIndex,
      }"
      ref="buttonRef"
      @click="handleTop"
    >
      <slot>
        <yc-button type="primary" shape="circle" size="large">
          <icon-to-top />
        </yc-button>
      </slot>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import { ref, toRefs, computed } from 'vue';
import { BackTopProps, BackTopSlots } from './type';
import { IconToTop } from '@shared/icons';
import {
  getElement,
  isUndefined,
  findFirstScrollableParent,
  getGlobalConfig,
} from '@shared/utils';
import BTween from 'b-tween';
import { useEventListener } from '@vueuse/core';
import YcButton from '@/components/Button';
defineOptions({
  name: 'BackTop',
});
defineSlots<BackTopSlots>();
const props = withDefaults(defineProps<BackTopProps>(), {
  visibleHeight: 200,
  easeing: 'quadOut',
  duration: 200,
});
const { targetContainer: _targetContainer, easeing, duration } = toRefs(props);
// 接收configProvier的属性
const { zIndex } = getGlobalConfig(props);
// buttonRef
const buttonRef = ref<HTMLDivElement>();
// 当前的滚动
const curScroll = ref<number>(0);
// 目标
const targetContainer = computed(() => {
  return isUndefined(_targetContainer.value)
    ? findFirstScrollableParent(buttonRef.value)
    : getElement(_targetContainer.value);
});
// 处理回到顶部
const handleTop = () => {
  if (!targetContainer.value) return;
  new BTween({
    from: { scroll: targetContainer.value.scrollTop },
    to: { scroll: 0 },
    duration: duration.value,
    easing: easeing.value,
    onUpdate: (current: any) => {
      targetContainer.value!.scrollTop = current.scroll;
    },
  }).start();
};
// 处理滚动
useEventListener(targetContainer, 'scroll', () => {
  curScroll.value = targetContainer.value!.scrollTop;
});
</script>

<style lang="less" scoped>
@import './style/back-top.less';
</style>
