<template>
  <div v-if="actionsLayout.length" class="yc-image-preview-toolbar">
    <template v-for="action in actionsLayout" :key="action">
      <image-preview-action
        v-if="actionMap[action]"
        :name="actionMap[action].name"
        @click="(ev) => $emit('click', action, ev)"
      >
        <component :is="actionMap[action].icon" />
      </image-preview-action>
    </template>
    <slot name="actions" />
  </div>
</template>

<script lang="ts" setup>
import {
  IconFullScreen,
  IconZoomIn,
  IconZoomOut,
  IconRotateLeft,
  IconRotateRight,
  IconOriginSize,
} from '@shared/icons';
import { ObjectData } from '@shared/type';
import ImagePreviewAction from './ImagePreviewAction.vue';
withDefaults(
  defineProps<{
    actionsLayout: string[];
  }>(),
  {
    actionsLayout: () => [],
  }
);
defineEmits<{
  (e: 'click', action: string, ev: MouseEvent): void;
}>();

// actionMap
const actionMap: ObjectData = {
  fullScreen: {
    icon: IconFullScreen,
    name: '全屏',
  },
  rotateRight: {
    icon: IconRotateRight,
    name: '向右旋转',
  },
  rotateLeft: {
    icon: IconRotateLeft,
    name: '向左旋转',
  },
  zoomIn: {
    icon: IconZoomIn,
    name: '放大',
  },
  zoomOut: {
    icon: IconZoomOut,
    name: '缩小',
  },
  originalSize: {
    icon: IconOriginSize,
    name: '还原',
  },
};
</script>

<style lang="less" scoped>
@import './style/image-preview.less';
</style>
