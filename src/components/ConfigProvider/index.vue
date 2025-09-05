<template>
  <slot />
</template>

<script lang="ts" setup>
import { toRefs, provide } from 'vue';
import { ConfigProviderProps, ConfigconfigSlots } from './type';
import {
  CONFIG_PROVIDER_PROVIDE_KEY,
  ConfigProviderProvide,
} from '@shared/utils';
defineOptions({
  name: 'ConfigProvider',
});
const slots = defineSlots<ConfigconfigSlots>();
const props = withDefaults(defineProps<ConfigProviderProps>(), {
  locale: undefined,
  zIndex: 1001,
  size: 'medium',
  popupContainer: 'body',
  updateAtScroll: true,
  scrollToClose: false,
});
const { locale, zIndex, size, updateAtScroll, scrollToClose, popupContainer } =
  toRefs(props);
// 全局注入
provide<ConfigProviderProvide>(CONFIG_PROVIDER_PROVIDE_KEY, {
  slots,
  locale,
  zIndex,
  size,
  updateAtScroll,
  scrollToClose,
  popupContainer,
});
</script>
