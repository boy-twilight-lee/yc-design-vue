import { toRefs, ref, computed, watch } from "vue";
import { useElementSize, useElementBounding } from "../../node_modules/@vueuse/core/index.js";
import "../../node_modules/tinycolor2/esm/tinycolor.js";
import "../../_shared/utils/dom.js";
import { valueToPx, sleep } from "../../_shared/utils/fn.js";
import "../../_shared/utils/time.js";
import { unrefElement } from "../../_shared/utils/vue-utils.js";
import { getGlobalConfig } from "../../_shared/utils/global-config.js";
const useTriggerPosition = (params) => {
  const {
    props,
    computedVisible,
    popupRef,
    triggerRef,
    arrowRef,
    mouseX,
    mouseY
  } = params;
  const {
    trigger,
    alignPoint,
    popupTranslate,
    popupOffset,
    autoFitPosition,
    autoFitPopupMinWidth,
    autoFitPopupWidth,
    autoSetPosition,
    showArrow,
    position: _position,
    arrowStyle: _arrowStyle,
    contentStyle: _contentStyle
  } = toRefs(props);
  const { updateAtScroll, zIndex } = getGlobalConfig(props);
  const position = ref(_position.value);
  const { width: popupWidth, height: popupHeight } = useElementSize(
    popupRef,
    void 0,
    {
      box: "border-box"
    }
  );
  const { arrowWidth, arrowHeight } = getArrowSize();
  const {
    left,
    top,
    bottom,
    right,
    width: triggerWidth,
    height: triggerHeight
  } = useElementBounding(triggerRef, {
    windowScroll: updateAtScroll.value,
    updateTiming: "next-frame"
  });
  const popupStyle = computed(() => {
    const [offsetX, offsetY] = calcPopupOffset();
    const isMousePosition = alignPoint.value && ["click", "contextMenu"].includes(trigger.value);
    if (autoSetPosition.value || isMousePosition) {
      return {
        top: valueToPx(mouseY.value + offsetY),
        left: valueToPx(
          mouseX.value - (autoFitPosition.value ? 0 : popupWidth.value / 2) + offsetX
        ),
        zIndex: zIndex.value
      };
    }
    const [offsetLeft, offsetTop] = calcPopupPosition({
      position: position.value,
      triggerWidth: triggerWidth.value,
      triggerHeight: triggerHeight.value,
      popupHeight: popupHeight.value,
      popupWidth: popupWidth.value,
      top: top.value,
      left: left.value,
      right: right.value,
      bottom: bottom.value
    });
    if (!autoFitPosition.value) {
      return {
        top: valueToPx(offsetTop + offsetY),
        left: valueToPx(offsetLeft + offsetX),
        zIndex: zIndex.value
      };
    }
    const [newLeft, newTop] = calcCurPopupPosition({
      offsetLeft,
      offsetTop,
      position: position.value,
      top: top.value,
      left: left.value,
      right: right.value,
      bottom: bottom.value,
      popupHeight: popupHeight.value,
      popupWidth: popupWidth.value
    });
    position.value = calcPositionRef({
      offsetLeft: newLeft,
      offsetTop: newTop,
      top: top.value,
      left: left.value,
      right: right.value,
      bottom: bottom.value,
      triggerWidth: triggerWidth.value,
      triggerHeight: triggerHeight.value,
      popupHeight: popupHeight.value,
      popupWidth: popupWidth.value
    });
    const [newOffsetX, newOffsetY] = calcPopupOffset();
    return {
      left: valueToPx(newLeft + newOffsetX),
      top: valueToPx(newTop + newOffsetY),
      zIndex: zIndex.value
    };
  });
  const contentStyle = computed(() => {
    return {
      width: autoFitPopupWidth.value ? valueToPx(triggerWidth.value) : "",
      minWidth: autoFitPopupMinWidth.value ? valueToPx(triggerWidth.value) : "",
      ..._contentStyle.value
    };
  });
  const arrowStyle = computed(() => {
    return {
      ..._arrowStyle.value,
      ...calcArrowPosition({
        position: position.value,
        popupWidth: popupWidth.value,
        popupHeight: popupHeight.value,
        arrowWidth: arrowWidth.value,
        arrowHeight: arrowHeight.value,
        triggerHeight: triggerHeight.value,
        triggerWidth: triggerWidth.value
      })
    };
  });
  function calcPopupOffset() {
    const [translateX, translateY] = popupTranslate.value;
    let offsetX = translateX;
    let offsetY = translateY;
    if (position.value.startsWith("t")) {
      offsetY = -popupOffset.value;
    } else if (position.value.startsWith("b")) {
      offsetY = popupOffset.value;
    } else if (position.value.startsWith("l")) {
      offsetX = -popupOffset.value;
    } else if (position.value.startsWith("r")) {
      offsetX = popupOffset.value;
    }
    return [offsetX, offsetY];
  }
  const calcPopupPosition = (params2) => {
    let offsetTop = 0;
    let offsetLeft = 0;
    const {
      position: position2,
      triggerWidth: triggerWidth2,
      triggerHeight: triggerHeight2,
      popupWidth: popupWidth2,
      popupHeight: popupHeight2,
      left: left2,
      top: top2,
      right: right2,
      bottom: bottom2
    } = params2;
    if (["top", "tl", "tr", "bottom", "bl", "br"].includes(position2)) {
      offsetTop = position2.startsWith("t") ? top2 - popupHeight2 : bottom2;
      if (["top", "bottom"].includes(position2)) {
        offsetLeft = left2 + (triggerWidth2 - popupWidth2) / 2;
      } else if (["tl", "bl"].includes(position2)) {
        offsetLeft = left2;
      } else {
        offsetLeft = right2 - popupWidth2;
      }
    } else {
      offsetLeft = position2.startsWith("l") ? left2 - popupWidth2 : right2;
      if (["left", "right"].includes(position2)) {
        offsetTop = top2 + (triggerHeight2 - popupHeight2) / 2;
      } else if (["lt", "rt"].includes(position2)) {
        offsetTop = top2;
      } else {
        offsetTop = bottom2 - popupHeight2;
      }
    }
    return [offsetLeft, offsetTop];
  };
  const calcCurPopupPosition = (params2) => {
    const {
      position: position2,
      offsetLeft,
      offsetTop,
      bottom: bottom2,
      left: left2,
      right: right2,
      top: top2,
      popupHeight: popupHeight2,
      popupWidth: popupWidth2
    } = params2;
    let newLeft = offsetLeft;
    let newTop = offsetTop;
    if (["top", "tl", "tr", "bottom", "bl", "br"].includes(position2)) {
      if (offsetTop < 0 && ["top", "tl", "tr"].includes(position2)) {
        newTop = bottom2;
      } else if (offsetTop + popupHeight2 > window.innerHeight && ["bottom", "bl", "br"].includes(position2)) {
        newTop = top2 - popupHeight2;
      }
      if (offsetLeft < 0) {
        newLeft = left2;
      } else if (offsetLeft + popupWidth2 > window.innerWidth) {
        newLeft = right2 - popupWidth2;
      }
    } else {
      if (offsetLeft < 0 && ["left", "lt", "lb"].includes(position2)) {
        newLeft = right2;
      } else if (offsetLeft + popupWidth2 > window.innerWidth && ["right", "rt", "rb"].includes(position2)) {
        newLeft = left2 - popupWidth2;
      }
      if (offsetTop < 0) {
        newTop = top2;
      } else if (newTop + popupHeight2 > window.innerHeight) {
        newTop = top2 - popupHeight2;
      }
    }
    return [newLeft, newTop];
  };
  function getArrowSize() {
    if (!showArrow.value) {
      return {
        arrowWidth: ref(0),
        arrowHeight: ref(0)
      };
    }
    const { width, height } = useElementSize(arrowRef, void 0, {
      box: "border-box"
    });
    return {
      arrowWidth: width,
      arrowHeight: height
    };
  }
  const calcArrowPosition = (params2) => {
    const {
      position: position2,
      triggerWidth: triggerWidth2,
      triggerHeight: triggerHeight2,
      popupWidth: popupWidth2,
      popupHeight: popupHeight2,
      arrowHeight: arrowHeight2,
      arrowWidth: arrowWidth2
    } = params2;
    let inset;
    if (["top", "tl", "tr", "bottom", "bl", "br"].includes(position2)) {
      let arrowLeft = "";
      let arrowRight = "";
      if (["top", "bottom"].includes(position2)) {
        arrowLeft = valueToPx((popupWidth2 - arrowWidth2) / 2);
      } else if (["tl", "bl"].includes(position2)) {
        arrowLeft = valueToPx((triggerWidth2 - arrowWidth2) / 2);
      } else {
        arrowRight = valueToPx((triggerWidth2 - arrowWidth2) / 2);
      }
      inset = {
        top: position2.startsWith("b") ? "0" : "",
        right: arrowRight,
        bottom: position2.startsWith("t") ? "0" : "",
        left: arrowLeft
      };
    } else {
      let arrowTop = "";
      let arrowBottom = "";
      if (["left", "right"].includes(position2)) {
        arrowTop = valueToPx((popupHeight2 - arrowHeight2) / 2);
      } else if (["lt", "rt"].includes(position2)) {
        arrowTop = valueToPx((triggerHeight2 - arrowHeight2) / 2);
      } else {
        arrowBottom = valueToPx((triggerHeight2 - arrowHeight2) / 2);
      }
      inset = {
        top: arrowTop,
        right: position2.startsWith("l") ? "0" : "",
        bottom: arrowBottom,
        left: position2.startsWith("r") ? "0" : ""
      };
    }
    return inset;
  };
  function calcPositionRef(params2) {
    const {
      offsetLeft,
      offsetTop,
      top: top2,
      left: left2,
      bottom: bottom2,
      right: right2,
      triggerWidth: triggerWidth2,
      triggerHeight: triggerHeight2,
      popupHeight: popupHeight2,
      popupWidth: popupWidth2
    } = params2;
    const epsilon = 1e-5;
    const dirArray = [
      [top2 - popupHeight2, left2 + (triggerWidth2 - popupWidth2) / 2, "top"],
      [top2 - popupHeight2, left2, "tl"],
      [top2 - popupHeight2, right2 - popupWidth2, "tr"],
      [bottom2, left2 + (triggerWidth2 - popupWidth2) / 2, "bottom"],
      [bottom2, left2, "bl"],
      [bottom2, right2 - popupWidth2, "br"],
      [top2 + (triggerHeight2 - popupHeight2) / 2, left2 - popupWidth2, "left"],
      [top2, left2 - popupWidth2, "lt"],
      [bottom2 - popupHeight2, left2 - popupWidth2, "lb"],
      [top2 + (triggerHeight2 - popupHeight2) / 2, right2, "right"],
      [top2, right2, "rt"],
      [bottom2 - popupHeight2, right2, "rb"]
    ];
    const target = dirArray.find(([finalTop, finalLeft]) => {
      return Math.abs(finalLeft - offsetLeft) < epsilon && Math.abs(finalTop - offsetTop) < epsilon;
    });
    return (target == null ? void 0 : target[2]) ?? position.value;
  }
  watch(
    () => computedVisible.value,
    async (val) => {
      if (!val)
        return;
      await sleep(0);
      position.value = _position.value;
      const triggerDom = unrefElement(triggerRef);
      const popupDom = unrefElement(popupRef);
      if (triggerDom) {
        const {
          left: _left,
          right: _right,
          top: _top,
          bottom: _bottom,
          width: _triggerWidth,
          height: _triggerHeight
        } = triggerDom.getBoundingClientRect();
        left.value = _left;
        right.value = _right;
        top.value = _top;
        bottom.value = _bottom;
        triggerWidth.value = _triggerWidth;
        triggerHeight.value = _triggerHeight;
      }
      if (popupDom) {
        const { offsetWidth: _popupWidth, offsetHeight: _popupHeight } = popupDom;
        popupWidth.value = _popupWidth;
        popupHeight.value = _popupHeight;
      }
      if (arrowRef.value) {
        const { offsetWidth: _arrowWidth, offsetHeight: _arrowHeight } = arrowRef.value;
        arrowWidth.value = _arrowWidth;
        arrowHeight.value = _arrowHeight;
      }
    }
  );
  return {
    position,
    left,
    top,
    bottom,
    right,
    popupWidth,
    popupHeight,
    triggerWidth,
    triggerHeight,
    arrowWidth,
    arrowHeight,
    popupStyle,
    contentStyle,
    arrowStyle
  };
};
export {
  useTriggerPosition as default
};
