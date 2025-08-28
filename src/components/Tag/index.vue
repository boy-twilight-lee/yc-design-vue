<template>
  <label
    v-if="computedVisible"
    :class="[
      'yc-tag',
      `yc-tag-color-${color}`,
      `yc-tag-size-${
        ['small', 'medium', 'large'].includes(size) ? size : 'medium'
      }`,
      TAG_PRESET_COLORS.includes(color)
        ? 'yc-tag-preset-color'
        : 'yc-tag-custom-color',
      nowrap ? 'yc-tag-no-wrap' : 'yc-tag-wrap',
      {
        'yc-tag-loading': loading,
        'yc-tag-bordered': bordered,
        'yc-tag-checked': computedChecked,
        'yc-tag-checkable': checkable,
      },
    ]"
    :style="{
      background,
    }"
    @click="handleEvent('check', $event)"
  >
    <!-- icon -->
    <div v-if="$slots.icon" class="yc-tag-icon">
      <slot name="icon" />
    </div>
    <!-- content -->
    <span class="yc-tag-label">
      <slot />
    </span>
    <!-- close -->
    <icon-button
      v-if="closable"
      :hover-size="16"
      hover-color="rgba(255, 255, 255, 0.2)"
      class="yc-tag-close-button"
      @click="handleEvent('close', $event)"
    >
      <slot v-if="$slots['close-icon']" name="close-icon" />
    </icon-button>
    <!-- loading -->
    <yc-spin v-if="loading" :size="12" class="yc-tag-loading-icon" />
  </label>
</template>

<script lang="ts" setup>
import { toRefs, computed } from 'vue';
import { TagProps, TagEmits, TagSlots } from './type';
import { TAG_PRESET_COLORS } from '@shared/constants';
import { useControlValue, getGlobalConfig } from '@shared/utils';
import YcSpin from '@/components/Spin';
import { IconButton } from '@shared/components';
defineOptions({
  name: 'Tag',
});
defineSlots<TagSlots>();
const props = withDefaults(defineProps<TagProps>(), {
  color: 'default',
  size: undefined,
  bordered: false,
  loading: false,
  closable: false,
  checkable: false,
  visible: undefined,
  defaultVisible: true,
  checked: undefined,
  defaultChecked: true,
  nowrap: false,
});
const emits = defineEmits<TagEmits>();
const { visible, defaultVisible, checked, defaultChecked, checkable, color } =
  toRefs(props);
// 获取全局配置
const { size } = getGlobalConfig(props);
// visible
const computedVisible = useControlValue<boolean>(
  visible,
  defaultVisible.value,
  (val) => emits('update:visible', val)
);
// checked
const computedChecked = useControlValue<boolean>(
  checked,
  defaultChecked.value,
  (val) => emits('update:checked', val)
);
// 背景色
const background = computed(() => {
  return TAG_PRESET_COLORS.includes(color.value) ? '' : color.value;
});
// 处理事件
const handleEvent = (type: 'close' | 'check', ev: MouseEvent) => {
  if (type == 'close') {
    computedVisible.value = false;
    emits('close', ev);
  } else if (type == 'check' && checkable.value) {
    computedChecked.value = !computedChecked.value;
    emits('check', computedChecked.value, ev);
  }
};
</script>

<style lang="less" scoped>
@import './style/tag.less';
</style>
