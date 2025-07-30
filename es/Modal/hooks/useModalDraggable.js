import { ref, computed, watch } from "vue";
import { useDraggable } from "../../node_modules/@vueuse/core/index.js";
import "../../node_modules/tinycolor2/esm/tinycolor.js";
import "../../_shared/utils/dom.js";
import { valueToPx, sleep } from "../../_shared/utils/fn.js";
import "../../_shared/utils/time.js";
import "../../Empty/index.js";
import "../../_shared/icons/_Icon.vue.js";
const useModalDraggable = (params) => {
  const {
    visible,
    triggerRef,
    modalRef,
    draggable,
    fullscreen,
    alignCenter,
    top
  } = params;
  const originX = ref(0);
  const originY = ref(0);
  const { x, y } = useDraggable(triggerRef, {
    onMove() {
      if (!isDraggable.value)
        return;
      const maxX = window.innerWidth - modalRef.value.offsetWidth;
      const maxY = window.innerHeight - modalRef.value.offsetHeight;
      x.value = x.value >= maxX ? maxX : x.value;
      x.value = x.value <= 0 ? 0 : x.value;
      y.value = y.value >= maxY ? maxY : y.value;
      y.value = y.value <= 0 ? 0 : y.value;
    }
  });
  const isDraggable = computed(() => draggable.value && !fullscreen.value);
  const dragStyle = computed(() => {
    return isDraggable.value && (x.value != originX.value || y.value != originY.value) ? {
      transform: `translate(${valueToPx(x.value)},${valueToPx(y.value)})`
    } : {
      left: valueToPx(originX.value),
      top: valueToPx(originY.value)
    };
  });
  watch(
    () => visible.value,
    async (v) => {
      if (!v)
        return;
      await sleep(0);
      const offsetX = (window.innerWidth - modalRef.value.offsetWidth) / 2;
      const offsetY = (window.innerHeight - modalRef.value.offsetHeight) / 2;
      const finalX = offsetX <= 0 ? 0 : offsetX;
      const finalY = offsetY <= 0 ? 0 : offsetY;
      originX.value = finalX;
      originY.value = alignCenter.value ? finalY : top.value;
      x.value = originX.value;
      y.value = originY.value;
    },
    {
      immediate: true
    }
  );
  return {
    dragStyle,
    isDraggable
  };
};
export {
  useModalDraggable as default
};
