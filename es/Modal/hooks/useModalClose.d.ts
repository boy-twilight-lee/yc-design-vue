import { Ref } from 'vue';
import { ModalEmits, OnBeforeOk, OnBeforeCancel } from '../type';
declare const _default: (params: {
    visible: Ref<boolean | undefined>;
    defaultVisible: Ref<boolean>;
    maskClosable: Ref<boolean>;
    escToClose: Ref<boolean>;
    onBeforeOk: OnBeforeOk;
    onBeforeCancel: OnBeforeCancel;
    emits: ModalEmits;
}) => {
    asyncLoading: Ref<boolean, boolean>;
    outerVisible: Ref<boolean, boolean>;
    innerVisible: import('vue').WritableComputedRef<any, boolean>;
    handleClose: (type: string, ev: MouseEvent | KeyboardEvent) => Promise<void>;
    handleAfterLeave: () => void;
};
export default _default;
