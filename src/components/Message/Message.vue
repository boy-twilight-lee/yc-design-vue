<template>
  <li
    role="alert"
    :class="['yc-message', `yc-message-${type}`]"
    @mouseenter="handleMouseenter"
    @mouseleave="handleMouseleave"
  >
    <span
      v-if="(type != 'normal' || !isUndefined(icon)) && showIcon"
      class="yc-message-icon"
    >
      <component :is="icon ?? TYPE_ICON_MAP[type]" :spin="type == 'loading'" />
    </span>
    <span class="yc-message-content">
      {{ content }}
    </span>
    <span v-if="closable" class="yc-message-close-btn" @click="handleClose">
      <icon-button />
    </span>
  </li>
</template>

<script lang="ts" setup>
import { toRefs, onMounted, watch } from 'vue';
import { MessageProps } from './type';
import { useTimeoutFn } from '@vueuse/core';
import { isUndefined } from '@shared/utils';
import { TYPE_ICON_MAP } from '@shared/constants';
import { IconButton } from '@shared/components';
defineOptions({
  name: 'Message',
});
const props = withDefaults(defineProps<MessageProps>(), {
  type: 'info',
  content: '',
  id: '',
  showIcon: true,
  closable: false,
  icon: undefined,
  duration: 3000,
  isReset: false,
  onClose: undefined,
  onDestory: undefined,
  resetOnHover: false,
});
const { type, id, duration, resetOnHover, isReset } = toRefs(props);
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
// 处理关闭
const handleClose = () => {
  stop();
  onDestory?.(id.value);
  onClose?.(id.value);
};
// 处理鼠标进入
const handleMouseenter = () => {
  if (!resetOnHover.value || duration.value <= 0) return;
  stop();
};
// 处理鼠标离开
const handleMouseleave = () => {
  if (!resetOnHover.value || duration.value <= 0) return;
  start();
};
// 检测props
watch(
  () => isReset.value,
  (val) => {
    if (duration.value <= 0 || !val) return;
    stop();
    start();
  }
);
onMounted(() => {
  if (duration.value <= 0) return;
  start();
});
</script>

<style lang="less" scoped>
@import './style/message.less';
</style>
