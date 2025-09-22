<template>
  <yc-trigger
    v-model:popup-visible="computedVisible"
    :trigger="trigger"
    :position="position"
    :popup-container="popupContainer"
    :arrow-class="['yc-popover-popup-arrow ', arrowClass as string]"
    :arrow-style="arrowStyle"
    :content-class="['yc-popover-popup-content', contentClass as string]"
    :content-style="contentStyle"
    :popup-offset="10"
    :class="['yc-popover', $attrs.class]"
    :style="$attrs.style"
    animation-name="zoom-in-fade-out"
    need-transform-origin
    show-arrow
    v-bind="triggerProps"
  >
    <slot />
    <template #content>
      <div v-if="$slots.title || title" class="yc-popover-title">
        <slot name="title"> {{ title }} </slot>
      </div>
      <div class="yc-popover-content">
        <slot name="content">
          {{ content }}
        </slot>
      </div>
    </template>
  </yc-trigger>
</template>

<script lang="ts" setup>
import { toRefs } from 'vue';
import {
  PopoverProps,
  PopoverEmits,
  PopoverSlots,
  PopoverExpose,
} from './type';
import { useControlValue } from '@shared/utils/hooks';
import YcTrigger from '@/components/Trigger';
defineOptions({
  name: 'Popover',
});
const $slots = defineSlots<PopoverSlots>();
const props = withDefaults(defineProps<PopoverProps>(), {
  popupVisible: undefined,
  defaultPopupVisible: false,
  title: '',
  content: '',
  trigger: 'hover',
  position: 'bottom',
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
const emits = defineEmits<PopoverEmits>();
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
defineExpose<PopoverExpose>({
  show() {
    computedVisible.value = true;
  },
  hide() {
    computedVisible.value = false;
  },
});
</script>

<style lang="less">
@import './style/popover.less';
</style>
