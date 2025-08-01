import { watch, Ref } from 'vue';
import { useMediaQuery, unrefElement } from '@vueuse/core';
import { isObject, isString, isUndefined } from './is';
import { EllipsisConfig } from '@/components/Typography/type';
import { BreakpointName, ResponsiveValue } from '@/components/Grid';

// 是否是服务端渲染
export const isServerRendering = (() => {
  try {
    return !(typeof window !== 'undefined' && document !== undefined);
  } catch (e) {
    return true;
  }
})();

// 查询
export const querySelector = (
  selectors: string,
  container?: Document | HTMLElement
) => {
  if (isServerRendering) {
    return undefined;
  }
  return (
    (container ?? document).querySelector<HTMLElement>(selectors) ?? undefined
  );
};

// 获取html元素
export const getElement = (
  target: string | HTMLElement | undefined,
  container?: Document | HTMLElement
): HTMLElement | undefined => {
  if (isString(target)) {
    const selector = target[0] === '#' ? `[id='${target.slice(1)}']` : target;
    return querySelector(selector, container);
  }
  return target;
};

// 提取 DOM 元素内所有文本内容
export function getDomText(dom: Ref<HTMLElement | undefined>): string {
  return unrefElement(dom)?.innerText || '';
}

// 获取媒体查询队列
const getMedicaQueryQuerues = () => {
  return {
    xs: '(min-width: 0)',
    sm: '(min-width: 576px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 992px)',
    xl: '(min-width: 1200px)',
    xxl: '(min-width: 1600px)',
  };
};

// 获取断点下的值
export function getBreakpointValue(
  breakpoint: BreakpointName,
  value: string | number | ResponsiveValue,
  defaultValue?: number | string
): number | string | undefined {
  // 如果直接是值而非响应式对象，直接返回
  if (!isObject(value)) {
    return value;
  }
  const order: BreakpointName[] = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];
  const index = order.indexOf(breakpoint);
  // 从当前断点开始向前查找
  for (let i = index; i >= 0; i--) {
    const bp = order[i];
    if (isUndefined(value[bp])) continue;
    return value[bp];
  }
  // 如果前面没找到，从当前断点向后查找
  for (let i = index + 1; i < order.length; i++) {
    const bp = order[i];
    if (isUndefined(value[bp])) continue;
    return value[bp];
  }
  // 如果都没找到，返回defaultValue
  return defaultValue;
}

// 媒体查询
export const mediaQueryHandler = (
  onBreakpoint: (
    breakpoint: BreakpointName,
    order: Record<string, number>,
    index: number
  ) => void,
  queries: Record<string, string> = getMedicaQueryQuerues()
) => {
  const breakpoints: string[] = [];
  const order: Record<string, number> = {};
  const matches: Ref<boolean>[] = [];
  Object.keys(queries).forEach((key, i) => {
    breakpoints.push(key);
    order[key] = i;
    matches.push(useMediaQuery(queries[key]));
  });
  watch(
    matches,
    (val) => {
      const i = val.lastIndexOf(true);
      onBreakpoint(breakpoints[i] as BreakpointName, order, i);
    },
    {
      immediate: true,
    }
  );
};

// 查找元素的第一个可滚动父元素
export function findFirstScrollableParent(element?: HTMLElement) {
  if (!element || element === document.body) {
    return;
  }
  let currentElement: HTMLElement | null = element.parentElement;
  while (currentElement && currentElement !== document.body) {
    const style = window.getComputedStyle(currentElement);
    const overflow = style.overflowY || style.overflow;
    const isScrollable = ['auto', 'scroll'].includes(overflow);
    const canScroll = currentElement.scrollHeight > currentElement.clientHeight;
    if (isScrollable && canScroll) {
      return currentElement;
    }
    currentElement = currentElement.parentElement;
  }
}

/**
 * 计算文本是否需要省略并返回处理后的文本
 * @param originElement 原始DOM元素，用于获取样式
 * @param ellipsisConfig 省略配置
 * @param operations 操作按钮的DOM元素或元素数组
 * @param fullText 完整文本
 * @returns 返回处理后的文本和是否省略的标志
 */
