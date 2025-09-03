<template>
  <transition name="expand" v-bind="transitions">
    <slot />
  </transition>
</template>

<script lang="ts" setup>
import { ObjectData } from '@shared/type';
import { valueToPx } from '@shared/utils';
// 过渡时间
const transitions: ObjectData = {
  onBeforeEnter(el: HTMLDivElement) {
    el.style.maxHeight = '0';
    el.style.opacity = '0';
  },
  onEnter(el: HTMLDivElement) {
    el.style.maxHeight = valueToPx(el.scrollHeight);
    el.style.opacity = '1';
  },
  onAfterEnter(el: HTMLDivElement) {
    el.style.maxHeight = '';
    el.style.opacity = '';
  },
  // 收起的时候卡顿
  onBeforeLeave(el: HTMLDivElement) {
    el.style.maxHeight = valueToPx(el.scrollHeight);
    el.style.opacity = '1';
  },
  onLeave(el: HTMLDivElement) {
    el.style.maxHeight = '0';
    el.style.opacity = '0';
  },
  onAfterLeave(el: HTMLElement) {
    el.style.maxHeight = '';
    el.style.opacity = '';
  },
};
</script>

<style lang="less" scoped>
.expand-enter-active,
.expand-leave-active {
  transition:
    max-height 0.2s cubic-bezier(0.34, 0.69, 0.1, 1),
    opacity 0.2s cubic-bezier(0.3, 1.3, 0.3, 1);
}
</style>
