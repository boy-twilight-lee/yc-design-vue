<template>
  <div v-if="actionsLayout.length" class="yc-image-preview-toolbar">
    <template v-for="action in actionsLayout" :key="action">
      <image-preview-action
        v-if="iconMap[action]"
        :name="t(`imagePreview.${action}`)"
        @click="(ev) => $emit('click', action, ev)"
      >
        <component :is="iconMap[action]" />
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
import { t } from '@shared/locale/i18n';
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
const iconMap: ObjectData = {
  fullScreen: IconFullScreen,
  rotateRight: IconRotateRight,
  rotateLeft: IconRotateLeft,
  zoomIn: IconZoomIn,
  zoomOut: IconZoomOut,
  originalSize: IconOriginSize,
};
</script>

<style lang="less">
@import './style/image-preview.less';
</style>
