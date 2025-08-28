<template>
  <a
    :href="resultHref"
    :class="[
      'yc-link',
      `yc-link-status-${status}`,
      {
        'yc-link-hoverable': hoverable && !disabled && !loading,
        'yc-link-loading': loading,
        'yc-link-disabled': disabled,
      },
    ]"
    @click="handleEvent('click', $event)"
    @dblclick="handleEvent('dblclick', $event)"
    @contextmenu="handleEvent('contextmenu', $event)"
  >
    <span v-if="$slots.icon || icon || loading" class="yc-link-icon">
      <slot v-if="!loading" name="icon">
        <icon-link v-if="icon" />
      </slot>
      <yc-spin v-else is-size-inherit />
    </span>
    <slot />
  </a>
</template>

<script lang="ts" setup>
import { toRefs, computed } from 'vue';
import { LinkProps, LinkEmits, LinkSlots } from './type';
import { IconLink } from '@shared/icons';
import YcSpin from '@/components/Spin';
defineOptions({
  name: 'Link',
});
defineSlots<LinkSlots>();
const props = withDefaults(defineProps<LinkProps>(), {
  href: '',
  status: 'normal',
  hoverable: true,
  loading: false,
  disabled: false,
  icon: false,
});
const emits = defineEmits<LinkEmits>();
const { disabled, loading, href } = toRefs(props);
// 最终的herf
const resultHref = computed(() => {
  if (loading.value || disabled.value) return 'javascript:void(0)';
  return href.value || 'javascript:void(0)';
});
// 拦截事件
const handleEvent = (type: string, e: MouseEvent) => {
  if (disabled.value || loading.value) return;
  emits(type as keyof LinkEmits, e);
};
</script>

<style lang="less" scoped>
@import './style/link.less';
</style>
