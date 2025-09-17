<template>
  <transition name="expand" v-bind="transitions">
    <slot />
  </transition>
</template>

<script lang="ts" setup>
import { TransitionProps } from 'vue';
import { valueToPx } from '@shared/utils/dom';
// 过渡时间
const transitions: TransitionProps = {
  onBeforeEnter(el: Element) {
    (el as HTMLDivElement).style.maxHeight = '0';
    (el as HTMLDivElement).style.opacity = '0';
  },
  onEnter(el: Element) {
    (el as HTMLDivElement).style.maxHeight = valueToPx(
      (el as HTMLDivElement).scrollHeight
    );
    (el as HTMLDivElement).style.opacity = '1';
  },
  onAfterEnter(el: Element) {
    (el as HTMLDivElement).style.maxHeight = '';
    (el as HTMLDivElement).style.opacity = '';
  },
  // 收起的时候卡顿
  onBeforeLeave(el: Element) {
    (el as HTMLDivElement).style.maxHeight = valueToPx(
      (el as HTMLDivElement).scrollHeight
    );
    (el as HTMLDivElement).style.opacity = '1';
  },
  onLeave(el: Element) {
    (el as HTMLDivElement).style.maxHeight = '0';
    (el as HTMLDivElement).style.opacity = '0';
  },
  onAfterLeave(el: Element) {
    (el as HTMLDivElement).style.maxHeight = '';
    (el as HTMLDivElement).style.opacity = '';
  },
};
</script>

<style lang="less">
@import './style/expand-transition.less';
</style>
