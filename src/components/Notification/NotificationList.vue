<template>
  <transition-group
    :name="animationName"
    :class="['yc-notification-list', `yc-notification-list-${position}`]"
    tag="div"
  >
    <yc-notification
      v-for="notification in notificationList"
      :key="notification.id"
      v-bind="notification"
    />
  </transition-group>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { NotificationContainerProps } from './type';
import YcNotification from './Notification.vue';
const props = withDefaults(defineProps<NotificationContainerProps>(), {
  notificationList: () => [],
  position: 'topRight',
});
const animationName = computed(() => {
  const dir = props.position.includes('Right') ? 'right' : 'left';
  return `slide-${dir}-notification`;
});
</script>
<style lang="less">
@import './style/notification-list.less';
</style>
