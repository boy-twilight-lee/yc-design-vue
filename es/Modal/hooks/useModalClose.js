import { ref, watch } from "vue";
import { onKeyStroke } from "../../node_modules/@vueuse/core/index.js";
import "../../node_modules/tinycolor2/esm/tinycolor.js";
import "../../_shared/utils/dom.js";
import "../../_shared/utils/time.js";
import "../../Empty/index.js";
import "../../_shared/icons/_Icon.vue.js";
import useControlValue from "../../_shared/utils/control.js";
import useOnBeforeClose from "./useOnBeforeClose.js";
const useModalClose = (params) => {
  const {
    maskClosable,
    escToClose,
    visible,
    defaultVisible,
    onBeforeCancel,
    onBeforeOk,
    emits
  } = params;
  const outerVisible = ref(false);
  const asyncLoading = ref(false);
  const innerVisible = useControlValue(
    visible,
    defaultVisible.value,
    (val) => {
      emits("update:visible", val);
    }
  );
  const handleAfterLeave = () => {
    emits("close");
    outerVisible.value = false;
  };
  const handleClose = async (type, ev) => {
    const isClose = await useOnBeforeClose(
      type,
      asyncLoading,
      onBeforeOk,
      onBeforeCancel
    );
    if (!isClose) {
      return;
    }
    if (type == "mask" && !maskClosable.value) {
      return;
    }
    if (type == "confirmBtn") {
      emits("ok");
    }
    emits("cancel", ev);
    innerVisible.value = false;
  };
  if (escToClose.value) {
    onKeyStroke(["Escape"], (ev) => {
      if (!innerVisible.value)
        return;
      handleClose("esc", ev);
    });
  }
  watch(
    () => innerVisible.value,
    (val) => {
      if (!val)
        return;
      outerVisible.value = val;
    },
    {
      immediate: true
    }
  );
  return {
    asyncLoading,
    outerVisible,
    innerVisible,
    handleClose,
    handleAfterLeave
  };
};
export {
  useModalClose as default
};
