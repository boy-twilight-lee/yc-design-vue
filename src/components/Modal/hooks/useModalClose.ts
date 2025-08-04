import { ref, Ref, watch } from 'vue';
import { ModalEmits } from '@/components/Modal/type';
import { OnBeforeOk, OnBeforeCancel } from '../type';
import { onKeyStroke } from '@vueuse/core';
import { useControlValue } from '@shared/utils';
import useOnBeforeClose from './useOnBeforeClose';

export type CloseEventType =
  | 'confirmBtn'
  | 'cancelBtn'
  | 'closeBtn'
  | 'mask'
  | 'esc';

export default (params: {
  visible: Ref<boolean | undefined>;
  defaultVisible: Ref<boolean>;
  maskClosable: Ref<boolean>;
  escToClose: Ref<boolean>;
  onBeforeOk: OnBeforeOk;
  onBeforeCancel: OnBeforeCancel;
  emits: ModalEmits;
}) => {
  const {
    maskClosable,
    escToClose,
    visible,
    defaultVisible,
    onBeforeCancel,
    onBeforeOk,
    emits,
  } = params;
  // 外层visible，用于播放动画
  const outerVisible = ref<boolean>(false);
  // loading
  const asyncLoading = ref<boolean>(false);
  // 内存visible，用于显示组件
  const innerVisible = useControlValue<boolean>(
    visible,
    defaultVisible.value,
    (val) => {
      emits('update:visible', val);
    }
  );
  // 处理动画离开
  const handleAfterLeave = () => {
    emits('close');
    outerVisible.value = false;
  };
  // 处理关闭
  const handleClose = async (
    type: CloseEventType,
    ev: MouseEvent | KeyboardEvent
  ) => {
    // 执行关闭之前的函数
    const isClose = ['confirmBtn', 'cancelBtn'].includes(type)
      ? await useOnBeforeClose(type, asyncLoading, onBeforeOk, onBeforeCancel)
      : true;
    if (!isClose) {
      return;
    }
    if (type == 'mask' && !maskClosable.value) {
      return;
    }
    if (type == 'confirmBtn') {
      emits('ok');
    }
    emits('cancel', ev);
    innerVisible.value = false;
  };

  if (escToClose.value) {
    onKeyStroke(['Escape'], (ev) => {
      if (!innerVisible.value) return;
      handleClose('esc', ev);
    });
  }

  // 检测
  watch(
    () => innerVisible.value,
    (val) => {
      if (!val) return;
      outerVisible.value = val;
    },
    {
      immediate: true,
    }
  );

  return {
    asyncLoading,
    outerVisible,
    innerVisible,
    handleClose,
    handleAfterLeave,
  };
};
