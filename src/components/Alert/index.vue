<template>
  <transition name="slide-dynamic-origin" @after-leave="$emit('after-close')">
    <div
      v-if="visible"
      :class="[
        'yc-alert',
        `yc-alert-${type}`,
        {
          'yc-alert-has-title': title || $slots.title,
          'yc-alert-center': center || banner,
          'yc-alert-banner': banner,
        },
      ]"
    >
      <div v-if="showIcon" class="yc-alert-icon">
        <slot name="icon">
          <component :is="TYPE_ICON_MAP[type]" />
        </slot>
      </div>
      <div class="yc-alert-body">
        <div v-if="$slots.title || title" class="yc-alert-title">
          <slot name="title">
            {{ title }}
          </slot>
        </div>
        <div class="yc-alert-content">
          <slot />
        </div>
      </div>
      <div v-if="$slots.action" class="yc-alert-action">
        <slot name="action" />
      </div>
      <div
        v-if="closable"
        class="yc-alert-close-btn"
        role="button"
        aria-label="Close"
        @click="handleClose"
      >
        <slot name="close-element">
          <icon-button />
        </slot>
      </div>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { AlertProps, AlertEmits, AlertSlots } from './type';
import { TYPE_ICON_MAP } from '@shared/constants';
import { IconButton } from '@shared/components';
defineOptions({
  name: 'Alert',
});
defineSlots<AlertSlots>();
withDefaults(defineProps<AlertProps>(), {
  type: 'info',
  showIcon: true,
  closable: false,
  title: '',
  banner: false,
  center: false,
});
const emits = defineEmits<AlertEmits>();
// v可见性
const visible = ref<boolean>(true);
// 处理关闭
const handleClose = (ev: MouseEvent) => {
  visible.value = false;
  emits('close', ev);
};
</script>

<style lang="less" scoped>
@import './style/alert.less';
</style>
