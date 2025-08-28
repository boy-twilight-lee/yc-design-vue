<template>
  <li
    role="alert"
    :class="['yc-notification', `yc-notification-${type}`, className]"
    :style="style"
  >
    <div class="yc-notification-left">
      <div v-if="showIcon" class="yc-notification-icon">
        <component :is="icon ?? TYPE_ICON_MAP[type]" />
      </div>
    </div>
    <div class="yc-notification-right">
      <div v-if="!isUndefined(title)" class="yc-notification-title">
        <component :is="getSlotFunction(title)" />
      </div>
      <div v-if="!isUndefined(content)" class="yc-notification-content">
        <component :is="getSlotFunction(content)" />
      </div>
      <div v-if="isFunction(footer)" class="yc-notification-footer">
        <component :is="footer" />
      </div>
    </div>
    <div v-if="closable" class="yc-notification-close-btn" @click="handleClose">
      <component v-if="closeIconElement" :is="closeIconElement" />
      <icon-button v-else>
        <component v-if="closeIcon" :is="closeIcon" />
      </icon-button>
    </div>
  </li>
</template>

<script lang="ts" setup>
import { toRefs, onMounted, watch } from 'vue';
import { NotificationProps } from './type';
import { TYPE_ICON_MAP } from '@shared/constants';
import { getSlotFunction, isFunction, isUndefined } from '@shared/utils';
import { IconButton } from '@shared/components';
import { useTimeoutFn } from '@vueuse/core';
defineOptions({
  name: 'Notification',
});
const props = withDefaults(defineProps<NotificationProps>(), {
  type: 'info',
  title: '',
  content: '',
  icon: undefined,
  id: '',
  style: () => {
    return {};
  },
  class: '',
  showIcon: true,
  closable: false,
  duration: 3000,
  isReset: false,
  footer: undefined,
  closeIcon: undefined,
  closeIconElement: undefined,
  onClose: undefined,
});
const { type, id, duration, class: className, isReset } = toRefs(props);
const { onClose, onDestory } = props;
// 倒计时
const { start, stop } = useTimeoutFn(
  () => {
    onDestory?.(id.value);
    onClose?.(id.value);
  },
  () => duration.value,
  {
    immediate: false,
  }
);
// 检测是否重置
watch(
  () => isReset.value,
  (newVal) => {
    if (duration.value <= 0 || !newVal) return;
    stop();
    start();
  }
);
// 处理关闭
const handleClose = () => {
  stop();
  onDestory?.(id.value);
  onClose?.(id.value);
};
onMounted(() => {
  if (duration.value <= 0) return;
  start();
});
</script>

<style lang="less" scoped>
@import './style/notification.less';
</style>
