<template>
  <div class="yc-tabs-content-item">
    <div
      v-if="!destoryOnHide || computedActiveKey == path"
      class="yc-tabs-pane"
    >
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { isUndefined } from '@shared/utils';
import useContext from './hooks/useContext';
import { TabPaneProps, TabPaneSlots } from './type';
defineOptions({
  name: 'TabPane',
});
defineSlots<TabPaneSlots>();
const props = withDefaults(defineProps<TabPaneProps>(), {
  title: '',
  path: '',
  disabled: false,
  closable: undefined,
  destoryOnHide: undefined,
});
// 接收注入
const { computedActiveKey, destoryOnHide: _destoryOnHide } =
  useContext().inject();
const destoryOnHide = computed(() => {
  return !isUndefined(props.destoryOnHide)
    ? props.destoryOnHide
    : _destoryOnHide.value;
});
</script>

<style lang="less">
@import './style/tabs.less';
</style>
