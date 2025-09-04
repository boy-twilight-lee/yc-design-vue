<template>
  <slot />
</template>

<script lang="ts" setup>
import { toRefs, provide, watch } from 'vue';
import { ConfigProviderProps, ConfigconfigSlots } from './type';
import {
  CONFIG_PROVIDER_PROVIDE_KEY,
  ConfigProviderProvide,
} from '@shared/utils';
import { loadLanguageAsync } from '@shared/locale/i18n';
defineOptions({
  name: 'ConfigProvider',
});
const slots = defineSlots<ConfigconfigSlots>();
const props = withDefaults(defineProps<ConfigProviderProps>(), {
  locale: 'zh-CN',
  zIndex: 1001,
  size: 'medium',
  popupContainer: 'body',
  updateAtScroll: true,
  scrollToClose: false,
});
const { locale, zIndex, size, updateAtScroll, scrollToClose, popupContainer } =
  toRefs(props);
provide<ConfigProviderProvide>(CONFIG_PROVIDER_PROVIDE_KEY, {
  slots,
  zIndex,
  size,
  updateAtScroll,
  scrollToClose,
  popupContainer,
});
watch(
  () => locale.value,
  (v) => {
    loadLanguageAsync(v);
  },
  {
    immediate: true,
  }
);
</script>
