<template>
  <yc-modal
    v-bind="props"
    v-model:visible="visible"
    popup-container=".yc-overlay-modal"
    :modal-class="[
      'yc-service-modal',
      {
        [`yc-service-modal-${type}`]: !!type,
      },
    ]"
    :style="{
      position: 'fixed',
    }"
    @ok="onOk?.()"
    @cancel="onCancel?.()"
    @before-open="onBeforeOpen?.()"
    @before-close="onBeforeClose?.()"
    @open="onOpen?.()"
    @close="handleClose"
  >
    <template #title>
      <span v-if="type" class="yc-modal-title-icon">
        <component :is="TYPE_ICON_MAP[type]" />
      </span>
      <span class="yc-modal-title-content text-ellipsis">
        <component :is="getSlotFunction(title)" />
      </span>
    </template>
    <div class="yc-modal-body-content text-ellipsis">
      <component :is="getSlotFunction(content)" />
    </div>
  </yc-modal>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { ModalServiceProps } from './type';
import { getSlotFunction } from '@shared/utils';
import { TYPE_ICON_MAP } from '@shared/constants';
import YcModal from './Modal.vue';
const props = withDefaults(defineProps<ModalServiceProps>(), {
  width: 520,
  top: 100,
  mask: true,
  title: '',
  titleAlign: 'center',
  alignCenter: true,
  unmountOnClose: false,
  maskClosable: true,
  hideCancel: false,
  closable: true,
  okText: '确认',
  cancelText: '取消',
  okLoading: false,
  okButtonProps: () => {
    return {};
  },
  cancelButtonProps: () => {
    return {};
  },
  footer: true,
  renderToBody: true,
  maskStyle: () => {
    return {};
  },
  modalClass: '',
  modalStyle: () => {
    return {};
  },
  escToClose: true,
  draggable: false,
  fullscreen: false,
  maskAnimationName: 'fade',
  modalAnimationName: 'zoom-modal',
  bodyClass: '',
  bodyStyle: () => {
    return {};
  },
  hideTitle: false,
  simple: false,
  onBeforeCancel: () => {
    return true;
  },
  onBeforeOk: () => {
    return true;
  },
  content: '',
});
const { onClose, serviceClose } = props;
// visible
const visible = ref<boolean>(false);
// 处理close
const handleClose = () => {
  serviceClose?.();
  onClose?.();
};
onMounted(() => {
  visible.value = true;
});
</script>

<style lang="less">
.yc-service-modal {
  .yc-modal-header {
    .yc-modal-title {
      display: flex;
      justify-content: center;
      gap: 6px;
      .yc-modal-title-icon {
        display: flex;
        align-items: center;
        font-size: 18px;
      }
      .yc-modal-title-content {
        flex-shrink: 0;
        overflow: hidden;
      }
    }
  }
  .yc-modal-body {
    .yc-modal-body-content {
      width: 100%;
      line-height: 26px;
      color: var(--color-text-2);
      font-family: 'PingFang SC';
      font-size: 16px;
      font-weight: 400;
    }
  }
}
// icon-color
@type: {
  info: rgb(var(--primary-6));
  success: rgb(var(--success-6));
  warning: rgb(var(--warning-6));
  error: rgb(var(--danger-6));
  confirm: rgb(var(--warning-6));
};
each(@type, .(@value, @key) {
    .yc-service-modal-@{key}  {
      .yc-modal-title-icon{
        color: @value;
      }
    }
  });
</style>
