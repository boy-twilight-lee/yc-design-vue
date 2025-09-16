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
import { RecordType } from '@shared/type';
import { useI18n } from '@shared/utils';
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
// 国际化
const { t } = useI18n();
// actionMap
const iconMap: RecordType = {
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
