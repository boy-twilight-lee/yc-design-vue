<template>
  <teleport :to="popupContainer">
    <div
      v-if="outerVisible"
      :class="[
        'yc-image-preview',
        $attrs.class,
        {
          'yc-image-preview-absolute': !isUndefined(_popupContainer),
        },
      ]"
      :style="{
        zIndex,
        ...($attrs.style ?? {}),
      }"
    >
      <transition name="fade">
        <div v-show="innerVisible" class="yc-image-preview-mask"></div>
      </transition>
      <!-- body -->
      <transition name="fade" @after-leave="handleAfterLeave">
        <div
          v-show="innerVisible"
          class="yc-image-preview-wrapper"
          @click.self="handleClose('mask', $event, false)"
        >
          <!-- img -->
          <div
            :style="{
              transform: `scale(${scale}, ${scale})`,
            }"
            class="yc-image-preview-img-container"
            @click.self="handleClose('mask', $event, false)"
          >
            <img
              :src="src"
              :style="{
                transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
              }"
              class="yc-image-preview-img"
              ref="imageRef"
            />
          </div>
          <!-- toolbar -->
          <image-preview-toolbar
            :actionsLayout="actionsLayout"
            @click="handleAction"
          >
            <template v-if="$slots.actions" #actions>
              <slot name="actions" />
            </template>
          </image-preview-toolbar>
          <!-- arrow -->
          <slot name="arrow" />
          <!-- close-btn -->
          <div
            v-if="closable"
            class="yc-image-preview-close-btn"
            @click="handleClose('closeBtn', $event)"
          >
            <icon-close />
          </div>
        </div>
      </transition>
    </div>
  </teleport>
</template>

<script lang="ts" setup>
import { ref, toRefs } from 'vue';
import {
  ImagePreviewProps,
  ImagePreviewEmits,
  ImagePreviewSlots,
} from './type';
import { IconClose } from '@shared/icons';
import { getGlobalConfig, useControlValue, isUndefined } from '@shared/utils';
import { useEventListener, onKeyStroke } from '@vueuse/core';
import useModalClose from '@/components/Modal/hooks/useModalClose';
import ImagePreviewToolbar from './ImagePreviewToolbar.vue';
defineOptions({
  name: 'ImagePreview',
  inheritAttrs: false,
});
defineSlots<ImagePreviewSlots>();
const props = withDefaults(defineProps<ImagePreviewProps>(), {
  src: '',
  visible: undefined,
  defaultVisible: false,
  maskClosable: true,
  closable: true,
  actionsLayout: () => [
    'fullScreen',
    'rotateRight',
    'rotateLeft',
    'zoomIn',
    'zoomOut',
    'originalSize',
  ],
  popupContainer: undefined,
  escToClose: true,
  wheelZoom: true,
  keyboard: true,
  defaultScale: 1,
  zoomRate: 1.1,
});
const emits = defineEmits<ImagePreviewEmits>();
const {
  visible,
  defaultVisible,
  maskClosable,
  escToClose,
  defaultScale,
  zoomRate,
  wheelZoom,
  keyboard,
  popupContainer: _popupContainer,
} = toRefs(props);
// 接收全局属性
const { zIndex, popupContainer } = getGlobalConfig(props);
// imageRef
const imageRef = ref<HTMLImageElement>();
// scale
const scale = useControlValue<number>(ref(), defaultScale.value);
// rotate
const rotate = ref<number>(0);
// 处理Modal关闭
const { outerVisible, innerVisible, handleClose, handleAfterLeave } =
  useModalClose({
    visible,
    defaultVisible,
    escToClose,
    maskClosable,
    onBeforeOk: () => true,
    onBeforeCancel: () => true,
    emits: emits as (...args: any) => void,
  });
// 处理action
const handleAction = (action: string) => {
  switch (action) {
    case 'rotateRight':
      {
        rotate.value += 90;
      }
      break;
    case 'rotateLeft':
      {
        rotate.value -= 90;
      }
      break;
    case 'zoomIn':
      {
        scale.value *= zoomRate.value;
      }
      break;
    case 'zoomOut':
      {
        scale.value /= zoomRate.value;
      }
      break;
    case 'originalSize':
      {
        scale.value = defaultScale.value;
        rotate.value = 0;
      }
      break;
    case 'fullScreen':
      {
        const { offsetWidth, offsetHeight } = imageRef.value!;
        if (offsetWidth > offsetHeight) {
          scale.value = window.innerHeight / offsetHeight;
        } else {
          scale.value = window.innerHeight / offsetWidth;
        }
      }
      break;
  }
};
// 初始化监听器
const intLisenter = () => {
  if (wheelZoom.value) {
    // 处理滚轮缩放
    useEventListener('wheel', (e) => {
      e.preventDefault();
      e.stopPropagation();
      // 判断是放大还是缩小
      const delta = e.deltaY < 0 ? 1 : -1;
      // 计算新的缩放比例
      scale.value *= Math.pow(zoomRate.value, delta);
    });
  }
  if (keyboard.value) {
    const map: Record<string, string> = {
      ArrowUp: 'zoomIn',
      ArrowDown: 'zoomOut',
      ' ': 'originalSize',
    };
    onKeyStroke(['ArrowUp', 'ArrowDown', ' '], (e) => {
      handleAction(map[e.key]);
    });
  }
};
intLisenter();
</script>

<style lang="less" scoped>
@import './style/image-preview.less';
</style>
