<template>
  <div class="yc-watermark" ref="containerRef">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch, computed, CSSProperties, toRefs } from 'vue';
import { WatermarkProps, WatermarkSlots } from './type';
import { useMutationObserver } from '@vueuse/core';
import { isArray } from '@shared/utils';
defineOptions({
  name: 'Watermark',
});
defineSlots<WatermarkSlots>();
const props = withDefaults(defineProps<WatermarkProps>(), {
  content: '',
  image: '',
  width: undefined,
  height: undefined,
  gap: () => [90, 90],
  offset: () => [45, 45],
  rotate: -22,
  font: () => {
    return {
      color: 'rgba(0, 0, 0, 0.15)',
      fontSize: 16,
      fontFamily: 'sans-serif',
      fontStyle: 'normal',
      textAlign: 'center',
      fontWeight: 'normal',
    };
  },
  zIndex: 6,
  alpha: 1,
  grayscale: false,
  repeat: true,
  staggered: true,
  antiTamper: true,
});
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
  zIndex,
} = toRefs(props);
const containerRef = ref<HTMLDivElement>();
const ratio = window.devicePixelRatio || 1;
const watermarkMap = ref(new Map<HTMLDivElement, HTMLDivElement>());
// 文字样式
const color = computed(() => props.font?.color as string);
const fontSize = computed(() => props.font?.fontSize ?? 16);
const fontWeight = computed(() => props.font?.fontWeight ?? 'normal');
const fontStyle = computed(() => props.font?.fontStyle ?? 'normal');
const fontFamily = computed(() => props.font?.fontFamily ?? 'sans-serif');
const textAlign = computed(() => props.font?.textAlign ?? 'center');
const contents = computed(() =>
  isArray(props.content) ? props.content : [props.content]
);
// 水印样式
const gapX = computed(() => props.gap?.[0] ?? 90);
const gapY = computed(() => props.gap?.[1] ?? 90);
const gapXCenter = computed(() => gapX.value / 2);
const gapYCenter = computed(() => gapY.value / 2);
const offsetLeft = computed(() => props.offset?.[0] ?? gapXCenter.value);
const offsetTop = computed(() => props.offset?.[1] ?? gapYCenter.value);
const markStyle = computed(() => {
  const left = offsetLeft.value - gapXCenter.value;
  const top = offsetTop.value - gapYCenter.value;
  return {
    position: 'absolute',
    left: left > 0 ? `${left}px` : 0,
    top: top > 0 ? `${top}px` : 0,
    width: left > 0 ? `calc(100% - ${left}px)` : '100%',
    height: top > 0 ? `calc(100% - ${top}px)` : '100%',
    pointerEvents: 'none',
    backgroundRepeat: props.repeat ? 'repeat' : 'no-repeat',
    backgroundPosition: `${left > 0 ? 0 : left}px ${top > 0 ? 0 : top}px`,
    zIndex: zIndex.value ?? 6,
  } as CSSProperties;
});
const isStaggered = computed(() => staggered.value && repeat.value);

function camelToKebab(camelCase: string): string {
  return camelCase.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}
function styleToString(style: CSSProperties): string {
  return Object.entries(style)
    .map(([key, value]) => `${camelToKebab(key)}:${value}`)
    .join(';');
}
// 让canvas灰化
function canvasToGray(canvas: HTMLCanvasElement): void {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
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
// 添加水印
const appendWatermark = (base64: string, width: number) => {
  if (containerRef.value) {
    const watermarkEle = watermarkMap.value.get(containerRef.value);

    if (watermarkEle) {
      if (containerRef.value.contains(watermarkEle)) {
        containerRef.value.removeChild(watermarkEle);
      }
      watermarkMap.value.delete(containerRef.value);
    }
    const newWatermarkEle = document.createElement('div');
    newWatermarkEle.setAttribute(
      'style',
      styleToString({
        ...markStyle.value,
        backgroundImage: `url('${base64}')`,
        backgroundSize: `${width}px`,
      })
    );
    containerRef.value?.append(newWatermarkEle);
    watermarkMap.value.set(containerRef.value, newWatermarkEle);
  }
};
// 获取marksize
const getMarkSize = (ctx: CanvasRenderingContext2D) => {
  let defaultWidth = 120;
  let defaultHeight = 28;
  if (!image.value && ctx.measureText) {
    ctx.font = `${fontSize.value}px ${fontFamily.value}`;
    const widths = contents.value.map((item) => ctx.measureText(item!).width);
    defaultWidth = Math.ceil(Math.max(...widths));
    defaultHeight =
      fontSize.value * contents.value.length + (contents.value.length - 1) * 3;
  }
  return [width.value ?? defaultWidth, height.value ?? defaultHeight] as const;
};
// 渲染水印
const renderWatermark = () => {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  const [markWidth, markheight] = getMarkSize(ctx);
  const realMarkWidth = markWidth * ratio;
  const realMarkHeight = markheight * ratio;
  const canvasWidth = (gapX.value + markWidth) * ratio;
  const canvasHeight = (gapY.value + markheight) * ratio;
  const drawX = (gapX.value / 2) * ratio;
  const drawY = (gapY.value / 2) * ratio;
  const rotateX = canvasWidth / 2;
  const rotateY = canvasHeight / 2;
  const baseSize = isStaggered.value ? 2 : 1;
  const fillWidth = (gapX.value + markWidth) * baseSize;
  canvas.width = canvasWidth * baseSize;
  canvas.height = canvasHeight * baseSize;
  ctx.globalAlpha = alpha.value;
  ctx.save();
  ctx.translate(rotateX, rotateY);
  ctx.rotate((Math.PI / 180) * rotate.value);
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
  // 渲染图片
  if (image.value) {
    const img = new Image();
    img.onload = () => {
      ctx.drawImage(img, drawX, drawY, realMarkWidth, realMarkHeight);
      drawImage();
    };
    img.crossOrigin = 'anonymous';
    img.referrerPolicy = 'no-referrer';
    img.src = image.value;
  } else {
    const mergedFontSize = Number(fontSize.value) * ratio;
    ctx.font = `${fontStyle.value} normal ${fontWeight.value} ${mergedFontSize}px/${markheight}px ${fontFamily.value}`;
    ctx.fillStyle = color.value;
    ctx.textAlign = textAlign.value;
    ctx.textBaseline = 'top';
    ctx.translate(realMarkWidth / 2, 0);
    contents.value?.forEach((item, index) => {
      ctx.fillText(
        item ?? '',
        drawX,
        drawY + index * (mergedFontSize + 3 * ratio)
      );
    });
    drawImage();
  }
};
// 是否是水印
const isWatermarkEle = (ele: any) => {
  return Array.from(watermarkMap.value.values()).includes(ele);
};
// 处理元素改变
const handleMutations = (mutations: MutationRecord[]) => {
  if (!antiTamper.value) return;
  for (const mutation of mutations) {
    const isRemoved = Array.from(mutation.removedNodes).some((node) =>
      isWatermarkEle(node)
    );
    const isModified =
      mutation.type === 'attributes' && isWatermarkEle(mutation.target);

    if (isRemoved || isModified) {
      renderWatermark();
      break;
    }
  }
};

watch(props, renderWatermark, { deep: true, flush: 'post' });

useMutationObserver(containerRef, handleMutations, {
  attributes: true,
  childList: true,
  characterData: true,
  subtree: true,
});

onMounted(() => {
  renderWatermark();
});
</script>

<style lang="less">
@import './style/watermark.less';
</style>
