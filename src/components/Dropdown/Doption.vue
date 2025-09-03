<template>
  <div
    :class="[
      'yc-dropdown-option',
      `yc-dropdown-option-theme-${theme}`,
      {
        'yc-dropdown-option-active': isActive,
        'yc-dropdown-option-disabled': disabled,
        'yc-dropdown-option-has-suffix': $slots.suffix,
      },
    ]"
    @click="handleClick"
  >
    <div v-if="$slots.icon" class="yc-dropdown-option-icon">
      <slot name="icon" />
    </div>
    <div class="yc-dropdown-option-content text-ellipsis">
      <slot />
    </div>
    <div v-if="$slots.suffix" class="yc-dropdown-option-suffix">
      <slot name="suffix" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { toRefs } from 'vue';
import { DoptionProps, DoptionValue, DoptionSlots } from './type';
import useContext from './hooks/useContext';
import useMenuContext from '@/components/Menu/hooks/useContext';
defineOptions({
  name: 'Doption',
});
defineSlots<DoptionSlots>();
const props = withDefaults(defineProps<DoptionProps>(), {
  disabled: false,
  isActive: false,
  isSubmenu: false,
});
const emits = defineEmits<{
  (e: 'click', ev: MouseEvent): void;
}>();
const { value: optionValue, disabled, isSubmenu } = toRefs(props);
// dropdown传递的值
const { select } = useContext().inject();
const { theme } = useMenuContext().inject();
// 处理后缀点击
const handleClick = (ev: MouseEvent) => {
  if (disabled.value) return;
  emits('click', ev);
  if (isSubmenu.value) return;
  select(optionValue.value as DoptionValue, ev);
};
</script>

<style lang="less">
@import './style/doption.less';
</style>
