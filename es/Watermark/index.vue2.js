import { defineComponent, toRefs, ref, computed, watch, onMounted, openBlock, createElementBlock, renderSlot } from "vue";
import { useMutationObserver } from "../node_modules/@vueuse/core/index.js";
import "../node_modules/tinycolor2/esm/tinycolor.js";
import "../_shared/utils/dom.js";
import { isArray } from "../_shared/utils/is.js";
import "../_shared/utils/time.js";
import "../Empty/index.js";
import "../_shared/icons/_Icon.vue.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "Watermark"
  },
  __name: "index",
  props: {
    content: { default: "" },
    image: { default: "" },
    width: { default: void 0 },
    height: { default: void 0 },
    gap: { default: () => [90, 90] },
    offset: { default: () => [45, 45] },
    rotate: { default: -22 },
    font: { default: () => {
      return {
        color: "rgba(0, 0, 0, 0.15)",
        fontSize: 16,
        fontFamily: "sans-serif",
        fontStyle: "normal",
        textAlign: "center",
        fontWeight: "normal"
      };
    } },
    zIndex: { default: 6 },
    alpha: { default: 1 },
    grayscale: { type: Boolean, default: false },
    repeat: { type: Boolean, default: true },
    staggered: { type: Boolean, default: true },
    antiTamper: { type: Boolean, default: true }
  },
  setup(__props) {
    const props = __props;
    const {
      width,
      height,
      alpha,
      image,
      grayscale,
      rotate,
      repeat,
      staggered,
      antiTamper,
      zIndex
    } = toRefs(props);
    const containerRef = ref();
    const ratio = window.devicePixelRatio || 1;
    const watermarkMap = ref(/* @__PURE__ */ new Map());
    const color = computed(() => {
      var _a;
      return (_a = props.font) == null ? void 0 : _a.color;
    });
    const fontSize = computed(() => {
      var _a;
      return ((_a = props.font) == null ? void 0 : _a.fontSize) ?? 16;
    });
    const fontWeight = computed(() => {
      var _a;
      return ((_a = props.font) == null ? void 0 : _a.fontWeight) ?? "normal";
    });
    const fontStyle = computed(() => {
      var _a;
      return ((_a = props.font) == null ? void 0 : _a.fontStyle) ?? "normal";
    });
    const fontFamily = computed(() => {
      var _a;
      return ((_a = props.font) == null ? void 0 : _a.fontFamily) ?? "sans-serif";
    });
    const textAlign = computed(() => {
      var _a;
      return ((_a = props.font) == null ? void 0 : _a.textAlign) ?? "center";
    });
    const contents = computed(
      () => isArray(props.content) ? props.content : [props.content]
    );
    const gapX = computed(() => {
      var _a;
      return ((_a = props.gap) == null ? void 0 : _a[0]) ?? 90;
    });
    const gapY = computed(() => {
      var _a;
      return ((_a = props.gap) == null ? void 0 : _a[1]) ?? 90;
    });
    const gapXCenter = computed(() => gapX.value / 2);
    const gapYCenter = computed(() => gapY.value / 2);
    const offsetLeft = computed(() => {
      var _a;
      return ((_a = props.offset) == null ? void 0 : _a[0]) ?? gapXCenter.value;
    });
    const offsetTop = computed(() => {
      var _a;
      return ((_a = props.offset) == null ? void 0 : _a[1]) ?? gapYCenter.value;
    });
    const markStyle = computed(() => {
      const left = offsetLeft.value - gapXCenter.value;
      const top = offsetTop.value - gapYCenter.value;
      return {
        position: "absolute",
        left: left > 0 ? `${left}px` : 0,
        top: top > 0 ? `${top}px` : 0,
        width: left > 0 ? `calc(100% - ${left}px)` : "100%",
        height: top > 0 ? `calc(100% - ${top}px)` : "100%",
        pointerEvents: "none",
        backgroundRepeat: props.repeat ? "repeat" : "no-repeat",
        backgroundPosition: `${left > 0 ? 0 : left}px ${top > 0 ? 0 : top}px`,
        zIndex: zIndex.value ?? 6
      };
    });
    const isStaggered = computed(() => staggered.value && repeat.value);
    function camelToKebab(camelCase) {
      return camelCase.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
    }
    function styleToString(style) {
      return Object.entries(style).map(([key, value]) => `${camelToKebab(key)}:${value}`).join(";");
    }
    function canvasToGray(canvas) {
      const ctx = canvas.getContext("2d");
      if (!ctx)
        return;
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const { data } = imageData;
      for (let i = 0; i < data.length; i += 4) {
        const brightness = (data[i] + data[i + 1] + data[i + 2]) / 3;
        data[i] = brightness;
        data[i + 1] = brightness;
        data[i + 2] = brightness;
      }
      ctx.putImageData(imageData, 0, 0);
    }
    const appendWatermark = (base64, width2) => {
      var _a;
      if (containerRef.value) {
        const watermarkEle = watermarkMap.value.get(containerRef.value);
        if (watermarkEle) {
          if (containerRef.value.contains(watermarkEle)) {
            containerRef.value.removeChild(watermarkEle);
          }
          watermarkMap.value.delete(containerRef.value);
        }
        const newWatermarkEle = document.createElement("div");
        newWatermarkEle.setAttribute(
          "style",
          styleToString({
            ...markStyle.value,
            backgroundImage: `url('${base64}')`,
            backgroundSize: `${width2}px`
          })
        );
        (_a = containerRef.value) == null ? void 0 : _a.append(newWatermarkEle);
        watermarkMap.value.set(containerRef.value, newWatermarkEle);
      }
    };
    const getMarkSize = (ctx) => {
      let defaultWidth = 120;
      let defaultHeight = 28;
      if (!image.value && ctx.measureText) {
        ctx.font = `${fontSize.value}px ${fontFamily.value}`;
        const widths = contents.value.map((item) => ctx.measureText(item).width);
        defaultWidth = Math.ceil(Math.max(...widths));
        defaultHeight = fontSize.value * contents.value.length + (contents.value.length - 1) * 3;
      }
      return [width.value ?? defaultWidth, height.value ?? defaultHeight];
    };
    const renderWatermark = () => {
      var _a;
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      if (!ctx)
        return;
      const [markWidth, markheight] = getMarkSize(ctx);
      const realMarkWidth = markWidth * ratio;
      const realMarkHeight = markheight * ratio;
      const canvasWidth = (gapX.value + markWidth) * ratio;
      const canvasHeight = (gapY.value + markheight) * ratio;
      const drawX = gapX.value / 2 * ratio;
      const drawY = gapY.value / 2 * ratio;
      const rotateX = canvasWidth / 2;
      const rotateY = canvasHeight / 2;
      const baseSize = isStaggered.value ? 2 : 1;
      const fillWidth = (gapX.value + markWidth) * baseSize;
      canvas.width = canvasWidth * baseSize;
      canvas.height = canvasHeight * baseSize;
      ctx.globalAlpha = alpha.value;
      ctx.save();
      ctx.translate(rotateX, rotateY);
      ctx.rotate(Math.PI / 180 * rotate.value);
      ctx.translate(-rotateX, -rotateY);
      const drawImage = () => {
        ctx.restore();
        if (isStaggered.value) {
          ctx.drawImage(
            canvas,
            0,
            0,
            canvasWidth,
            canvasHeight,
            canvasWidth,
            canvasHeight,
            canvasWidth,
            canvasHeight
          );
        }
        grayscale.value && canvasToGray(canvas);
        appendWatermark(canvas.toDataURL(), fillWidth);
      };
      if (image.value) {
        const img = new Image();
        img.onload = () => {
          ctx.drawImage(img, drawX, drawY, realMarkWidth, realMarkHeight);
          drawImage();
        };
        img.crossOrigin = "anonymous";
        img.referrerPolicy = "no-referrer";
        img.src = image.value;
      } else {
        const mergedFontSize = Number(fontSize.value) * ratio;
        ctx.font = `${fontStyle.value} normal ${fontWeight.value} ${mergedFontSize}px/${markheight}px ${fontFamily.value}`;
        ctx.fillStyle = color.value;
        ctx.textAlign = textAlign.value;
        ctx.textBaseline = "top";
        ctx.translate(realMarkWidth / 2, 0);
        (_a = contents.value) == null ? void 0 : _a.forEach((item, index) => {
          ctx.fillText(
            item ?? "",
            drawX,
            drawY + index * (mergedFontSize + 3 * ratio)
          );
        });
        drawImage();
      }
    };
    const isWatermarkEle = (ele) => {
      return Array.from(watermarkMap.value.values()).includes(ele);
    };
    const handleMutations = (mutations) => {
      if (!antiTamper.value)
        return;
      for (const mutation of mutations) {
        const isRemoved = Array.from(mutation.removedNodes).some(
          (node) => isWatermarkEle(node)
        );
        const isModified = mutation.type === "attributes" && isWatermarkEle(mutation.target);
        if (isRemoved || isModified) {
          renderWatermark();
          break;
        }
      }
    };
    watch(props, renderWatermark, { deep: true, flush: "post" });
    useMutationObserver(containerRef, handleMutations, {
      attributes: true,
      childList: true,
      characterData: true,
      subtree: true
    });
    onMounted(() => {
      renderWatermark();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "yc-watermark",
        ref_key: "containerRef",
        ref: containerRef
      }, [
        renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ], 512);
    };
  }
});
export {
  _sfc_main as default
};
