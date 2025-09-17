import { nextTick, ref, Ref, watch } from 'vue';
import { onKeyStroke } from '@shared/utils/vue-utils';
import { ModalEmits } from '@/components/Modal/type';
import { OnBeforeOk, OnBeforeCancel } from '../type';
import { useControlValue } from '@shared/utils/control';
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
  // 内存visible，用于显示组件
  const computedVisible = useControlValue<boolean>(
    visible,
    defaultVisible.value,
    (val) => {
      emits('update:visible', val);
    }
  );
  // 外层visible，用于播放动画
  const outerVisible = ref<boolean>(false);
  // false
  const innerVisible = ref<boolean>(false);
  // loading
  const asyncLoading = ref<boolean>(false);
  // 处理动画离开
  const handleAfterLeave = () => {
    emits('close');
    outerVisible.value = false;
  };
  // 处理关闭
  const handleClose = async (
    type: CloseEventType,
    ev: MouseEvent | KeyboardEvent,
    cancelEmits: boolean = true
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
    cancelEmits && emits('cancel', ev);
    computedVisible.value = false;
  };
  if (escToClose.value) {
    onKeyStroke(['Escape'], (ev) => {
      if (!computedVisible.value) return;
      handleClose('esc', ev);
    });
  }
  // 检测
  watch(
    () => computedVisible.value,
    async (val) => {
      if (!val) {
        innerVisible.value = val;
      } else {
        outerVisible.value = val;
        await nextTick();
        innerVisible.value = val;
      }
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
