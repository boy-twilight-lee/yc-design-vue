<template>
  <yc-tooltip :content="name" :disabled="!name.length" position="top">
    <div
      :class="[
        'yc-image-preview-toolbar-action',
        {
          'yc-image-preview-toolbar-action-disabled': disabled,
        },
      ]"
      @click="handleEvent('click', $event)"
      @dblclick="handleEvent('dblclick', $event)"
      @contextmenu="handleEvent('contextmenu', $event)"
    >
      <span class="yc-image-preview-toolbar-action-content">
        <slot />
      </span>
    </div>
  </yc-tooltip>
</template>

<script lang="ts" setup>
import {
  ImagePreviewActionProps,
  ImagePreviewActionEmits,
  ImagePreviewActionSlots,
} from './type';
import YcTooltip from '@/components/Tooltip';
defineOptions({
  name: 'ImagePreviewAction',
});
defineSlots<ImagePreviewActionSlots>();
const props = withDefaults(defineProps<ImagePreviewActionProps>(), {
  name: '',
  disabled: false,
});
const emits = defineEmits<ImagePreviewActionEmits>();
// 处理事件触发
const handleEvent = (type: string, ev: MouseEvent) => {
  if (props.disabled) return;
  emits(type as keyof ImagePreviewActionEmits, ev);
};
</script>

<style lang="less" scoped>
@import './style/image-preview.less';
</style>
