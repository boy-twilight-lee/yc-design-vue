<template>
  <div
    :class="['yc-avatar', `yc-avatar-shape-${shape}`]"
    :style="{
      width: valueToPx(size),
      height: valueToPx(size),
    }"
    ref="avatarRef"
    @click="$emit('click', $event)"
  >
    <span
      v-if="$slots.default"
      :class="[textWithImage ? 'yc-avatar-image' : 'yc-avatar-text']"
      :style="{
        transform: textWithImage ? '' : `scale(${scale}) translateX(-50%)`,
      }"
      ref="textRef"
    >
      <slot />
    </span>
    <span v-else-if="imageUrl" class="yc-avatar-image">
      <img
        v-if="!isLoadError"
        :src="imageUrl"
        :style="{
          objectFit,
        }"
        alt="avatar"
        @load="$emit('load', $event)"
        @error="handleError"
      />
      <div v-else class="yc-avatar-image-icon">
        <icon-image-close />
      </div>
    </span>

    <div
      v-if="$slots['trigger-icon']"
      :class="[
        {
          'yc-avatar-trigger-icon-button': triggerType == 'button',
          'yc-avatar-trigger-icon-mask': triggerType == 'mask',
        },
      ]"
      :style="triggerIconStyle"
    >
      <slot name="trigger-icon" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import { useResizeObserver } from '@vueuse/core';
import { IconImageClose } from '@shared/icons';
import { valueToPx } from '@shared/utils';
import { AvatarProps, AvatarSlots, AvatarEmits } from './type';
import useContext from './hooks/useContext';
defineOptions({
  name: 'Avatar',
});
defineSlots<AvatarSlots>();
const props = withDefaults(defineProps<AvatarProps>(), {
  shape: undefined,
  imageUrl: '',
  size: undefined,
  autoFixFontSize: undefined,
  triggerType: 'button',
  triggerIconStyle: () => {
    return {};
  },
  objectFit: 'cover',
});
const emits = defineEmits<AvatarEmits>();
// 接收注入
const { size, autoFixFontSize, shape } = useContext().inject(props);
// 是否加载错误
const isLoadError = ref<boolean>(false);
// scale
const scale = ref(1);
// textRef
const textRef = ref<HTMLDivElement>();
// avatart
const avatarRef = ref<HTMLDivElement>();
// text中有image
const textWithImage = computed(() => textRef.value?.querySelector('img'));
// 处理错误情况
const handleError = (e: Event) => {
  isLoadError.value = true;
  emits('error', e);
};
// 检测text的大小从而动态计算字体大小
const initOvserver = () => {
  if (!autoFixFontSize.value) return;
  useResizeObserver(textRef, () => {
    const avatarWidth = size.value ?? avatarRef.value!.offsetWidth;
    const textWidth = textRef.value!.offsetWidth;
    const textScale = avatarWidth / (textWidth + 8);
    scale.value = avatarWidth && textScale < 1 ? textScale : 1;
  });
};
initOvserver();
</script>

<style lang="less" scoped>
@import './style/avatar.less';
</style>
