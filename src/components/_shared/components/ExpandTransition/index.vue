<template>
  <transition name="expand" v-bind="transitions">
    <slot />
  </transition>
</template>

<script lang="ts" setup>
import { ObjectType } from '@shared/type';
import { valueToPx } from '@shared/utils';
// 过渡时间
const transitions: ObjectType = {
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

<style lang="less">
@import './style/expand-transition.less';
</style>
