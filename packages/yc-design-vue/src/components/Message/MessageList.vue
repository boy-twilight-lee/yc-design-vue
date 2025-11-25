<template>
  <transition-group
    name="fade-message"
    moveClass="flip-list-move"
    tag="div"
    :class="['yc-message-list', `yc-message-list-${position}`]"
  >
    <yc-message
      v-for="message in messageList"
      :key="message.id"
      v-bind="message"
    />
  </transition-group>
</template>

<script lang="ts" setup>
import { MessageContainerProps } from './type';
import YcMessage from './Message.vue';
withDefaults(defineProps<MessageContainerProps>(), {
  messageList: () => [],
  position: 'top',
});
</script>

<style lang="less">
@import './style/message-list.less';
</style>