export function calculateEllipsis(
  originElement: HTMLElement,
  ellipsisConfig: EllipsisConfig = {},
  operations: HTMLElement | HTMLElement[] | null = null,
  fullText: string
) {
  const win = window as any;
  // 创建全局容器用于测量
  if (!win._ellipsisContainer) {
    win._ellipsisContainer = document.createElement('div');
    document.body.appendChild(win._ellipsisContainer);
  }
  const ellipsisContainer = win._ellipsisContainer;

  const {
    rows = 1,
    suffix = '',
    ellipsisStr = '...',
    expandable = false,
    showTooltip = false,
    css = false,
  } = ellipsisConfig;
  // 如果启用纯CSS省略，直接返回完整文本
  if (css) {
    return {
      ellipsis: false,
      text: fullText,
      isClamped: false,
    };
  }
  // 复制原始元素的样式
  const originStyle = window.getComputedStyle(originElement);
  const styleString = Array.from(originStyle)
    .map((name) => `${name}: ${originStyle.getPropertyValue(name)};`)
    .join('');

  const lineHeight = parseFloat(originStyle.lineHeight) || 0;
  const maxHeight = Math.round(
    lineHeight * rows +
      parseFloat(originStyle.paddingTop) +
      parseFloat(originStyle.paddingBottom)
  );

  // 设置测量容器的样式
  ellipsisContainer.setAttribute('style', styleString);
  ellipsisContainer.setAttribute('aria-hidden', 'true');
  ellipsisContainer.style.height = 'auto';
  ellipsisContainer.style.minHeight = 'auto';
  ellipsisContainer.style.maxHeight = 'auto';
  ellipsisContainer.style.position = 'fixed';
  ellipsisContainer.style.left = '0';
  ellipsisContainer.style.top = '-99999999px';
  ellipsisContainer.style.zIndex = '-200';
  ellipsisContainer.style.whiteSpace = 'normal';

  // 清空容器并添加内容
  ellipsisContainer.innerHTML = '';

  // 省略号和后缀
  const ellipsisTextNode = document.createTextNode(`${ellipsisStr}${suffix}`);
  ellipsisContainer.appendChild(ellipsisTextNode);

  // 操作按钮（如果是可展开的）
  if (expandable && operations) {
    if (Array.isArray(operations)) {
      operations.forEach((op) => {
        ellipsisContainer.appendChild(op.cloneNode(true));
      });
    } else {
      ellipsisContainer.appendChild(operations.cloneNode(true));
    }
  }

  // 内容
  const textNode = document.createTextNode(fullText);
  ellipsisContainer.insertBefore(textNode, ellipsisTextNode);

  // 检查是否在范围内
  const inRange = (): boolean => {
    return ellipsisContainer.offsetHeight <= maxHeight;
  };
  if (inRange()) {
    return {
      ellipsis: false,
      text: fullText,
      isClamped: false,
    };
  }
  // 二分法测量文本
  const measureText = (
    textNode: Text,
    startLoc: number = 0,
    endLoc: number = fullText.length,
    lastSuccessLoc: number = 0
  ): void => {
    const midLoc = Math.floor((startLoc + endLoc) / 2);
    const currentText = fullText.slice(0, midLoc);
    textNode.textContent = currentText;
    if (startLoc >= endLoc - 1) {
      for (let step = endLoc; step >= startLoc; step -= 1) {
        const currentStepText = fullText.slice(0, step);
        textNode.textContent = currentStepText;

        if (inRange() || !currentStepText) {
          return;
        }
      }
    }
    if (inRange()) {
      measureText(textNode, midLoc, endLoc, midLoc);
    } else {
      measureText(textNode, startLoc, midLoc, lastSuccessLoc);
    }
  };
  measureText(textNode);
  // 处理tooltip逻辑
  const shouldShowTooltip = showTooltip && textNode.textContent !== fullText;
  const tooltipProps = typeof showTooltip === 'object' ? showTooltip.props : {};

  return {
    text: textNode.textContent,
    ellipsis: true,
    isClamped: shouldShowTooltip,
    ...(shouldShowTooltip && {
      tooltip: {
        title: fullText,
        ...(typeof showTooltip === 'object' && {
          type: showTooltip.type,
          props: tooltipProps,
        }),
      },
    }),
  };
}
