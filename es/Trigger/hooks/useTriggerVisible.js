import { toRefs, ref, computed, watch, nextTick } from "vue";
import { onClickOutside, useEventListener } from "../../node_modules/@vueuse/core/index.js";
import useContext from "./useContext.js";
import "../../node_modules/tinycolor2/esm/tinycolor.js";
import { findFirstScrollableParent } from "../../_shared/utils/dom.js";
import "../../_shared/utils/time.js";
import { unrefElement } from "../../_shared/utils/vue-utils.js";
import { getGlobalConfig } from "../../_shared/utils/global-config.js";
import useControlValue from "../../_shared/utils/control.js";
const useTriggerVisible = (params) => {
  const { props, emits, popupRef, triggerRef } = params;
  const {
    trigger,
    popupVisible,
    defaultPopupVisible,
    clickToClose,
    blurToClose,
    clickOutsideToClose,
    mouseEnterDelay,
    mouseLeaveDelay,
    focusDelay,
    disabled,
    scrollToCloseDistance,
    autoSetPosition,
    alignPoint
  } = toRefs(props);
  const { scrollToClose } = getGlobalConfig(props);
  const {
    onTriggerMouseclick,
    onTriggerMouseenter,
    onTriggerMouseleave,
    onTriggerBlur,
    onTriggerFocus,
    onClickOutSide
  } = props;
  const computedVisible = useControlValue(
    popupVisible,
    defaultPopupVisible.value,
    (val) => {
      emits("update:popupVisible", val);
      emits("popup-visible-change", val);
    }
  );
  const { timeout, mosueLeaveHandler, mouseEnterHandler, clickOutsideHandler } = useContext({
    trigger: trigger.value,
    mouseEnterDelay,
    computedVisible,
    popupRef
  });
  const mouseX = ref(0);
  const mouseY = ref(0);
  let oldScrollLeft = 0;
  let oldScrollTop = 0;
  const scrollContainer = computed(() => {
    return triggerRef.value ? findFirstScrollableParent(unrefElement(triggerRef.value)) : null;
  });
  const handleClickEvent = (e, type) => {
    if (trigger.value != type || disabled.value) {
      return;
    }
    if (timeout.value) {
      clearTimeout(timeout.value);
    }
    if (!autoSetPosition.value && alignPoint.value) {
      const { pageX, pageY } = e;
      mouseX.value = pageX;
      mouseY.value = pageY;
    }
    computedVisible.value = clickToClose.value ? !computedVisible.value : true;
    onTriggerMouseclick == null ? void 0 : onTriggerMouseclick();
  };
  const handleMouseenter = () => {
    if (trigger.value != "hover" || disabled.value) {
      return;
    }
    mouseEnterHandler();
    if (timeout.value) {
      clearTimeout(timeout.value);
    }
    if (computedVisible.value) {
      return;
    }
    timeout.value = setTimeout(() => {
      computedVisible.value = true;
      onTriggerMouseenter == null ? void 0 : onTriggerMouseenter();
    }, mouseEnterDelay.value);
  };
  const handleMouseleave = (e) => {
    if (trigger.value != "hover" || disabled.value) {
      return;
    }
    if (timeout.value) {
      clearTimeout(timeout.value);
    }
    if (!computedVisible.value) {
      return;
    }
    timeout.value = setTimeout(() => {
      onTriggerMouseleave == null ? void 0 : onTriggerMouseleave();
      const isHandle = mosueLeaveHandler(e);
      if (isHandle) {
        return;
      }
      computedVisible.value = false;
    }, mouseLeaveDelay.value);
  };
  const handleFocus = () => {
    if (trigger.value != "focus" || disabled.value) {
      return;
    }
    if (timeout.value) {
      clearTimeout(timeout.value);
    }
    if (computedVisible.value) {
      return;
    }
    timeout.value = setTimeout(() => {
      computedVisible.value = true;
      onTriggerFocus == null ? void 0 : onTriggerFocus();
    }, focusDelay.value);
  };
  const handleBlur = () => {
    if (trigger.value != "focus" || !blurToClose.value || disabled.value) {
      return;
    }
    if (timeout.value) {
      clearTimeout(timeout.value);
    }
    if (!computedVisible.value) {
      return;
    }
    computedVisible.value = false;
    onTriggerBlur == null ? void 0 : onTriggerBlur();
  };
  const handleClickOutsideClose = () => {
    if (!clickOutsideToClose.value || !["click", "contextMenu"].includes(trigger.value)) {
      return;
    }
    onClickOutside(
      popupRef,
      (e) => {
        if (disabled.value)
          return;
        const isHandle = clickOutsideHandler(e);
        if (!computedVisible.value || isHandle) {
          return;
        }
        computedVisible.value = false;
        onClickOutSide == null ? void 0 : onClickOutSide();
      },
      {
        ignore: [triggerRef]
      }
    );
  };
  const handleScrollToClose = async () => {
    await nextTick();
    if (!scrollToClose.value || !scrollContainer.value)
      return;
    useEventListener(scrollContainer, "scroll", () => {
      if (!computedVisible.value)
        return;
      const { scrollTop, scrollLeft } = scrollContainer.value;
      if (Math.abs(scrollTop - oldScrollTop) >= scrollToCloseDistance.value || Math.abs(scrollLeft - oldScrollLeft) >= scrollToCloseDistance.value) {
        computedVisible.value = false;
        oldScrollTop = scrollTop;
        oldScrollLeft = oldScrollLeft;
      }
    });
  };
  watch(
    () => computedVisible.value,
    async () => {
      await nextTick();
      if (!scrollContainer.value)
        return;
      const { scrollTop, scrollLeft } = scrollContainer.value;
      oldScrollLeft = scrollLeft;
      oldScrollTop = scrollTop;
    }
  );
  handleClickOutsideClose();
  handleScrollToClose();
  return {
    mouseX,
    mouseY,
    computedVisible,
    handleClickEvent,
    handleMouseenter,
    handleMouseleave,
    handleFocus,
    handleBlur
  };
};
export {
  useTriggerVisible as default
};
