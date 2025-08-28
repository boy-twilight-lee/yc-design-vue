<template>
  <yc-trigger
    v-model:popup-visible="computedVisible"
    :position="position"
    :popup-container="popupContainer"
    :arrow-class="[' yc-popconfirm-popup-arrow', arrowClass as string]"
    :arrow-style="arrowStyle"
    :content-class="['yc-popconfirm-popup-content', contentClass as string]"
    :content-style="contentStyle"
    :popup-offset="10"
    :class="['yc-popconfirm', `yc-popconfirm-${type}`, $attrs.class]"
    :style="$attrs.style"
    trigger="click"
    animation-name="zoom-in-fade-out"
    need-transform-origin
    show-arrow
    ref="triggerRef"
    v-bind="triggerProps"
  >
    <slot />
    <template #content>
      <div class="yc-popconfirm-body">
        <div class="yc-popconfirm-icon">
          <slot name="icon">
            <component :is="TYPE_ICON_MAP[type]" />
          </slot>
        </div>
        <div class="yc-popconfirm-content">
          <slot name="content">
            {{ content }}
          </slot>
        </div>
      </div>
      <div class="yc-popconfirm-footer">
        <yc-button size="mini" v-bind="cancelButtonProps" @click="handleCancel">
          {{ cancelText }}
        </yc-button>
        <yc-button
          size="mini"
          type="primary"
          :loading="okLoading || asyncLoading"
          v-bind="okButtonProps"
          @click="handleOk"
        >
          {{ okText }}
        </yc-button>
      </div>
    </template>
  </yc-trigger>
</template>

<script lang="ts" setup>
import { ref, toRefs, StyleValue } from 'vue';
import {
  PopconfirmProps,
  PopconfirmEmits,
  PopconfirmSlots,
  PopconfirmExpose,
} from './type';
import { TYPE_ICON_MAP } from '@shared/constants';
import { useControlValue } from '@shared/utils';
import useOnBeforeClose from '@/components/Modal/hooks/useOnBeforeClose';
import { default as YcTrigger, TriggerInstance } from '@/components/Trigger';
import YcButton from '@/components/Button';
defineOptions({
  name: 'Popconfirm',
});
defineSlots<PopconfirmSlots>();
const props = withDefaults(defineProps<PopconfirmProps>(), {
  content: '',
  position: 'top',
  popupVisible: undefined,
  defaultPopupVisible: false,
  type: 'info',
  okText: '确定',
  cancelText: '取消',
  okLoading: false,
  okButtonProps: () => {
    return {};
  },
  cancelButtonProps: () => {
    return {};
  },
  contentClass: '',
  contentStyle: () => {
    return {};
  },
  arrowClass: '',
  arrowStyle: () => {
    return {};
  },
  popupContainer: undefined,
  triggerProps: () => {
    return {};
  },
  onBeforeOk: () => true,
  onBeforeCancel: () => true,
});
const emits = defineEmits<PopconfirmEmits>();
const { popupVisible, defaultPopupVisible, type } = toRefs(props);
const { onBeforeOk, onBeforeCancel } = props;
// 异步关闭的loading
const asyncLoading = ref<boolean>(false);
// 触发器实例
const triggerRef = ref<TriggerInstance>();
// 受控的visible
const computedVisible = useControlValue<boolean>(
  popupVisible,
  defaultPopupVisible.value,
  (val) => {
    emits('update:popupVisible', val);
    emits('popup-visible-change', val);
  }
);
// 处理确认
const handleOk = () => {
  const isClose = useOnBeforeClose(
    'confirmBtn',
    asyncLoading,
    onBeforeOk,
    onBeforeCancel
  );
  if (!isClose) return;
  emits('ok');
  triggerRef.value?.hide();
};
// 处理取消
const handleCancel = () => {
  const isClose = useOnBeforeClose(
    'cancelBtn',
    asyncLoading,
    onBeforeOk,
    onBeforeCancel
  );
  if (!isClose) return;
  emits('cancel');
  triggerRef.value?.hide();
};
defineExpose<PopconfirmExpose>({
  show() {
    computedVisible.value = true;
  },
  hide() {
    computedVisible.value = false;
  },
});
</script>

<style lang="less">
@import './style/popconfirm.less';
</style>
