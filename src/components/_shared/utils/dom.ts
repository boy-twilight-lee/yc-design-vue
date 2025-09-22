import { watch, Ref } from 'vue';
import { BreakpointName, ResponsiveValue } from '../type';
import { MEDICA_QUERY_QUERUES } from '../constants';
import { useMediaQuery, unrefElement } from './dependencies';
import { isObject, isString, isUndefined, isNumber } from './is';

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
export const getDomText = (dom: Ref<HTMLElement | undefined>): string => {
  return unrefElement(dom)?.innerText || '';
};

// 获取断点下的值
export const getBreakpointValue = (
  breakpoint: BreakpointName,
  value: string | number | ResponsiveValue,
  defaultValue?: number | string
): number | string | undefined => {
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
};

// 媒体查询
export const mediaQueryHandler = (
  onBreakpoint: (
    breakpoint: BreakpointName,
    order: Record<string, number>,
    index: number
  ) => void,
  queries: Record<string, string> = MEDICA_QUERY_QUERUES
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
export const findFirstScrollableParent = (
  element?: HTMLElement | null
): HTMLElement | undefined => {
  // 如果没有提供起始元素，则直接返回
  if (!element) {
    return undefined;
  }
  // 从起始元素的直接父元素开始查找
  let currentElement: HTMLElement | null = element.parentElement;
  // 循环向上查找，直到没有父元素为止 (currentElement变为null)
  while (currentElement) {
    const style = getComputedStyle(currentElement);
    // 检查 overflowY 或 overflow 属性
    const overflow = style.overflowY || style.overflow;
    const isScrollable = ['auto', 'scroll'].includes(overflow);
    // 判断元素是否在垂直方向上实际存在可滚动的内容
    const canScroll = currentElement.scrollHeight > currentElement.clientHeight;
    // 如果该元素既被设置为可滚动，又有可滚动的内容，则返回它
    if (isScrollable && canScroll) {
      return currentElement;
    }
    // 继续向上查找下一个父元素
    currentElement = currentElement.parentElement;
  }
  // 如果循环结束仍未找到，则返回 undefined
  return undefined;
};

//睡眠函数
export const sleep = (ms: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('');
    }, ms);
  });
};

// 节流
export const throttleByRaf = (cb: (...args: any[]) => void) => {
  let timer = 0;

  const throttle = (...args: any[]): void => {
    if (timer) {
      cancelAnimationFrame(timer);
    }
    timer = requestAnimationFrame(() => {
      cb(...args);
      timer = 0;
    });
  };

  throttle.cancel = () => {
    cancelAnimationFrame(timer);
    timer = 0;
  };

  return throttle;
};

// 防抖函数
export const debounce = (
  func: (...args: any) => void,
  delay: number,
  immediate: boolean = false
) => {
  let timer: ReturnType<typeof setTimeout> | null = null;
  let isInvoked = false;

  return function (this: any, ...args: any) {
    const context = this;

    if (timer) clearTimeout(timer);

    if (immediate && !isInvoked) {
      func.apply(context, args);
      isInvoked = true;
    }

    timer = setTimeout(() => {
      if (!immediate) {
        func.apply(context, args);
      }
      isInvoked = false;
    }, delay);
  };
};

// 节流函数
export const throttle = (fn: (...args: any) => void, delay: number) => {
  let lastTime = 0;
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  return function (this: any, ...args: any) {
    const now = Date.now();
    const remaining = delay - (now - lastTime);

    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }

    if (remaining <= 0) {
      fn.apply(this, args);
      lastTime = now;
    } else {
      timeoutId = setTimeout(() => {
        fn.apply(this, args);
        lastTime = Date.now();
        timeoutId = null;
      }, remaining);
    }
  };
};

// 将value转换px
export const valueToPx = (value: string | number | undefined) => {
  const numberReg = /^-?\d+(\.\d+)?$/;
  // 检查是否是数字类型，或者是可以转换为数字的字符串
  if (isNumber(value) || (isString(value) && numberReg.test(value))) {
    return value + 'px';
  }
  return value as string;
};

// 判断一个元素是否可以横向滚动
export function isHorizontallyScrollable(element: HTMLElement): boolean {
  const style = getComputedStyle(element);
  const isScrollableOverflow =
    style.overflowX === 'scroll' || style.overflowX === 'auto';
  const isVisible = style.display !== 'none' && style.visibility !== 'hidden';
  if (!isVisible) {
    return false;
  }
  const isContentLarger = element.scrollWidth > element.clientWidth;
  return isScrollableOverflow && isContentLarger;
}

//判断一个元素是否可以纵向滚动
export function isVerticallyScrollable(element: HTMLElement): boolean {
  const style = getComputedStyle(element);
  const isScrollableOverflow =
    style.overflowY === 'scroll' || style.overflowY === 'auto';
  const isVisible = style.display !== 'none' && style.visibility !== 'hidden';
  if (!isVisible) {
    return false;
  }
  const isContentLarger = element.scrollHeight > element.clientHeight;
  return isScrollableOverflow && isContentLarger;
}
