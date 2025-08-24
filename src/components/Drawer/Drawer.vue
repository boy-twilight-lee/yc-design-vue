<template>
  <teleport :to="popupContainer" :disabled="!renderToBody">
    <div
      v-if="!unmountOnClose || outerVisible"
      v-show="outerVisible"
      :class="[
        'yc-drawer-wrapper',
        `yc-drawer-placement-${placement}`,
        $attrs.class,
        {
          'yc-drawer-position-absolute': _popupContainer || !renderToBody,
        },
      ]"
      :style="{
        position: 'fixed',
      }"
      :style="{
        zIndex,
        ...($attrs.style ?? {}),
      }"
    >
      <!-- mask -->
      <transition name="fade">
        <div
          v-if="mask"
          v-show="innerVisible"
          class="yc-drawer-mask"
          @click="handleClose('mask', $event)"
        ></div>
      </transition>
      <!-- drawer -->
      <transition
        :name="`slide-drawer-${placement}`"
        @before-enter="$emit('before-open')"
        @before-leave="$emit('before-close')"
        @after-enter="$emit('open')"
        @after-leave="handleAfterLeave"
      >
        <div
          v-show="innerVisible"
          class="yc-drawer-container"
          :style="drawerStyle"
        >
          <!-- header -->
          <slot name="header">
            <div v-if="header" class="yc-drawer-header">
              <!-- title -->
              <div class="yc-drawer-title text-ellipsis">
                <slot name="title">
                  {{ title }}
                </slot>
              </div>
              <!-- close-btn -->
              <icon-button
                v-if="closable"
                class="yc-modal-close-button"
                @click="handleClose('closeBtn', $event)"
              />
            </div>
          </slot>
          <!-- body -->
          <div class="yc-drawer-body">
            <slot />
          </div>
          <!-- footer -->
          <slot name="footer">
            <div v-if="footer" class="yc-drawer-footer">
              <yc-button
                v-if="!hideCancel"
                v-bind="cancelButtonProps"
                @click="handleClose('cancelBtn', $event)"
              >
                {{ cancelText }}
              </yc-button>
              <yc-button
                type="primary"
                :loading="okLoading || asyncLoading"
                v-bind="okButtonProps"
                @click="handleClose('confirmBtn', $event)"
              >
                {{ okText }}
              </yc-button>
            </div>
          </slot>
        </div>
      </transition>
    </div>
  </teleport>
</template>

<script lang="ts" setup>
import { toRefs, computed, CSSProperties } from 'vue';
import { DrawerProps, DrawerEmits, DrawerSlots } from './type';
import { getGlobalConfig, valueToPx } from '@shared/utils';
import useDrawerClose from '@/components/Modal/hooks/useModalClose';
import YcButton from '@/components/Button';
import { IconButton } from '@shared/components';
defineOptions({
  name: 'Drawer',
  inheritAttrs: false,
});
defineSlots<DrawerSlots>();
const props = withDefaults(defineProps<DrawerProps>(), {
  visible: undefined,
  defaultVisible: false,
  placement: 'right',
  title: '',
  mask: true,
  maskClosable: true,
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
  unmountOnClose: false,
  width: 250,
  height: 250,
  popupContainer: undefined,
  drawerStyle: () => {
    return {};
  },
  escToClose: true,
  renderToBody: true,
  header: true,
  footer: true,
  hideCancel: false,
  onBeforeCancel: () => {
    return true;
  },
  onBeforeOk: () => {
    return true;
  },
});
const emits = defineEmits<DrawerEmits>();
// 结构属性
const {
  visible,
  defaultVisible,
  width,
  height,
  placement,
  maskClosable,
  escToClose,
  drawerStyle: _drawerStyle,
  renderToBody,
  popupContainer: _popupContainer,
} = toRefs(props);
const { onBeforeOk, onBeforeCancel } = props;
// 接收configProvider
const { zIndex, popupContainer } = getGlobalConfig(props);
// drawer绝对定位的left,top
const drawerStyle = computed(() => {
  return {
    height:
      placement.value == 'left' || placement.value == 'right'
        ? '100%'
        : valueToPx(height.value),
    width:
      placement.value == 'left' || placement.value == 'right'
        ? valueToPx(width.value)
        : `100%`,
    // 传入样式
    ..._drawerStyle.value,
  } as CSSProperties;
});
// 处理组件关闭开启
const {
  outerVisible,
  innerVisible,
  asyncLoading,
  handleClose,
  handleAfterLeave,
} = useDrawerClose({
  visible,
  defaultVisible,
  escToClose,
  maskClosable,
  onBeforeCancel,
  onBeforeOk,
  emits,
});
</script>

<style lang="less" scoped>
@import './style/drawer.less';
</style>
